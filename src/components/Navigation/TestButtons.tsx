import React from 'react'
import { Link } from 'react-router-dom'

const TestButtons: React.FC = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/example">Example</Link>
      <Link to="/rules">Rules</Link>
    </div>
  )
}

export default TestButtons
