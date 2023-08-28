import axios from "axios";

const URL = 'https://country-pi-w1fg.onrender.com'

export const getCountries = () => {
  try {
    return async  (dispatch) => {
      const { data } = await axios.get(`${URL}/countries`);
      if(data.length)
      return dispatch({ type: "GET_COUNTRIES", payload: data });
    };
  } catch (error) {
    alert("Error: " + error.response.data.error);
  }
};

export const getCountryDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/countries/${id}`);

      if (data.length) {
        return dispatch({
          type: "GET_COUNTRIES_DETAIL",
          payload: data,
        });
      }
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };
};

export const cleanDetail = () => {
  return {
    type: "CLEAN_DETAIL",
  };
};

export const addActivity = (activities) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `${URL}/activities`,
        activities
      );
      return dispatch({ type: "ADD_ACTIVITIES", payload: data });
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };
};

export const getActivities = () =>{
    return async (dispatch)=> {
        try {
            const { data } = await axios.get(`${URL}/activities`);
            return dispatch({ type: 'GET_ACTIVITIES', payload: data});
        } catch (error) {
            alert("Error: " + error.response.data.error);
        }
    }
}

export const onSearch = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${URL}/countries?name=${name}`
      );

      if (data.length) {
        return dispatch({
          type: "SEARCH_COUNTRIES",
          payload: data,
        });
      }
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };
};

export const deleteActivities = (id) => {

  return async (dispatch) =>{
    try {
      const { data } = await axios.delete(`${URL}/activities/${id}`);

      console.log(data);

    
      if(data === 1){
        console.log("sdsdf",id);
        return dispatch({
          type: "DELETE_ACTIVITIES",
          payload: id
        })
      }
    } catch (error) {
       alert("Error: " + error.response);
    }
  }
}

export const filterCountryByContinent = (payload) => {
  return {
    type: "FILTER_BY_CONTINENT",
    payload,
  };
};

export const filterActivities = (payload) => {
  return {
    type: "FILTER_ACTIVITIES",
    payload,
  };
};

export const filterOrder = (payload) => {
  return {
    type: "FILTER_ORDER",
    payload,
  };
};
