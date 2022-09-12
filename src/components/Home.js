import React from 'react'
import Child from './Child'
import "./Home.css"


const Home = () => {
  return (
    <div className='home'>
        <h1 >Welcome Home</h1>
        <Child />
    </div>
  )
}

export default Home