// // import React from 'react'
// // import { useForm } from 'react-hook-form'

// // const App = () => {

// //   const { register, handleSubmit } = useForm()
// //   const onSubmit = (data) => {
// //     alert(JSON.stringify(data))
// //     console.log(data)
// //     console.log(JSON.stringify)
// //   } 
// //   return (
// //     <div>
// //         <form onSubmit={handleSubmit(onSubmit)}>
// //           <input {...register("firstname",  {required: true, maxLength: 20})} type="text" placeholder='write First Name......' />
// //           <input {...register("lastname",  { pattern: /^[A-Za-z]+$/i})} type="text" placeholder='write Last Name......' />
// //           <input {...register("number",  {maxLength: 10})} type="number" placeholder='write number......' />
// //           <input {...register("age",  {min: 18, max: 20})} type="number" placeholder='write age......' />
// //           <select {...register("city")} >
// //             <option value="">select one city</option>
// //             <option value="mumbai">mumbai</option>
// //             <option value="indore">indore</option>
// //             <option value="delhi">delhi</option>
// //           </select>
// //           <button>Submit</button>
// //         </form>
// //     </div>
// //   )
// // }

// // export default App

// import React from 'react'
// import { useForm } from 'react-hook-form'
// const App = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()

// const submitHandler = (data)=> {
//   console.log(data)
// }

//   return (
//     <div>
//       <form onSubmit={handleSubmit(submitHandler)}>
//         <input type="text" {...register("fullname", { 
//   required: "Full name is required", 
//   minLength: { value: 4, message: "Name must be at least 4 characters" },
//   maxLength: { value: 20, message: "Name must be at most 20 characters" }
// }

//           // {required: "Full name is required", minLength: 4, maxLength: 20}
//           )}/> 
//           <br /><br />

//         {/* <p className= {`${
//           errors?.fullname?.type === "minLength" ? "block text-red-500" : "hidden"
//         }`}>there are be atleast 4 characters name</p> */}
//         <p className={`${errors?.fullname?.type === "minLength" ? "block text-red-500" : "hidden"}`}>
//           there are be atleast 4 characters name</p>

//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitHandler = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          type="text"
          {...register("fullname", {
            required: "Full name is required",
            minLength: { value: 4, message: "Name must be at least 4 characters" },
            maxLength: { value: 20, message: "Name must be at most 20 characters" }
          })}
        />
        <br /><br />
        {errors.fullname && (
          <p className="text-red-500">{errors.fullname.message}</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
