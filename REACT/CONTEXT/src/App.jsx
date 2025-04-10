import React from 'react'
import './App.css'
import ParentComponent from './components/ParentComponent'
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <div className="app">
      <h1>Context API Demo - Avoiding Prop Drilling</h1>
      <div className="card">
        <UserProvider>
          <ParentComponent />
        </UserProvider>
      </div>
    </div>
  )
}

export default App
