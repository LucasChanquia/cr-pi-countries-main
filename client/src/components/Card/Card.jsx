import {Link} from 'react-router-dom'
import style from './Card.module.css'


const Card = ({id, name, image, continent}) => {
    return (
        <div className={style.container}>
            <div className={style.pepito}>
        
                <h2 className={style.title}>{name}</h2>
                <Link to={`/detail/${id}`}>
                    <img src={image} alt={name} className={style.img} />
                </Link>
                <h3>{continent}</h3>
        
            </div>
        </div>
    )
}

export default Card;