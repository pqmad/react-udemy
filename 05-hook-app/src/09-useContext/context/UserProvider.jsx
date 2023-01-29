//children seran los componentes que queremos dentro de este
import { useState } from "react";
import { userContext } from "./UserContext";




// const user={
//   id:123,
//   name:"mad",
//   email:"mad@gmail.com",
// }
export const UserProvider = ({ children }) => {
  const [user, setuser] = useState()

  return (
    // <userContext.Provider value={{hola:'mundo', user}}>
    <userContext.Provider value={{ user, setuser }}>
      {children}
    </userContext.Provider>
  )
}
