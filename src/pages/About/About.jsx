import './About.css'
import image from '/assets/About-us/about.jpg'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
const About = () => {
  return (
    <motion.div   initial={{y:-50,opacity:0}}
               animate={{y:0,opacity:1, transition:{duration:4}}} className='about'>
<h1>About Us</h1>
<p>Welcome to our hotel booking platform, where comfort meets convenience. We’re dedicated to helping you find the perfect stay for your journey.
</p>
<section className='topic'>
<img src={image} alt="not found" />
<div className='text'>
    <h2>Why Choose Us?</h2>
    <p>Our mission is to make your stay as memorable as possible. We work with thousands of hotels worldwide to offer you the best deals across luxury, budget, and boutique accommodations. Whether you're traveling for business or leisure, we’ve got you covered.</p>
    <ul>
        <li>Wide range of hotels to suit every budget.</li>
        <li>Seamless booking experience with user-friendly tools.</li>
        <li>24/7 customer support to ensure your satisfaction.</li>
        <li>Exclusive deals and discounts for loyal customers.</li>
    </ul>

</div>
</section>
<section className='guests'>
    <h2>What Our Guests Say</h2>
    <div className='boxes'>
        <div className="box">
            <p>“I found the perfect hotel for my trip within minutes. The booking process was so easy, and the customer service was exceptional.”</p>
            <h4>- Niten kumawat</h4>
        </div>
        <div className="box">
            <p>“This platform is a game changer. Great deals, smooth experience, and excellent support!”</p>
            <h4>- Gajanand</h4>
        </div>

    </div>
</section>
    </motion.div>
  )
}

export default About