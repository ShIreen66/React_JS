import { useForm } from "react-hook-form"


export default function App() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (e) => {
    console.log(register)
    // handleSubmit = e.target.value
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="type something"/>
      
      <button>submit</button>
    </form>
  )
}