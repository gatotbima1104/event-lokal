import React from 'react'
import logo from '../assets/Logo_white.png'

const Footer = () => {
  return (
    <div id='footer'>
      <div className="container">
        <img src={logo} alt=""  className='mt-5'/>
        <p className='title-footer mb-5 mt-3'>Tempat yang Tepat untuk Setiap <br /> Acara </p>


        <div className="row mt-5 border"></div>

        <div className="row">
            
        <p className='title-footer mt-4'>Privacy Policy</p>
        <p className='title-footer text-end'>Invent 2023</p>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
