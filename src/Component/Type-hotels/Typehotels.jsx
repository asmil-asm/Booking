// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { IoIosArrowRoundForward } from "react-icons/io";
import useHotelsContent from '../../Hooks/useHotelsContent';
import { useChange } from '../../store/useStore';
import { useNavigate } from 'react-router-dom';
const Typehotels = () => {
  const navigate=useNavigate()
const { uniqueTypes } = useHotelsContent();
const { toggelTypes}=useChange()
const handleType=(type)=>{
toggelTypes(type)
navigate('/hotels')
}
  return (
       <div className="typeHotels">
        <motion.h2
        initial={{y:-50, opacity:0}}    
       whileInView={{ y:0, opacity:1 
 ,transition:{duration:3}}}
        >
        Crafting Memorable Experiences</motion.h2>
        <motion.p
    initial={{x:-100, opacity:0}}    
     whileInView={{ x:0, opacity:1 
 ,transition:{duration:3}}}
        >We're Dedicated To Providing You Unforgettable Experience. Whether You're Here For Business Or Leisure</motion.p>
        <motion.div className='types'
        initial={{width:'300px', margin:'auto'}}
        whileInView={{width:"100%",transition:{duration:3,delay:3,when:"after-children"}}}
         >
        
{uniqueTypes.map((type,index)=>{
    return (
    <motion.div key={index} className='card'

     initial={{skewX:10,}}    
    whileInView={{skewX:0,  transition:{duration:3}}}>
<img src={type.hotelImage} alt={type.type} />
            <div className='text'>
              <h3>{type.type}</h3>
              <IoIosArrowRoundForward className='icons' onClick={()=>handleType(type.type)} />
            </div>
    </motion.div>)
   
})}
        </motion.div>
    </div>
  )
}

export default Typehotels