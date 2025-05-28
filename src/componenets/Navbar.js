import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const DarkMM=()=>{
    var coco=document.getElementById('Switch');
      if(props.mode==='dark'){
        props.setMode('light');
        document.body.style.backgroundColor='white'
        props.setColor('black');
        if(coco)
        coco.style.color = 'black';
        props.setalert("Light mode enabled","success");
        light();
        props.setTheme('black');
        props.setnewstyle({color:'white',
        backgroundColor :'black'});
      }
      else if(props.mode==='light'){
        props.setMode('dark');
        document.body.style.backgroundColor='#042743';
        props.setColor('white');
        props.setalert("Dark mode enabled","primary");
        if(coco)
        coco.style.color = 'white';
        dark();
        props.setTheme('white');
        props.setnewstyle({color:'white',
        backgroundColor :'#042743'})
      }
  };
    const light = () => {
  document.title = 'Light Mode bro';
  setTimeout(() => {
    document.title = 'Word App';
  }, 3000);
};


const dark = () => {
  document.title = 'Dark Mode bro';
  setTimeout(() => {
    document.title = 'Word App';
  }, 3000);
};

const colorChange=(color)=>{
  // const currentBg = window.getComputedStyle(document.body).backgroundColor;
  if(document.body.style.backgroundColor!='white'){
    document.body.style.backgroundColor='white';
  }
  else{
    document.body.style.backgroundColor=color;
  }
}


    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/">{props.Home}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link className="nav-link" to="/" >Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/">Disabled</a>
      </li> */}
    </ul> 
    <div className="d-flex">
      <div className="bg-secondary rounded mx-2 grey" style={{height:'20px',width:'20px'}} onClick={()=>colorChange('#6c757d')}></div>
      <div className="bg-success rounded mx-2 green" style={{height:'20px',width:'20px'}} onClick={()=>colorChange('#28a745')}></div>
      <div className="bg-danger rounded mx-2 red" style={{height:'20px',width:'20px'}} onClick={()=>colorChange('#dc3545')}></div>
      <div className="bg-warning rounded mx-2 yellow" style={{height:'20px',width:'20px'}} onClick={()=>colorChange('#ffc107')}></div>
        <div className="bg-info rounded mx-2 blue" style={{height:'20px',width:'20px'}} onClick={()=>colorChange('#17a2b8')}></div>
    </div>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={DarkMM}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" id="Switch" style={{ color: props.Theme }}>Change Theme</label>
</div>
  </div>
</nav>
    );
}

// ✅ PropTypes
Navbar.propTypes = {
    title: PropTypes.string,
    abouttext: PropTypes.string
};

// ✅ Default Props
Navbar.defaultProps = {
    title: 'Set Title Here',
    abouttext: 'About'
};
