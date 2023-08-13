import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Home = () => {
  const location =useLocation();
  const userLogin = useSelector((state) => state.userLogin);
  const { userinfo } = userLogin;
  return (
    <div className='homecenter' style={{marginTop:'20pc'}}>
     <h1 style={{fontSize:'30px'}}>{`Welcome Back ${userinfo.name}..`}</h1>
     <h1>{`Here are your skills ${userinfo.skills}..`}</h1>
   
     <button type="submit">Take assesment</button>
    </div>
  )
}

export default Home
