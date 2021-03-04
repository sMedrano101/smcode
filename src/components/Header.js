import React from 'react'
import "../Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
    return (


        <div>
            <header className="App-header">
      <div className="header-box">
      <div className="image-header"><img src="/images/smlogo.jpg" alt="logo pic"  className="logo-image"/>

      </div>
      
      <h5 className="header-words">What We Do</h5>
      <h5 className="header-words">Our Work</h5>
      <h5 className="header-words">About</h5>
      <h5 className="header-words">Contact</h5>
      </div>
      </header>
        </div>
    )
}

export default Header
