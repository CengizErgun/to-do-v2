import React, { useEffect, useState } from 'react'
import { baseService } from '../../api/baseService';
import { helper } from '../../api/helper';
import RowContainer from '../row/RowContainer';
import './Todo.css'

function Todo({ user, handleUser }) {
  const [data, setData] = useState([])
  const [todo, setTodo] = useState("")
  const [selectedId, setSelectedId] = useState(null)
  const [buttonStatus, setButtonStatus] = useState("Add")
  const [requestStatus, setRequestStatus] = useState("normal")
  const [themeMode, setThemeMode] = useState("dark")
  const handleExit = () => {
    localStorage.removeItem("name");
    handleUser(null)
    window.location.reload();
  }
  useEffect( () => {
    const mode = JSON.parse(localStorage.getItem('mode'));
    console.log(mode)
    if (mode != null) {
      setThemeMode(mode)
    }
  }, [])
  const handleMode = () => {
    if(themeMode == "dark"){
      setThemeMode("light")
      localStorage.setItem('mode', JSON.stringify("light"));
    }else if(themeMode == "light"){
      setThemeMode("dark")
      localStorage.setItem('mode', JSON.stringify("dark"));
    }    
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
  }
  if(themeMode == "dark"){
    document.body.style.backgroundImage = "radial-gradient(circle at 0% 0%, #373b52, #252736 51%, #1d1e26)"
  }else if(themeMode == "light"){
    document.body.style.backgroundImage = "radial-gradient(circle at 0% 0%, rgb(214, 199, 157), #55597c 51%, #2c2f41)"
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
        <div className='header'>
          <div className='left'>Hello {user}</div>          
          {requestStatus == "waiting" && (
            <div className='wait'>
              Please Wait...
            </div>
          )}    
          {console.log(themeMode)}
          <div className='theme'>
            <button onClick={() => handleMode()}>
            { themeMode == "dark" ? (              
            <div >
              To Light
            </div>
          ) : (
            <div >
              To Dark
            </div>
          )}   
            </button>
          </div>  
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
            <button type="submit" onClick={() => handleCreateOrUpdate()}>{buttonStatus} Todo</button>            
          </div>
          <RowContainer data = {data} setData = {setData} setButtonStatus = {setButtonStatus} todo = {todo} setTodo = {setTodo} setSelectedId = {setSelectedId}/ >
          <div className="demo-flex-spacer-down" />
        </div>
    </>    
  )
}
export default Todo