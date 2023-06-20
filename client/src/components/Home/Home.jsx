import { useDispatch, useSelector } from 'react-redux'
import {useState, useEffect} from 'react'
import Card from '../Card/Card'
import * as actions from '../../Redux/actions'
import Paginado from '../Paginado/Paginado'
import Filters from '../Filters/Filters'
import style from './Home.module.css'




const Home = () =>{

    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.allCountries)

    const [currentPage, setCurrentPage] = useState(1)
    const [countryPerPage, setCountryPerPage] = useState(10)
    const indexOfLastCountry = currentPage * countryPerPage
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage
    const currentCountry = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
 


    useEffect(()=>{
        dispatch(actions.getCountries())
    },[])

     return (
         <div>
            <div>
                <Filters />
            </div>
            <div>
                <Paginado countryPerPage={countryPerPage} allCountries={allCountries.length} paginado={paginado} currentPage={currentPage}  />
            </div>
            <div className={style.card}>
                {
                    currentCountry?.map( coun =>{
                        return ( 
                        <div className={style.tarjet}>
                        <Card name={coun.name} image={coun.image} continent={coun.continent} id={coun.id}   />
                        </div>
                        )
                    })
                }
            </div>
         </div>
    )
}



export default Home;