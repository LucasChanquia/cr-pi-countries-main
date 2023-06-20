

const initialState = {
    allCountries: [],
    allCountriesFilter: [],
    countryDetail: [],
    AllActivities: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case 'GET_COUNTRIES':
        return {
            ...state,
            allCountries: action.payload,
            allCountriesFilter: action.payload

        }

        case 'GET_COUNTRIES_DETAIL':
        return{
            ...state,
            countryDetail: action.payload
        }

        case 'CLEAN_DETAIL':
            return{
                ...state, 
                allActivities: []
            }

        case 'ADD_ACTIVITIES':
            return{
                ...state,
                allActivities: action.payload
            }

        case 'SEARCH_COUNTRIES':
            return {
                ...state,
                allCountries: action.payload
            }

        case 'FILTER_BY_CONTINENT':
            const allCountries = state.allCountriesFilter
            
            const continentFiltered = action.payload === 'All' ? allCountries : allCountries.filter(coun => coun.continent === action.payload)
            console.log(continentFiltered);
            return {
                ...state,
                allCountries: continentFiltered

            }

        case 'FILTER_ACTIVITIES':
            let allCountries2 = [...state.allCountriesFilter]
            
            let allActivitiesFilter = action.payload === 'All' ? allCountries2 : allCountries2.filter(coun => coun.Activities.length)
        
            return {
                ...state,
                allCountries: allActivitiesFilter.filter(coun => coun.Activities[0].name === action.payload)
            }

        case 'FILTER_ORDER':
            let allCountries3 = [...state.allCountriesFilter]

            let allCountriesFiltered
            
            if(action.payload === 'A'){
                allCountriesFiltered = allCountries3.sort((a,b) => a.name.localeCompare(b.name))
            }

            if(action.payload === 'D'){
                allCountriesFiltered = allCountries3.sort((a,b) => b.name.localeCompare(a.name))
            }

            if(action.payload === 'P'){
                allCountriesFiltered = allCountries3.sort((a,b) => a.population - b.population)
            }

            if(action.payload === 'G'){
                allCountriesFiltered = allCountries3.sort((a,b) => b.population - a.population)
            }
            
            return{
                ...state,
                allCountries: allCountriesFiltered
            }
            
        default : return {...state}
    }

}
    
   

export default reducer;