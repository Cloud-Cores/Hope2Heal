import React from 'react'
import './App.css'
import './styles/About.css'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <>
    <Navbar />
    <div>
      <section className="first">
        <div>
          <img id="hero-img"src="hope2healmain.png" alt="hope2heal" />
        </div>
      </section>
      <section className="second">
        <img id="mission" src="hope2healmission.png" alt="hope2heal" />
      </section>
      <section className="third">
      <img id="about" src="hope2healabout.png" alt="hope2heal" />
        <div className='stack'>
        <div className="main-card-container">
          <div className="main-card">
          <img id="pic" src="hope2healpic.png" alt="hope2heal" />
          <br></br>
          <img id="main-card" src="hope2healawareness.png" alt="hope2heal" />
          </div>
        </div>

        <div className="main-card-container">
          <div className="main-card">
          <img id="pic" src="hope2healpic1.png" alt="hope2heal" />
          <br></br>
          <img id="main-card" src="hope2healvolunteer.png" alt="hope2heal" />
          </div>
        </div>

        <div className="main-card-container">
          <div className="main-card">
          <img id="pic" src="hope2healpic2.png" alt="hope2heal" />
          <br></br>
          <img id="main-card" src="hope2healeducate.png" alt="hope2heal" />
          </div>
        </div>

        </div>
        
        <div id="about">
          <p>
          HOPE2HEAL WAS STARTED BY THREE HIGH SCHOOLERS IGNITED BY A PASSION TO SPREAD CANCER AWARENESS AMONG 
          THE COMMUNITY THEY LIVE IN
          </p>
          <img src='patient1.png'/>
        </div>


      </section>
      <section className="fourth">
          <img id="footer" src="hope2healfooter.png" alt="hope2heal" />
      </section>
    </div>
    </>
  )
}

export default App

