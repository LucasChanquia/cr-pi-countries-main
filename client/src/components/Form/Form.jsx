import { useEffect, useState } from "react";
import validate from "../Validate/Validate";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/actions";
import style from "./Form.module.css";

const Form = () => {
  const allCountries = useSelector((state) => state.allCountries);

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    pais: [],
  });
  
  const [errors, setErrors] = useState({
    name: "",
  });


  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "pais") {
      setForm({
        ...form,
        pais: [...form.pais, value],
      });
      setErrors(
        validate({
          ...form,
          [property]: value,
        })
      );
    } else {
      setForm({
        ...form,
        [property]: value,
      });
      setErrors(
        validate({
          ...form,
          [property]: value,
        })
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(Object.keys(errors).length === 0){
        
    dispatch(actions.addActivity(form));
    setForm({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      pais: [],
    });
    alert("The activity was created successfully");
    } else{
        alert('Please, complete all the data')
    }
  };

  

  const handleDelete = (element) => {
    setForm({
      ...form,
      pais: form.pais.filter((ele) => ele !== element),
    });
  };



  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.line}>
          <label htmlFor="">Name: </label>
          <select
            className={style.select}
            name="name"
            value={form.name}
            onChange={handleChange}
          >
            <option value="" disabled selected>
            Select the activity
            </option>
            <option value="Trekking">Trekking</option>
            <option value="Walks">Walks</option>
            <option value="Bike Tour">Bike Tour</option>
            <option value="City Tour">City Tour</option>
            <option value="Gastronomic Circuit">Gastronomic Circuit</option>
            <option value="Rapel">Rapel</option>
            <option value="Shopping">Shopping</option>
            <option value="Museum Circuit">Museum Circuit</option>
            <option value="Free Choice">Free Choice</option>
          </select>
          {errors.name && <p className={style.error}>{errors.name}</p>}
        </div>

        <div className={style.line}>
          <label>Difficulty: </label>
          <select
            className={style.select}
            name="difficulty"
            value={form.difficulty}
            onChange={handleChange}
            id=""
          >
            <option value="" disabled selected>
            Select a value
            </option>
            <option value="1 (Null difficulty)">1 (Null difficulty)</option>
            <option value="2 (Low difficulty)">2 (Low difficulty)</option>
            <option value="3 (Medium difficulty)">3 (Medium difficulty)</option>
            <option value="4 (High difficulty)">
              4 (High difficulty)
            </option>
            <option value="5 (Extreme difficulty)">
              5 (Extreme difficulty)
            </option>
          </select>
          {errors.difficulty && (
            <p className={style.error}>{errors.difficulty}</p>
          )}
        </div>
        <div className={style.line}>
          <label htmlFor="duration">Duration (in Hours): </label>
          <input
            className={style.select}
            type="number"
            value={Form.duration}
            onChange={handleChange}
            name="duration"
            min={1}
            max={6}
          />
          {errors.duration && <p className={style.error}>{errors.duration}</p>}
        </div>

        <div className={style.line}>
          <label htmlFor="">Season: </label>
          <select className={style.select} name="season" value={form.season} onChange={handleChange} id="" >
            <option value="" disabled selected>Select a value</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </select>
          {errors.season && <p className={style.error}>{errors.season}</p>}
        </div>
        <div className={style.line}>
          <label htmlFor="">Country / Countries: </label>
          <select
            name="pais"
            className={style.select}
            onChange={(event) => {
              handleChange(event);
            }}
          >
            <option value="" disabled selected>
            Select the country(s)
            </option>
            {allCountries?.map((e) => {
              
              return (
                <option value={e.name} key={e.name} >
                  {e.name}
                </option>
              );
            })}
          </select>
          {errors.pais && <p className={style.error}>{errors.pais}</p>}

          <div className={style.line}>
            {
            form.pais?.map((element) => (
              <div className={style.countries} key={element}>
                
                <button
                  className={style.setcountry}
                  onClick={() => {
                    handleDelete(element);
                  }}
                >
                  {`${element}`}
                </button>
              </div>
            ))
          }
          </div>
        </div>

        <div className={style.line}>
          <button type="submit" className={style.button}>
          Create Activity
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
