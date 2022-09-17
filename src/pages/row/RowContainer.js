import React from 'react'
import { baseService } from '../../api/baseService'
import Row from './Row'

function RowContainer({ data, todo, setData, setButtonStatus, setTodo, setSelectedId }) {
  const handleRemove = async (id) => {
    let filteredTodos = data.filter(x => x.id != id);
    setData([...filteredTodos]);
    setButtonStatus("Add")
    await baseService.delete("/todos", id)
  }
  const handleUpdate = async (id) => {
    var result = data.filter(x => x.id == id)[0]
    setTodo(result.content)
    setSelectedId(result.id)
    setButtonStatus("Update")
  }
  return (
    <>
      {data.length != 0 && (
        data.map((element) => {
          return <Row key={element.id} element = {element} handleRemove = {handleRemove} handleUpdate = {handleUpdate} />
        })
      )}
    </>
  )
}

export default RowContainer