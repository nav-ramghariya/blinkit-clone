import logo from './logo.svg';
import './App.css';
import Navbar from './Componenets/Navbar/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './pages/Product/Product';
import Footer from './Componenets/Footer/Footer';
import  SearchProduct from './pages/SearchProduct/SearchProduct';
import Login from './Componenets/Login/Login';
import { useState } from 'react';
function App() {
  const [isShowLogin,setIsShowLogin]=useState(false);
  const [profileFromLogin,setProfileFromLogin]=useState()

  const handleLogin=()=>{
   setIsShowLogin(true);
   console.log('login open')
  }
  const handleClickoffLogin=()=>{
    setIsShowLogin(false);
    console.log('login closed')
  }

  const sendlogin=(data)=>{
    setProfileFromLogin(data);
    setIsShowLogin(false);
    console.log('login success',data)
  
  }
  return (
    <>
      <Navbar isShowLogin={handleLogin} profileFromLogin={profileFromLogin}/>
      {isShowLogin?<Login handleClickoff={handleClickoffLogin} handleClick={handleLogin} sendlogin={sendlogin}/>:''}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:productId" element={<Product />} />
        <Route path='/s/:query' element={<SearchProduct/>}/>
      </Routes>
      <Footer/>

     
 
     
    </>
  
  );
}

export default App;
