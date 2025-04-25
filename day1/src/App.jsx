// import { useState } from 'react'

// function App() {
//   const [profile, setprofile] = useState(
//     [
//       { "name": "Aarav Mehta", "age": 28, "city": "Mumbai" },
//       { "name": "Sara Khan", "age": 24, "city": "Delhi" },
//       { "name": "Rohan Das", "age": 30, "city": "Bangalore" },
//       { "name": "Priya Sharma", "age": 26, "city": "Jaipur" },
//       { "name": "Kabir Singh", "age": 32, "city": "Chandigarh" }
//     ]
    
//   )

//   let profileRender = profile.map((profile, index) => (
//     <div key={index}>
//       <h1>Name is: {profile.name}</h1>
//       <h2>Age is: {profile.age}</h2>
//       <h3>City is: {profile.city}</h3>
//     </div>
//   ))

//   return (
//     <>
//       <div>{profileRender}</div>
//     </>
//   )
// }

// export default App


import {useState}  from 'react'

const App = () => {
  const [count, setcount] = useState([99, 88, 77, 66, 55, 44, 33, 22, 11])
  const countRender = count.map((count, index) => (
    <li key={index}> {count} </li>
  ))

  return (
    <div>
      <h1>Provide order list in this number's:- {count}</h1>
      <ul>{countRender}</ul>
    </div>
  )
}

export default App