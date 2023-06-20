import axios from 'axios'




export const getCountries = () => {

    return function (dispatch) {
        return fetch('http://localhost:3001/countries')
        .then((response)=> response.json())
        .then((data) => dispatch({type:'GET_COUNTRIES', payload: data}))
    }
};

export const getCountryDetail = (id) =>{

    return function (dispatch) {
        return fetch(`http://localhost:3001/countries/${id}`)
        .then((response)=> response.json())
        .then((data) => dispatch({type:'GET_COUNTRIES_DETAIL', payload: data}))
    }
}

export const cleanDetail = () =>{
    return{
        type: 'CLEAN_DETAIL'
    }
}
export const addActivity =  (activities) => {
    console.log(activities);
    const URL = 'http://localhost:3001/activities'
    return async (dispatch) => {
        const { data } = await axios.post(URL, activities)
        return dispatch({type:'ADD_ACTIVITIES', payload: data })
    }
    
}

export const filterCountryByContinent = (payload) => {
    
    return{
        type: 'FILTER_BY_CONTINENT',
        payload
    }
}


export const filterActivities = (payload) => {
    return {
        type: 'FILTER_ACTIVITIES',
        payload
    }
}

export const filterOrder = (payload) => {
    return{
        type: 'FILTER_ORDER',
        payload
    }
}

