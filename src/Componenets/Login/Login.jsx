import React,{useEffect, useState} from 'react'
import './Login.css'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import splash_logo from '../../assets/images/splash_logo.jpeg'
const Login = ({handleClickoff,handleLogin,sendlogin}) => {
const [number,setNumber]=useState('')
const [error,setError]=useState({
  NotNumber:false,
  length:false
})


useEffect(()=>{
 let store = localStorage.getItem('phoneNumber')
if(store){
setNumber(store)
}
},[])

const handleInput=(e)=>{
  e.preventDefault();
  const value = e.target.value;
  setNumber(value)
   
  if(isNaN(value)){
    setError((prev)=>({
      ...prev,
      NotNumber:true
    })
  )
  }
  else if(value.length>10){
    setError((prev)=>({
    ...prev,
    length:true
    }));
  }else{
    setError(true);
  }
}


const handleContinue=()=>{
  localStorage.setItem('phoneNumber', number); 
  setNumber('');
  sendlogin(true);
}
  return (
    <div className='blur-overley' onClick={handleClickoff}>
 <div className='Login'>
     <KeyboardBackspaceOutlinedIcon onClick={handleClickoff} style={{marginBottom:'70%',marginRigth:'170%',cursor:'pointer'}}/>
      <div className="login-details" onClick={(e) => e.stopPropagation(handleClickoff)}>
        <img src={splash_logo} className='login-img' alt="" />
        <h2>India's last minute app</h2>
        <span>Login or Signup</span>
        <div className="input-wrapper">
            <span>+91</span>
            <input type="text"   value={number} onChange={handleInput} placeholder="Enter your phone number" />
          </div>
          <button disabled={error.NotNumber || error.length} onClick={handleContinue} style={error.NotNumber || error.length?{backgroundColor:'gray'}:{backgroundColor:'green'}}>Continue</button>
         {error.NotNumber?<p style={{Color:'red'}}>please enter numbers only</p>:''}
         {error.length?<p style={{Color:'red'}}>please enter valid number</p>:''}
        <p>By continuing, you agree to our Terms of service & Privacy policy</p>
      </div>
    </div>
    </div>
   
  )
}

export default Login
