import { LiaGuitarSolid } from "react-icons/lia";
import { GiTennisRacket } from "react-icons/gi";
import { GiBarbecue } from "react-icons/gi";
import { GiJelly } from "react-icons/gi";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Amenities = () => {
    let activties=[
        {icons:<GiBarbecue/>, text:'Picnic Area with BBQ Facilities'},
        {icons:<GiTennisRacket/>, text:'Outdoor Badminton'},
        {icons:<GiJelly/>,text:'Children’s Playground'},
        {icons:<LiaGuitarSolid/> ,text:'Live Music or Cultural Dance'}
    ]
       
    
  return (
    <section className='amenities'>
        <motion.h2
         initial={{y:-50, opacity:0}}    
       whileInView={{ y:0, opacity:1 
 ,transition:{duration:3}}}>Dedicated to Your Comfort</motion.h2>
        <motion.p
            initial={{x:-100, opacity:0}}    
     whileInView={{ x:0, opacity:1 
 ,transition:{duration:3}}}>World-class Amenities To Elevate Your Stayed Experience</motion.p>
        <div className="activties">
          {activties.map((activity,index)=>(
<motion.div initial={{y:50, opacity:0}}
        whileInView={{y:0,opacity:1,transition:{duration:3}}} className="activity" key={index}>
    <div className="icon">
        {activity.icons}
    </div>
<p>{activity.text}</p>
</motion.div>
          ))}
            
        </div>
    </section>
  )
}

export default Amenities