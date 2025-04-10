import React, { useState } from 'react'

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAddTodo(text.trim())
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
        className="todo-input"
      />
      <button type="submit" className="add-button">
        +
      </button>
    </form>
  )
}

export default TodoForm 