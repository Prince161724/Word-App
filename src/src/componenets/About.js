import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Make sure this is loaded!
export default function About(hoho) {
  const darkMode = () => {
  const btn = document.querySelector('.yesbro');
  if (btn.innerHTML==='Dark Mode') {
    btn.innerHTML = "Light Mode";
    hoho.setnewstyle({color:'white',
    backgroundColor :'black'});
  }
    else if(btn.innerHTML==='Light Mode'){
        btn.innerHTML = "Dark Mode";
        hoho.setnewstyle({color:'black',
    backgroundColor :'white'});
    }
  
};
  return (
    <>
      <div className="container" style={{...hoho.mystyle,height:'480px'}} >
        <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={hoho.mystyle} >
        About Our App
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{
  padding: '25px',
  fontSize: '1.1rem',
  lineHeight: '1.6',
}}>
        <strong>Text Transformer App: Convert, Case & Speak!.</strong> <br/>Introducing Text Transformer, a powerful and easy-to-use web app that lets users instantly convert text into uppercase or lowercase and even speak the sentence out loud using speech synthesis. Whether you're editing documents, formatting input, or need a screen reader-like experience, this app brings accessibility and productivity together in one clean interface. Built with React and JavaScript, it's responsive, simple, and lightning-fast.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={hoho.mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Key Advantages of Using the App
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{
  padding: '25px',
  fontSize: '1.1rem',
  lineHeight: '1.6',
}}>
        <ol>
          <li>User-Friendly Interface: Simple buttons to convert text to uppercase or lowercase in a single click.</li>
          <li>Speech Feature: Uses the browser's built-in SpeechSynthesis API to speak out loud the entered text – useful for visually impaired users or multitaskers.</li>
          <li>Real-Time Feedback: Instantly see your changes with live text updates and alerts.</li>
          <li>Accessibility Support: Helps users with reading difficulties or dyslexia by offering voice support.</li>
          <li>Cross-Platform: Works smoothly on mobile and desktop browsers without needing any installation.</li>
        </ol>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={hoho.mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Project Links & Author Info
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{
  padding: '25px',
  fontSize: '1.1rem',
  lineHeight: '1.6',
}}>
        <ul>
          <li>
            GitHub Repository: https://github.com/Prince161724/Word-App.git
          </li>
          <li>GitHub Profile: https://github.com/Prince161724e</li>
          <li>
            LinkedIn Profile: https://www.linkedin.com/in/princekumargiri/
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
      </div>
      <div className="container">
        <button className="mt-5 ms-2 yesbro btn btn-dark" onClick={darkMode} type="button" >Dark Mode</button>
    </div>
    </>
  );
}
