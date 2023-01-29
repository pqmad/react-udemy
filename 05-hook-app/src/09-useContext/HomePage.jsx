import { useContext } from "react"
import { userContext } from "./context/UserContext"

export const HomePage = () => {
  const { user } = useContext(userContext) //regresará el usercontext más cercano


  return (
    <>
      <h1>Home <small>{user?.name}</small></h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  )
}
