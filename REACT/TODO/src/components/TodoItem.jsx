import React from 'react'

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="todo-content" onClick={() => onToggle(todo.id)}>
        <input 
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />
        <span className="todo-text">{todo.text}</span>
      </div>
      <button 
        onClick={() => onDelete(todo.id)}
        className="delete-btn"
      >
        ×
      </button>
    </li>
  )
}

export default TodoItem 