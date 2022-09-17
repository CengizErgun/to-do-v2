import React from 'react'
import { helper } from '../../api/helper';
import './Row.css'

function Row({element, handleRemove, handleUpdate}) {
  const handleInputWhenUpdate = () => {
    helper.makeInputContent(element.content)
    handleUpdate(element.id)
  }
  const handleInputWhenRemove = () => {
    helper.makeInputContent("")
    handleRemove(element.id)
  }
  return (
    <div className='row'>    
        <p>
          {element.content} 
        </p> 
        <div className='buttons'>
          <button onClick={() => handleInputWhenRemove(element.id)}>Remove</button>                       
          <button onClick={() => handleInputWhenUpdate(element.id)}>Update</button>
        </div>                               
    </div>
  )
}

export default Row