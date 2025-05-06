import {useState} from 'react'
const App = () => {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const user = {
      name,
      gender
    }

    console.log(user)
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setName(e.target.value)}
        type="text" 
        value={name}
        placeholder='Write Something Here........'
        />

        <input type="radio" name='gender' checked={gender === "male" && true}
        onChange={(e) => e.target.checked && setGender ("male")} 
        /> Male
        <input type="radio" name='gender' checked={gender === "Female" && true}
        onChange={(e) => e.target.checked && setGender ("Female")} 
        /> Female
        

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App