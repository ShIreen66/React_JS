// import { useState } from "react";
// import "./index.css";

// function App() {
//   const [name, setName] = useState("John Doe");
//   const [email, setEmail] = useState("john@doe.com");
//   const [bio, setBio] = useState("I am a developer");
//   const [saveChanges, setSaveChanges] = useState("save");
//   const [showSuccess, setShowSuccess] = useState(false);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (saveChanges === "save") {
//       const user = { name, email, bio, saveChanges };
//       console.log(user);
//       setShowSuccess(true);
//     } else {
//       setShowSuccess(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-md w-96">
//         <form onSubmit={submitHandler} className="space-y-4">
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             placeholder="Enter Name"
//             className="w-full p-2 border rounded-md"
//           />

//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="text"
//             placeholder="Enter Email"
//             className="w-full p-2 border rounded-md"
//           />

//           <input
//             value={bio}
//             onChange={(e) => setBio(e.target.value)}
//             type="text"
//             placeholder="Enter Bio"
//             className="w-full p-2 border rounded-md"
//           />

//           <div className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               onChange={(e) =>
//                 setSaveChanges(e.target.checked ? "save" : "not save")
//               }
//               checked={saveChanges === "save"}
//               className="w-5 h-5"
//             />
//             <label className="text-gray-700">Save Changes</label>
//           </div>

//           <button
//             disabled={saveChanges !== "save"}
//             className={`w-full py-2 rounded-md text-white ${
//               saveChanges !== "save"
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-blue-500 hover:bg-blue-600"
//             }`}
//           >
//             Save
//           </button>
//         </form>

//         {showSuccess && (
//           <p className="mt-4 text-green-600 font-semibold">✅ Changes saved</p>
//         )}

        
//         <h2 className="mt-6 text-lg font-semibold text-gray-800">View Profile</h2>
//         <p>Name: {name}</p>
//         <p>Email: {email}</p>
//         <p>Bio: {bio}</p>
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";

const App = () => {
  const initalState = {
    name: "john",
    email: "john@doe.com",
    bio: "1234567890",
  };

  const [formData, setFormData] = React.useState(initalState);

  const [isChanged,setIsChanged] = useState((JSON.stringify(formData) == JSON.stringify(initalState)));
  // console.log(isChanged);


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formData)
    setIsChanged(false);
  }



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...initalState, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...initalState, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Bio"
        value={formData.bio}
        onChange={(e) => setFormData({ ...initalState, bio: e.target.value })}
      />

      <button disabled={!isChanged} className="bg-red-400 cursor-pointer :focus-bg-emerald-300">Submit</button>
    </form>
  );
};

export default App;