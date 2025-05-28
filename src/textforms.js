import React , { useState } from 'react';


export default function Textform(babes){
    const[text,settext] = useState('Enter the text here');
    
    const Uppercase=()=>{
        console.log('Converted to Uppercase');
        let upper=text.toUpperCase();
        settext(upper);
    }   
    const handhlechange=(event)=>{
        console.log('being typed');
        settext(event.target.value);
        
    }
    const Speak=(event)=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const Copybro=()=>{
        var text1=document.getElementById("mybox");
        text1.select();
        navigator.clipboard.writeText(text1.value);
        console.log(text1);
    }
    const bg=window.getComputedStyle(document.body).backgroundColor;
    return (
        <>
    <div>
        <h1 style={{color:`${babes.color}`}} >{babes.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handhlechange} id="mybox" rows="10"></textarea>
        </div>
    </div>
    <div>
        <button className="btn btn-primary mx-2" onClick={Uppercase}  >Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={Speak}>Speak</button>
        <button className="copyText btn btn-primary" style={{ position: 'relative', top: '0px' ,left:'15px',height:'35px' }} onClick={Copybro}>Copy Text</button>
    </div>
    <div className="container my-3">
        <h1 style={{color:bg==='rgb(4, 39, 67)'?'white':'black'}}>Second functionality</h1>
        <p style={{color:bg==='rgb(4, 39, 67)'?'white':'black'}}>{text.split(" ").length} Number of words and number of letters {text.length} and time to read the sentence {text.split(" ").length * 0.008} </p>
        <h2 style={{color:bg==='rgb(4, 39, 67)'?'white':'black'}}>Preview</h2>
        <p style={{color:bg==='rgb(4, 39, 67)'?'white':'black'}}>{text.length>0 ? text:"Enter some text here"}</p>
    </div>
    </>
    )
}