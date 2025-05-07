import React, { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Users from "./components/Users";

const App = () => {
  const [toggler, settoggler] = useState(true); // false = Sign In, true = Sign Up

  return (
    <main className="w-screen min-h-screen flex overflow-auto ">
      
      <div className="w-[70%] p-0 overflow-auto flex items-center justify-center bg-gray-800">
        {toggler ? (
          <SignUp toggler={toggler} settoggler={settoggler} />
        ) : (
          <SignIn toggler={toggler} settoggler={settoggler} />
        )}
      </div>

      
      <Users />
    </main>
  );
};

export default App;