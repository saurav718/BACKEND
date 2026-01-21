import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [joke, setJoke] = useState([])

// standrad way to fetch data using axios and useEffect
  useEffect(()=>{axios.get('/api/joke')
    .then((response)=>setJoke(response.data))
  
     .catch((erroor)=>{
         console.log("Error fetching jokes:", erroor);
     })
  }
  ,[])
  return (
    <>
      
      <div>JOKES</div>
      <p>JOKES: {joke.length}</p>

      {joke.map((j)=>(
        <div key={j.id}>
          <h3>{j.joke}</h3>
        </div>
      ))}
    </>
  )
}

export default App
