import React, { useState } from 'react'
import './Todo.css'

function Todo({ user, handleUser }) {
  const [data, setData] = useState([])
  const handleExit = () => {
    localStorage.clear();
    handleUser(null)
  } 
  return (
    <>
      <div className='header'>
        <div className='left'>Hello {user}</div>
        <div className='right'>
          <button onClick={() => handleExit()}>
            Logout
          </button>
        </div>
      </div>
      <div className="container">
        <div className="demo-flex-spacer-up" />
        <div className="webflow-style-input">
          <input className="" type="email" placeholder="What's your to do?" />
          <button type="submit">Click</button>
        </div>
        <div className="demo-flex-spacer-down" />
      </div>
    </>

  )
}

export default Todo