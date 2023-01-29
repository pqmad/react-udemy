import React, { useContext } from 'react'
import { userContext } from './context/UserContext'

const usuario={
  id:123,
  name:"mad",
  email:"mad@gmail.com",
}


export const LoginPage = () => {
  const { user, setuser} = useContext(userContext) //regresará el usercontext más cercano


  return (
    <>
      <h1>Login</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button className='btn btn-warning' onClick={()=>setuser(usuario)}>Set USER</button>
    </>
  )
}
