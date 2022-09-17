import React, { useState } from 'react'
import Row from '../row/Row';
import RowContainer from '../row/RowContainer';
import './Todo.css'

function Todo({ user, handleUser }) {
  const [data, setData] = useState([])
  const handleExit = () => {
    localStorage.clear();
    handleUser(null)
  }
  return (
    <>
      <div className='grid-container'>
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
            <button type="submit">Add</button>            
          </div>
          <RowContainer/>
          <div className="demo-flex-spacer-down" />
        </div>
      </div>

    </>

  )
}

export default Todo