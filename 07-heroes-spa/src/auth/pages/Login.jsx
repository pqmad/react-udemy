import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const natigate=useNavigate()
  const onLogin = () => {
    natigate('/marvel', {replace: true}) 
  }
  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button className='btn btn-primary' onClick={onLogin}>Login</button>
    </div>
  )
}
