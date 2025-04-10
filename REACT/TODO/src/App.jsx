import { useReducer, useEffect } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

// Action types
const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

// Initial sample todos
const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build Todo App", completed: true },
];

// Get todos from local storage or use initial todos
const getInitialTodos = () => {
  const savedTodos = localStorage.getItem('todos')
  return savedTodos ? JSON.parse(savedTodos) : initialTodos
}

// Reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        id: Date.now(),
        text: action.payload,
        completed: false
      }]
    case TOGGLE_TODO:
      return state.map(todo => 
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      )
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, null, getInitialTodos)

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleAddTodo = (text) => {
    dispatch({ type: ADD_TODO, payload: text })
  }

  const handleToggleTodo = (id) => {
    dispatch({ type: TOGGLE_TODO, payload: id })
  }

  const handleDeleteTodo = (id) => {
    dispatch({ type: REMOVE_TODO, payload: id })
  }

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      
      <TodoForm onAddTodo={handleAddTodo} />
      
      <TodoList 
        todos={todos} 
        onToggle={handleToggleTodo} 
        onDelete={handleDeleteTodo} 
      />
    </div>
  )
}

export default App
