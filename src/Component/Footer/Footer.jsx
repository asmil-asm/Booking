import { SiHiltonhotelsandresorts } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import './Footer.css'
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer>
 <div className="info">
       <div className="title">
        <h2><SiHiltonhotelsandresorts/>Hotelify</h2>
    <p>Your trusted platform for booking stays in the best hotels worldwide.</p>
    </div>
    <div className="links">
        <h3>Quick Links</h3>
 <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about-us'><li>About Us</li></Link>
          <Link to='/hotels'><li>Hotels</li></Link>      
             <Link to='/contact-us'><li>Contact</li></Link>   
            </ul>
    </div>
<div className="social">
    <h3>Follow Us</h3>
<div>
     <FaFacebook className='icons'/>
     <FaLinkedin className="icons"/>
        <FaSquareXTwitter  className='icons'/>
        <IoLogoWhatsapp  className='icons'/>
</div>
</div>
<div className="subscribe">
    <h3>Subscribe</h3>
<p>Stay updated with our latest offers and news!</p>
<div>
    <input type='email' placeholder='Email'/>
            <button>subscribe</button>
</div>
</div>
 </div>
 <p>&copy; 2026 HoteLify. All Rights Reserved.</p>

    </footer>
  )
}

export default footer