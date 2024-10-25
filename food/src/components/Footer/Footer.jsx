import React from 'react';
import { assets } from '../../assets/assets';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
               <img className="img" src={assets.logo1} alt=""/>
               <p> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore. </p>
               <div className="footer-social-icon">
                  <img src={assets.facebook_icon} alt="" />
                  <img src={assets.twitter_icon} alt="" />
                  <img src={assets.linkedin_icon} alt="" />
               </div>
            </div>   
              <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                 </ul>
              </div> 

                <div className="footer-content-right">
                     <h2>GET IN TOUCH</h2>
                     <ul>
                        <li>+91 11-558-69-448</li>
                        <li>contact@foodmall.com</li>
                     </ul>
                 </div>   
                </div>
                <hr/>
                <p className='footer-copyright'>Copyright 2024 © FoodMall.com - All Rights Reserved.</p>
            </div>

  )
}

export default Footer
