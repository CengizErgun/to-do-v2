import React, { useEffect, useState } from 'react'
import { baseService } from '../../api/baseService';
import { helper } from '../../api/helper';
import Row from '../row/Row';
import RowContainer from '../row/RowContainer';
import './Todo.css'

function Todo({ user, handleUser }) {
  const [data, setData] = useState([])
  const [todo, setTodo] = useState("")
  const [selectedId, setSelectedId] = useState(null)
  const [buttonStatus, setButtonStatus] = useState("Add")
  const [requestStatus, setRequestStatus] = useState("normal")
  const handleExit = () => {
    localStorage.clear();
    handleUser(null)
  }
  const handleCreateOrUpdate = async () => {    
    switch(buttonStatus){
      case "Add":
        if(todo.length > 2){
          setRequestStatus("waiting")
          var response = await baseService.add('/todos', todo)
          setRequestStatus("normal")
          let newTodo = response
          setData([...data, newTodo])
          // document.getElementById("myId").value = "";
          helper.makeInputContent("")
        }else{
          alert("Your todo length should have at least 3 letters")
        }
        break;
      case "Update":
        if(todo.length > 2){
          var result = data.filter(x => x.id == selectedId)[0]
          result.content = todo
          setData([...data])
          setButtonStatus("Add")
          helper.makeInputContent("")
          var response = await baseService.update('/todos', selectedId, result, todo)
        }else{
          alert("Your todo length should have at least 3 letters")
        }
        console.log(todo)
        break;     
    }

    // baseService.add()
  }
  useEffect(() => {
    async function getAll(){
      setRequestStatus("waiting")
      const response = await baseService.getAll("/todos")
      setRequestStatus("normal")
      setData(response)
    }
    getAll()
  }, [])  
  return (
    <>
      <div className='grid-container'>
        <div className='header'>
          <div className='left'>Hello {user}</div>          
          {requestStatus == "waiting" && (
            <div>
              Please Wait...
            </div>
          )}      
          <div className='right'>
            <button onClick={() => handleExit()}>
              Logout
            </button>
          </div>
        </div>
        <div className="container">
          <div className="demo-flex-spacer-up" />
          <div className="webflow-style-input">
            <input placeholder="What's your to do?" onChange={e => setTodo(e.target.value)} id="myId"/>
            <button type="submit" onClick={() => handleCreateOrUpdate()}>{buttonStatus}</button>            
          </div>
          <RowContainer data = {data} setData = {setData} setButtonStatus = {setButtonStatus} todo = {todo} setTodo = {setTodo} setSelectedId = {setSelectedId}/ >
          <div className="demo-flex-spacer-down" />
        </div>
      </div>
    </>    
  )
}

export default Todo