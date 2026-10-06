import { SiHiltonhotelsandresorts } from "react-icons/si";
import { IoMdMenu } from "react-icons/io";
import './Header.css'
import { NavLink, useNavigate } from "react-router-dom";
import { useActions}from "../../store/useStore";
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
const Header = () => {
    const {menu,setMenu}=useActions()
    const navigate=useNavigate();
  const NavLinks=[
    {title:'Home',link:'/'},
            {title:'Hotels',link:'/hotels'},
        {title:'About',link:'/about-us'},
                {title:'Contact',link:'/contact-us'}
  ]
    
   
  return (
<header>
<div onClick={()=>navigate('/')} className="logo">
    <SiHiltonhotelsandresorts className="icon"/>
    <h1>HotelLify</h1>
</div>
 <ul className="full-screen">
    {NavLinks.map((item,index)=>(
        <NavLink key={index} to={item.link}><li>{item.title}</li></NavLink>
    ))}
</ul>
<div className='buttons'>
   
    <SignedOut >
        <SignUpButton mode="modal">
    < motion.button whileTap={{scale:0.8}}>Sing Up</motion.button>

        </SignUpButton>
        <SignInButton mode="modal">
    <motion.button whileTap={{scale:0.8}}>Login</motion.button>
        </SignInButton>
    </SignedOut>
    <SignedIn>
<UserButton showName />   
 </SignedIn>
</div>

{/* Mobiles */}
<div className="Mobiles-header">
    <IoMdMenu onClick={setMenu} className="menu"/>
   {menu&& <div className="list">
 <ul>
 {NavLinks.map((item,index)=>(
        <NavLink key={index} to={item.link} onClick={()=>setMenu(false)}><li>{item.title}</li></NavLink>
    ))}
</ul>
<div className="btns">
        <SignedOut >
                <SignUpButton  mode="modal">
                  <motion.button whileTap={{ scale: 0.8 }}>Sign Up</motion.button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <motion.button whileTap={{ scale: 0.8 }}>Login</motion.button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton showName />
              </SignedIn>
</div>
    </div>}

</div>


</header>
 )
}

export default Header