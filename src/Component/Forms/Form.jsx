// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useChange } from '../../store/useStore'
import { useNavigate } from 'react-router-dom'
import './Form.css'

const Form = () => {
    const {form,setForm,setSearch,resetForm}=useChange()
    const navigate=useNavigate()
    // handel Form
    const handelForm=(event)=>{
        setForm(event)
    }
  
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSearch(form.destination)
      navigate('/hotels')
resetForm()
    }
  return (
      <motion.form onSubmit={handleSubmit}
         initial={{y:-50,opacity:0}}
               animate={{y:0,opacity:1, transition:{duration:4}}}
        >
    <h3>Book Your Stay</h3>
    <input onChange={handelForm} name='destination' value={form.destination} className='destination' type="text" placeholder='Where are you going?' />
    <div className="info">
        <div className="data">
         <label htmlFor="check-in">Check-in</label>
        <br/>
        <input onChange={handelForm} value={form.checkin} id='check-in' type="date" name='check-in' />
                   <br/>
           <label htmlFor="guests">Guests</label>
        <br/>
        <input onChange={handelForm} value={form.guest}  id='guests' type="number" min={1} name='guest' />
        
    </div>
    
    <div className="data">
         <label htmlFor="check-out" >Check-out</label>
        <br/>
        <input onChange={handelForm}  value={form.checkout} id='check-out' type="date" name="check-out" />
          <br/>
      
         <label htmlFor="romms">Rooms</label>
        <br/>
        <input onChange={handelForm} value={form.rooms} name='rooms' id='romms' type="number" min={1}/>
        
    </div>
    </div>
    <button >Search</button>
</motion.form>
  )
}

export default Form