import './upperNav.css'
import { AiFillMail, AiFillPhone } from "react-icons/ai";

const UpperNav = () => {
  return (
      <div className="upper-nav">
        <div>
        <span className="nav-info1">
          <AiFillMail className='nav-icon' />
            info@harmony.com
          </span>
            <span className="nav-info2">
            <AiFillPhone className='nav-icon' />
          100-2222-9999
         </span>
       </div>
       <div>
        <span className="nav-register nav-info1">
            Register
          </span>
            <span className="nav-info2">
           Login
         </span>
       </div>
      </div>
  )
}

export default UpperNav
