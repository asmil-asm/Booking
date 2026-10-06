// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import './Hero.css'
import Form from '../Forms/Form'
import {NavLink,Link} from 'react-router-dom'
const Hero = () => {
    
   
  return (
   <div className="image-home">
        <div className='shadow'></div>
   <div className='hero-data'>
               <motion.div className="home-text"
               initial={{y:-50,opacity:0}}
               animate={{y:0,opacity:1, transition:{duration:4}}} >
        <h2>Find Your Perfect Stay, Anywhere</h2>
        <p>Discover top-rated hotels and exclusie deals around the world Book with ease and start your jounery today.</p>
              <motion.button
              initial={{y:-10}}
              animate={{y:0,transition:{duration:0.5, repeat:Infinity, repeatType:'reverse', damping:2}}}
             ><Link to='/hotels'>Book Now</Link></motion.button>
        </motion.div>
<Form/>
    
       </div>
        </div>
    
      
  )
}

export default Hero