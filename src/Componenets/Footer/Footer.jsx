import React from 'react'
import './Footer.css'
import appstore from '../../assets/images/appstore.jpeg'
import playstore from '../../assets/images/goggleplay.jpeg'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Facebook, FacebookRounded, FacebookTwoTone, LinkedIn } from '@mui/icons-material';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='upper-footer'>
      <div className="usefulLinks">
        <h4>Useful Links</h4>
        <div className="list-usefullLinks">
          <ul>
            <li>About </li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Lead</li>
            <li>Value</li>
          </ul>
          <ul>

            <li>Privacy</li>
            <li>Terms</li>
            <li>FAQs</li>
            <li>Security</li>
            <li>Mobile</li>
            <li>Contact</li>

          </ul>
          <ul>
             <li>Partner</li> 
            <li>Franchise</li>
            <li>Seller</li>
            <li>Warehouse</li>
            <li>Deliver</li>
            <li>Resources</li>
          </ul>
        </div>

      </div>
      <div className="footer-categories">
        <h4>Categories</h4>
        <ul className="footer-category">

          <li> Vegetables </li>
          <li>  Fruits  </li>
          <li>Dairy & Breakfast </li>
          <li>Munchies</li>
          <li>Atta</li>
          <li>Rice & Dal</li>
          <li>Baby Care</li>
          <li>Pharma & Wellness</li>
          <li>Cleaning Essentials</li>
          <li>Home & Office</li>
          <li>Pet Care</li>
          <li>  Fruits  </li>

        </ul>

      </div>
      </div>

      <div className="socialMedia-footer">
      © Blink Commerce Private Limited, 2016-2024
      <div className="download-app">
        Download App
      <div className="download-links">
        <img src={appstore}  className='appStore' alt="App Store" />
        <img src={playstore} className='playStore' alt="Play Store" />
      </div>
     
        <a href="/" >< Facebook className='facebook'/></a>
        <a href="/" ><TwitterIcon className='twitter'/></a>
        <a href="/" ><InstagramIcon className='instagram'/></a>
        <a href="/" ><LinkedIn className='linkedin'/></a>
        </div>
        </div>
        <p className='last-footer'>
        “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”
        </p>
        </div>
  )
}

export default Footer;
