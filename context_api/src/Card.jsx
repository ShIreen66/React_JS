import React, { createContext, useState } from 'react'

export const UserContext = createContext(null)
const Card = (props) => {
    
  const [users, setusers] = useState([{
    id: "373789", name: "John", age: 21
  },])

  return (
    <div>

      <UserContext value={[users, setusers]}>{props.children}</UserContext>
      {/* <h1 style={{color: "red"}}>{props.children}</h1> */}
    </div>
  )
}

export default Card