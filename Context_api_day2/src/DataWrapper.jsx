import React, { createContext, useState } from 'react'
export const UserContext = createContext()

const DataWrapper = (props) => {
    const [user, setUser] = useState([
        {name: "John Doe", age: 21, city: "Bhopal"}
    ])
  return (
    <div>
        <UserContext value={[user, setUser]}>{props.children}</UserContext>
    </div>
  )
}

export default DataWrapper