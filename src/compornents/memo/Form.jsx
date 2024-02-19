import React, { useState } from 'react'

const Form = ({ createTodo }) => {
  const [enterTodo, setEnterTodo] = useState('')
  const addTodo = (e) => {
    e.preventDefault()

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enterTodo,
    }

    createTodo(newTodo)
    setEnterTodo("")
  }

  return (
    <div className='formClass'>
      <form onSubmit={addTodo}>
        <input type="text" value={enterTodo} onChange={(e) => setEnterTodo(e.target.value)} />
        <button className='memoAddBtn'>追加</button>
        {/* <span>{enterTodo}</span> */}
      </form>
    </div>
  )
}

export default Form
