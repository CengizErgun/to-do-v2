import React from 'react'
import './Row.css'

function Row() {
  return (
    <div className='row'>    
        <p>
        RowRowRowRowRowRowR 
        </p> 
        <div className='buttons'>
            <button>Remove</button>                       
            <button>Update</button>
        </div>                               
    </div>
  )
}

export default Row