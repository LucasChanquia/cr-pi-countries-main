import * as actions from "../../Redux/actions";
import { useDispatch } from "react-redux";
import style from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();

  const handleFilterContinent = (event) => {
    dispatch(actions.filterCountryByContinent(event.target.value));
    
  };

  const handleFilterActivities = (event) => {
    dispatch(actions.filterActivities(event.target.value));
  };

  const handleFilterOrder = (event) => {
    console.log(event.target.value);
    dispatch(actions.filterOrder(event.target.value));
  };

  return (
    <div>
      <div>
        <select
          onChange={(event) => handleFilterContinent(event)}
          className={style.select}>
          <option value="All">All continents</option>
          <option value="Asia">Asia</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select
          onChange={(event) => handleFilterActivities(event)}
          className={style.select}>
          <option value="All">All Activities</option>
          <option value="Trekking">Trekking</option>
          <option value="Caminata">Walks</option>
          <option value="Bike Tour">Bike Tour</option>
          <option value="City Tour">City Tour</option>
          <option value="Gastronomic Circuit">Gastronomic Circuit</option>
          <option value="Rapel">Rapel</option>
          <option value="Shopping">Shopping</option>
          <option value="Museum Circuit">Museum Circuit</option>
          <option value="Free Choice">Free Choice</option>
        </select>

        <select
          onChange={(event) => handleFilterOrder(event)}
          className={style.select}>
          <option value="" disabled selected>Sort By:</option>
          <option value="A">Upward Country</option>
          <option value="D">Falling Country</option>
          <option value="P">Upward Population</option>
          <option value="G">Falling Population</option>
        </select>
        
      </div>
    </div>
  );
};

export default Filters;
