

import { useContext } from 'react'
import {UserContext } from './Card'
// import {}

const App = () => {

  const data = useContext(UserContext)
  console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default App