import {useState} from 'react'

const App = () => {

    const [name, setname] = useState("")
    const [gender, setgender] = useState("")
    const [vote, setvote] = useState("eligible")
    
    const submitHandler = (e) => {
        e.preventDefault()
        const user = {
            name,
            gender,
            vote
        }
        console.log(user)
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input onChange={(e) => setname(e.target.value)} value={name} type="text" placeholder='full name'/> <br /><br />
            
            <input type="radio" name='gender' checked= {gender === "male" && true}
            onChange={(e) => e.target.checked && setgender("male")} /> male <br /><br />

            <input type="radio" name='gender' checked= {gender === "female" && true}
            onChange={(e) => e.target.checked && setgender("female")} /> female <br /><br />

            <input type="checkbox" onChange={(e) => e.target.checked ? setvote("eligible") : setvote("not eligible")} 
            checked={vote === "eligible" ? true : false}/> "Eligible or Not Eligible for Vote ?" 

            <br /> <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default App