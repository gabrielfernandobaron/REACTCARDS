import './App.css';
import Tarjetas from './components/tarjetas';
import { useEffect,useState } from 'react';
import axios from 'axios';

function App() {
  const [data,setData] =  useState([])

  const getData=()=>{
    axios('data.json').then((res)=>{
      console.log(res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
    }
  
  useEffect(() => {

  getData()

  },[])
  
  return(
    <div className="App">
      <div className="tarjetas_title">
        <h1 className="title">star wars</h1>
        
      </div>
      

      {data?.map(el => {
        return(
          
          <Tarjetas key={el.id} image={el.image} abilidad={el.abilidad} type={el.type} descripcion={el.descripcion}/>
        
        )
      })
    }
    </div>
  )
  }
  
export default App ;
