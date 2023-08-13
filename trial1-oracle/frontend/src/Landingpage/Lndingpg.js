// import React from 'react'
// import { Link } from 'react-router-dom'

// const Lndingpg = () => {
//   return (
//     <div>
//       <Link to="/login">
//      <button type="submit">Login</button>
//      </Link>
//      <Link to="/signup">
//       <button type="submit">SignUp</button>
//       </Link>
//     </div>
//   )
// }

// export default Lndingpg
import React from 'react';
import {Link} from 'react-router-dom'
// import Button2 from '../Button2';
import "./Landing.css";
const Landing = () => {
  return (

      <>
      <div className='lnd'>
<h1 className='start'>Welcome to WeHire</h1>
<h2 className='start2'>let's get hired</h2>
<div className="combo" style={{display:'flex'}}>
  <img className='hireimg' src="https://i2.wp.com/hr-gazette.com/wp-content/uploads/2018/10/bigstock-Recruitment-Concept-Idea-Of-C-250362193.jpg?fit=1600%2C900&ssl=1"  alt="" srcset="" />
<p className='content'>
An AI-powered HR system integrates artificial intelligence technologies into various HR processes to streamline operations, enhance decision-making, and improve overall efficiency within an organization's human resources department. This innovative system leverages AI algorithms and data analysis to handle tasks such as recruitment, employee onboarding, performance evaluation, training and development, employee engagement, and more. Here are some key features and benefits of an AI-powered HR system
</p>
</div>

<div className="butn">
  <div className="butn1">
     <Link to="/login">
      <button type="submit">Login</button>
      </Link>
      </div>
      <div className="butn2">
      <Link to="/signup">
       <button type="submit">SignUp</button>
       </Link>
       </div>
       </div>


</div>
      </>
    
  )
}

export default Landing;

