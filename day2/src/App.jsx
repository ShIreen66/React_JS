
import {useState} from 'react'
const App = () => {
  const [fullname, setfullname] = useState("")
  const [email, setemail] = useState("")

  const SubmitHandler = (e) => {
    e.preventDefault()
    console.log("fullname is------>", fullname, "and", "email is ---------->", email)
  }

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input onChange={(e) => {setfullname(e.target.value)}} value={fullname} type="text" placeholder='full name'/> <br /> <br />
        <input onChange={(e) => {setemail(e.target.value)}} value={email} type="text" placeholder=' email'/> <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

// import React, { useState } from 'react';

// const app = () => {
//   const [name, setname] = useState('');

//   const handleChange = (e) => {
//     setname(e.target.value);
//     console.log(e.target.value); // har letter ke baad print hoga
//   };

//   return (
//     <input
//       type="text"
//       value={name}
//       onChange={handleChange}
//       placeholder="Type something..."
//     />
//   );
// }

// export default app
