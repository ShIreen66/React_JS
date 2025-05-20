import React, { useContext } from 'react'
import { UserContext } from './DataWrapper'

const App = () => {
  const data = useContext(UserContext)
  console.log(data)
  return (
    <div>

    </div>
  )
}

export default App