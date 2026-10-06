import './Contact.css';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useChange } from '../../store/useStore';
const Contact = () => {
  let {contect,setContect}=useChange();
  const handelContect=(event)=>{
    setContect(event)
  }
  return (
    <motion.div   initial={{y:-50,opacity:0}}
               animate={{y:0,opacity:1, transition:{duration:4}}} className='contact'>
      <h1>Contact Us</h1>
      <p>Have questions or need help? Reach out to us, and we'll get back to you as soon as possible.</p>
      <form>
        <div className='data'>
          <div><label>Full Name</label>
        <input onChange={handelContect} value={contect.fullName} name="fullName" type='text' placeholder='Enter your full name'/>
        </div>
 <div>
         <label>Email Address</label>
        <input onChange={handelContect} value={contect.email} name="email" type='email' placeholder='Enter your Email'/>
 </div>
        </div>
        <label>Message</label>
        <textarea onChange={handelContect} value={contect.message} name="message" placeholder='Write your message'></textarea>
        <div>
                  <button type='submit'>Send Message</button>

        </div>
      </form>
      <div className='location'>
        <h2>Our Location</h2>
        <p><strong>Place:</strong>Syria-Damascuse</p>
         <p><strong>Email:</strong>support@HoteLify.com</p>
                  <p><strong>Phone:</strong>+963 962734026</p>


      </div>
    </motion.div>
  )
}
export default Contact