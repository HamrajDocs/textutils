import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

// import About from './components/About';
import React, { useState } from 'react';

// this is the react router dom package configuration

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') //whether dark mod is enabled or not
  const [alert, setAlert]= useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type :type


    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode =()=> {
    if (mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

    }
  }
  return (
    // navbar from bootstrap
    <>
    <Router>
    <Navbar title="Textutils" aboutText="Textutils about" mode= {mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
    <div className="container" >
      
    {/* always use the exact path as react do partial matching for eg if path is /user/about is component 1 and there is /user component 2 then if we dont use exact path it will give use component 2 always.*/}
      <Routes>
        <Route exact path="/about" element={<About />} />
        
        <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode= {mode} />} />
      </Routes>

    
    </div>
    </Router>
    
    </> 
    
  );
}

export default App;
