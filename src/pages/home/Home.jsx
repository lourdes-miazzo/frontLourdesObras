import React from 'react'
import "./home.css"
import videoMp4 from "../../assets/finalblanconegro.mp4"
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
    <div className='backHome'>
      <NavBar className="navHome"/>
      <div className="spaceHome">
        <div className="aroundVideoHome">
          <video src={videoMp4} autoPlay loop muted></video>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Home