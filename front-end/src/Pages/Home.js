import React from "react";
import "../css/Home.css";


function Home() {
  
  
  
  function buttonHover(e) {
    if (e.target.className.includes("uHover")) {
      e.target.className = "uButton uGray uLightGrayText";
    } else {
      e.target.className = "uButton uGray uLightGrayText uHover";
    }
  }

  return (
    <div>
      <div className="welcome-header">
        <h1>Welcome to Developer-Verse </h1>
        <p>DeveloperVerse is a social networking website where users can share projects, photographs, and post links to their personal github pages.</p>
      </div>
      
      <div className="main-content-container">
        
        <div className="contentBox1-container">
          <div className="picture1 uBox">
          </div>
          
          <div className= 'textbox-right'>
            <p className='textchild uGray uBox'>Create an account, and start posting your personal projects!</p>
            <div className="spacer">
            <button className='uButton uGray uLightGrayText' onMouseOver={buttonHover}
            onMouseLeave={buttonHover}>About</button>
          </div>
          </div>
       
        </div>
     
     
        <div className="contentBox2-container">
          <div className="picture2 uBox">
          </div>
          
          <div className= 'textbox-left'>
            <p className='textchild uGray uBox'>Meet other developers and share your portfolios</p>
            <div className="spacer2">
              <button className='uButton uGray uLightGrayText ' onMouseOver={buttonHover}
            onMouseLeave={buttonHover}>Explore</button>
          </div>
          </div>
       
        </div>
     
        <div className="contentBox3-container">
          <div className="picture3 uBox">
          </div>
          
          <div className= 'textbox-right'>
            <p className='textchild uGray uBox'>Sign up and register now!</p>
            <div className="spacer">
              <button className='uButton uGray uLightGrayText ' onMouseOver={buttonHover}
            onMouseLeave={buttonHover}>Sign Up</button>
          </div>
          </div>
       
        </div>
      
      </div>
    </div>
  );
}

export default Home;