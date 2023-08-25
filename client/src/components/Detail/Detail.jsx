import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from '../../Redux/actions'
import style from './Detail.module.css'

const Detail = () => {
    
   

    const {id} = useParams();

    const dispatch = useDispatch();

    const countryDetail = useSelector((state)=>state.countryDetail)

    useEffect(()=>{
        dispatch(actions.getCountryDetail(id)) //despacha cuando se monta

        return () =>{
            dispatch(actions.cleanDetail()) // despacha cuando se desmonta
        }
    },[])

    return(
        <div className={style.container}>

            <div className={style.box}>
                <img src={countryDetail[0]?.image} alt={countryDetail[0]?.name} className={style.img} />
            </div>

            <div className={style.box2}>
                <h2 className={style.text}>ID: {countryDetail[0]?.id}</h2>
                <h2 className={style.text}>Country: {countryDetail[0]?.name}</h2>
                <h3 className={style.text}>Continent: {countryDetail[0]?.continent}</h3>
                <h3 className={style.text}>Capital: {countryDetail[0]?.capital}</h3>
                <h3 className={style.text}>Subregion: {countryDetail[0]?.subregion}</h3>
                <h3 className={style.text}>Area: {countryDetail[0]?.area} m3</h3>
                <h3 className={style.text}>Population: {countryDetail[0]?.population} inhabitants</h3>
                <h2>Activities created in the country: </h2>
                {
                   (countryDetail[0]?.Activities.length > 0) ? 
                   <h3 className={style.text}> {countryDetail[0]?.Activities?.map(e =>(
                    <p className={style.text}>{[`Activity: ${e.name}`,<br />, `Difficulty: ${e.difficulty}`,<br />, `Duration: ${e.duration} hs`, <br />, `Season: ${e.season}`]}</p>
                ))}
                </h3> :
                <h3 className={style.text}>{`The country ${countryDetail[0]?.name} has no associated activities`}</h3>
                }
            </div>
        </div>
    )
}

export default Detail;