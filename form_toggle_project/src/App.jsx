import React, { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
  const [toggler, settoggler] = useState(false); // false = Sign In, true = Sign Up

  return (
    
    <div className="w-screen min-h-screen overflow-x-hidden">

        {toggler ? (<SignUp settoggler={settoggler} />) : (<SignIn settoggler={settoggler} />)}  
      
    </div>
  );
};

export default App;
