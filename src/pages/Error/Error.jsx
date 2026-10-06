import { NavLink } from "react-router-dom"
import './Error.css'
const Error = () => {
  return (
  <section className="error">
    <div className="content">
        <div className="text">
            <h1>404</h1>
            <p >Something's missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <NavLink className='btns' to="/" >
              Back to Home
            </NavLink>
        </div>   
    </div>
</section>
  )
}

export default Error