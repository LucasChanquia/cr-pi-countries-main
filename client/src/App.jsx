import { Routes, Route} from 'react-router-dom';
import axios from 'axios'
import Home from './components/Home/Home'
import Landing from './components/Landing/Landing'
import Nav from './components/Nav/Nav'
import Detail from './Detail/Detail'
import Form from './components/Form/Form'
import SearchBar from './components/SearchBar/SearchBar'
import { Navigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import * as actions from './Redux/actions'

import './App.css'

function App() {

  
  const allCountries = useSelector((state) => state.allCountries)
 

  const dispatch = useDispatch()

  useEffect(()=>{
     dispatch(actions.getCountries())
  },[])

  const onSearch = async (id) => {

    try {
      
       const {data} = await axios(`http://localhost:3001/countries?name=${id}`)
      //  console.log(data);
       if (data[0].name) {
        dispatch({type: 'SEARCH_COUNTRIES', payload: data})
          
          } else {
           throw Error()
          }
    } catch (error) {
       alert('There are no characters with this ID');
       }
      
 }

  
 
 const location = useLocation();

  return (
    
      <div>
        {location.pathname !== '/' && <Nav/>  }
        {location.pathname === '/home' && <SearchBar onSearch={onSearch} />}

              

        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/home' element={<Home allCountries={allCountries}/>}/>
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/activities' element={<Form/>}/>
          <Route path='*' element={<Navigate to='/home'/>}/>
        </Routes>
        
      </div>
    
  )
}

export default App
