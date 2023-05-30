import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faLinkedinIn,faTwitter } from '@fortawesome/free-brands-svg-icons'
import fiverrLogo from '../../img/FiverrLogo.png'
import './social.css'
function Social() {
    return (
        <> 
          
          <div className='wrapper-container'>
          <h3 className='follow-title'>follow me</h3>
        <div className="wrapper">
                 
                
                <div className="icon facebook">
                    
                    <span><a href="https://www.facebook.com/emamhossain546/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></span>
                </div>
                <div className="icon facebook">
                    
                    <span><a href="https://www.linkedin.com/in/emam-hossain222" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedinIn} /></a></span>
                </div>
                <div className="icon facebook">
                   
                    <span><a href="https://twitter.com/emam_hossa73236" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faTwitter} /></a></span>
                </div>
                <div className="icon fiverr">
                    
                    <span><a href="https://www.fiverr.com/emamhossain456/" rel="noreferrer"  target="_blank" ><img width="35px" src={fiverrLogo} alt="" /></a></span>
                </div>
             </div>
               <p className='copyright'>Copyright &copy; All right reserved by <br /> <span className='copyName'> Emam Hossain</span>  </p>
             </div>
        </>
    )
}

export default Social