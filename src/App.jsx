import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './components/LoginForm'

function App() {

  return (
    <div className="container">
      <div className="row">
        <LoginForm></LoginForm>
      </div>
    </div>
  )
}

export default App
