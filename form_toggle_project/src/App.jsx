import React from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const App = () => {
  return (
    <div className='w-screen, min-h-screen, overflow-x-hidden'>
    <SignUp/>

    <hr />

    <SignIn/>
    </div>
  );
};

export default App;
