//
//

import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';

import './App.css';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className='container'>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
