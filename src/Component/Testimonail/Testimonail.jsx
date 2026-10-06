import test_1 from '/assets/Testimonail/testimonial_1-D0iGHlEA.jpg'
import test_2 from '/assets/Testimonail/testimonial_2-DrE2iePz.png'
import test_3 from '/assets/Testimonail/testimonial_3-jaYYUgLe.jpg'
import { FaStar } from "react-icons/fa";
import './Testimonail.css'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
const Testimonail = () => {
     let data=[
        {
            name:'Emma Rodriguez',
            address:'Barcelona, Spain',
            image:test_1,
            rating:5,
            review:` I've tried defferent hotel apps, but none matched the personal touch 
            attention to detail this service offers. Their handpicked hotel list is truly
            exceptional `,

        },
        {
            name:'Liam Johnson',
            address:'New York, USA',
            image:test_2,
            rating:4,
            review:` Everything went beyond my expectations. Booking was
            smooth, and the quality of the hotels was outstanding. Definitely
            recommending it ! `,

        },
           {
            name:'Sophia Lee',
            address:'Soul, South Korea',
            image:test_3,
            rating:5,
            review:`Fast and easy reservations, great customer service, and
             beautiful hotel choices. Will book again for sure! `,

        }
    ]
  return (
    <section className='testimonailes'>
        <motion.h2  initial={{y:-50, opacity:0}}    
       whileInView={{ y:0, opacity:1 
 ,transition:{duration:3}}}>What Our Guests Say</motion.h2>
        <motion.p  initial={{x:-100, opacity:0}}    
     whileInView={{ x:0, opacity:1 
 ,transition:{duration:3}}}>Real experience from real travelers. Discover why
            people love booking with us.
        </motion.p>
        <motion.div  initial={{y:50, opacity:0}}
        whileInView={{y:0,opacity:1,transition:{duration:3}}} className="tests">
            {data.map((info,index)=>{
                return(
                   <div key={index} className="info">
<div className="personal">
    <img src={info.image} alt="not found" />
    <div className="text">
        <h3>{info.name}</h3>
        <span>{info.address}</span>
    </div>
   
</div>
 <div className="stars">
    {Array.from({length:info.rating}).map((index)=>(
        <FaStar key={index}/>
    ))}
 </div>
    <p>{info.review}</p>
                   </div>

                )
            })}
        </motion.div>

    </section>
  )
}

export default Testimonail