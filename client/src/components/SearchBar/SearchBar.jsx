import {useState} from 'react';
import style from './SearchBar.module.css'

const SearchBar = ({onSearch}) => {

    const [id, setId] = useState('')

    const handleChange = (event) => {
        setId(event.target.value)
    }

    return(
        <div className={style.container}>
            <input className={style.input} type="search" placeholder='Ingresa un país' onChange={handleChange} value={id}/>

            <button className={style.button} onClick={() =>{onSearch(id)}}>Buscar / Traer Todos</button>
        </div>
    )
}

export default SearchBar;