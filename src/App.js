import React from "react";
import "./App.css";
import "./styles/Global.css";

function App() {
  return (
    <div className="App" style={{ padding: '50px', color: 'white', textAlign: 'center' }}>
      <h1 style={{ color: '#64ffda', fontSize: '48px' }}>Siddiha Rimzan</h1>
      <p style={{ fontSize: '24px', color: '#8892b0' }}>Computer Science Student</p>
      <p style={{ fontSize: '18px', color: '#a8b2d1' }}>Portfolio coming soon...</p>
      
      <div style={{ marginTop: '50px' }}>
        <h2 style={{ color: '#ccd6f6' }}>About Me</h2>
        <p style={{ color: '#8892b0', maxWidth: '600px', margin: '0 auto' }}>
          I am currently studying Computer Science at University of Westminster. 
          I'm fascinated by technology and product development.
        </p>
      </div>
      
      <div style={{ marginTop: '50px' }}>
        <h2 style={{ color: '#ccd6f6' }}>Contact</h2>
        <p>
          <a href="mailto:Fathimasiddika62@gmail.com" style={{ color: '#64ffda' }}>
            Email me
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;