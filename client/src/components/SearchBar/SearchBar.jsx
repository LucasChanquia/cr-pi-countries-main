import {useState, useEffect} from 'react';
import style from './SearchBar.module.css'
import { useDispatch } from 'react-redux';
import {onSearch} from '../../Redux/actions'



const SearchBar = () => {
    
    const dispatch = useDispatch()

    const [name, setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleClick = async() =>{
        await dispatch(onSearch(name))
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter"){
        handleClick()}
    }
    
    return(
        <div className={style.container}>
            <input onKeyPress={handleKeyPress} className={style.input} type="search" placeholder='ENTER A COUNTRY' onChange={handleChange} value={name}/>

            <button className={style.button} onClick={() =>{handleClick();setName(name)}}>Search / Get All</button>
        </div>
    )
}

export default SearchBar;