import React, { useState } from 'react';
import Navbar from './componenets/Navbar.js';
import Textform from './textforms.js';
import Alert from './Alert.js'
import About from './componenets/About.js'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  
  const [DarkMode,setDarkMode]=useState('dark');
  const [color,setColor]=useState('dark');
  const [alert,setalert]=useState("Nothing till yet");
  const [Theme,setTheme]=useState("white");
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },1500)
  };
  return (
   <>
{/* <Navbar title="NONONO" abouttext="aboulllllll"/> */}
<BrowserRouter>
<Navbar Home="Textutils" mode={DarkMode} setMode={setDarkMode} setColor={setColor} setalert={showAlert} setTheme={setTheme} Theme={Theme}/>
<Alert Alert={alert}/>
<div className="container">
   
            <Routes>
          <Route path="/about" element={<About />} />
          
          < Route path="/"
            element= {<Textform heading="Enter the text to analyse: " color={color} />} /> 
          </Routes>
{/* <About/> */}

</div>
    </BrowserRouter>
   </>
  );
}

export default App;
