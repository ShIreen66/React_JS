import React, { useState } from 'react'

const App = () => {

  const [fullname, setfullname] = useState('')
  const [gender, setgender] = useState("")
  const [accept, setaccept] = useState("accept")
  const [select, setselect] = useState("bhopal")

  const submitHandler = (e) => {
    e.preventDefault()
    const user = {
      fullname,
      gender,
      accept,
      select
    }

    console.log(user)
  }
  return (
    

    <div>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setfullname(e.target.value)}
        value={fullname}
        type="text" placeholder='full name'/> <br /> <br />

        <input type="radio" checked= {gender === "male" && true}
        onChange={(e) => e.target.checked && setgender("male")}
        /> Male <br /><br />
        
        <input type="radio" checked= {gender === "female" && true}
        onChange={(e) => e.target.checked && setgender("female")}
        /> female <br /><br />
        

        <input type="checkbox" value={accept} onChange={(e) => e.target.checked ? setaccept ("eligible"): setaccept ("not eligible")}
        checked={accept === "eligible" ? true: false}
        /> Accept <br /><br />

        <select value={select} onChange={(e) => setselect(e.target.value)}>
          <option value="Bhopal">Bhopal</option>
          <option value="Indore">Indore</option>
          <option value="Ujjain">Ujjain</option>
          <option value="Delhi">Delhi</option>
        </select> <br /> <br />
        <button>Submit</button>
      </form>
      </div>
  )
}

export default App