import {useState} from 'react'

const App = () => {

  const [fullname, setFullname] = useState("")
  const [gender, setGender] = useState("")
  const [vote, setVote] = useState("eligible")
  const submitHandler = (e) => {
    e.preventDefault()
    const user = {
      fullname,
      gender,
      vote
    }
    console.log(user)
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setFullname(e.target.value)} value={fullname} type="text" 
        placeholder='Enter Your Full Name Here......' /> <br /><br />

        <input type="radio" name='gender' checked= {gender === "male" && true}
        onChange={(e) => e.target.checked && setGender("male")}
        /> Male <br /><br />
        <input type="radio" name='gender' checked= {gender === "female" && true}
        onChange={(e) => e.target.checked && setGender("female")}
        /> Female <br /><br />
        
        <input type="checkbox" onChange={(e) => e.target.checked ? setVote("eligible") : setVote("not eligible for vote")}
        checked={vote === "eligible" ? true : false}
        /> "Eligible or Not Eligible for Vote!" <br /><br />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App