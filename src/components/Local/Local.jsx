import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Local.css'
import {FiMapPin} from 'react-icons/fi'
import {BsSearch} from 'react-icons/bs'

const Local = ({setWeather }) => {

  const [local, setLocal] = useState('')
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=e4b6765995c5032ab620210ba1dc6bcf&units=metric`,
      );
      setData(result.data);
    }catch (err) {
      setWeather(err)
      console.log(err)
      }
  };

  function handleKeyDown(e){
    if(e.keyCode===13){
      e.preventDefault();
      search();
    }
  }
  
  function search(){
    fetchData()
    console.log(data)
  }
  
  useEffect(() => {
    if (data.length !== 0) {
      setWeather(data);
    }
  }, [data, setWeather]);

  return (
    <form action="" className='form_container'>
      <div className="search_container">
        <i><FiMapPin/></i>
        <input 
          type="text" 
          onChange={(e) => setLocal(e.target.value)} 
          placeholder='Search here'
          onKeyDown={handleKeyDown}
        />
      </div>
      <i id='land' onClick={search} ><BsSearch/></i>
    </form>
  )
}

export default Local