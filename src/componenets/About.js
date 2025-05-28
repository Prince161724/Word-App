import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Make sure this is loaded!
export default function About() {
  
  // useEffect(() => {
  //   // Optional: forcibly trigger Bootstrap reflow (not always needed but helpful)
  //   const event = new Event('DOMContentLoaded', {
  //     bubbles: true,
  //     cancelable: true,
  //   });
  //   document.dispatchEvent(event);
  // }, []);
  const [mystyle,setnewstyle]=useState({color:'white',
    backgroundColor :'black'});
  const darkMode = () => {
  const btn = document.querySelector('.yesbro');
  if (btn.innerHTML==='Dark Mode') {
    btn.innerHTML = "Light Mode";
    setnewstyle({color:'white',
    backgroundColor :'black'});
  }
    else if(btn.innerHTML==='Light Mode'){
        btn.innerHTML = "Dark Mode";
        setnewstyle({color:'black',
    backgroundColor :'white'});
    }
  
};
const Copybro=()=>{
  var text=document.getElementById("");
};


  return (
    <>
      <div className="container" style={mystyle} >
        <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
      </div>
      <div className="container">
        <button className="mt-5 ms-2 yesbro btn btn-dark" onClick={darkMode} type="button" >Dark Mode</button>
        <button className="copyText btn btn-primary" style={{ position: 'relative', top: '26px' ,left:'25px',height:'35px' }} onClick={Copybro}>Copy Text</button>
    </div>
    </>
  );
}
