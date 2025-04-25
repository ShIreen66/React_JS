import { useState } from 'react'


function App() {
  const [profile, setprofile] = useState(
    [
      { "name": "Aarav Mehta", "age": 28, "city": "Mumbai" },
      { "name": "Sara Khan", "age": 24, "city": "Delhi" },
      { "name": "Rohan Das", "age": 30, "city": "Bangalore" },
      { "name": "Priya Sharma", "age": 26, "city": "Jaipur" },
      { "name": "Kabir Singh", "age": 32, "city": "Chandigarh" }
    ]
    
  )

  let profileRender = profile.map((profile, index) => (
    <div key={index}>
      <h1>Name is: {profile.name}</h1>
      <h2>Age is: {profile.age}</h2>
      <h3>City is: {profile.city}</h3>
    </div>
  ))

  return (
    <>
      <div>{profileRender}</div>
    </>
  )
}

export default App