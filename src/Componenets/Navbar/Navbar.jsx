import React ,{useState}from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import Cart from '../Cart/Cart'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useSelector } from 'react-redux'
import constant from '../../assets/constant'
import {  Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {useNavigate}  from 'react-router-dom';
import Login from '../Login/Login';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import constants

const Navbar = ({isShowLogin,profileFromLogin}) => {

  const location=useLocation();
  const navigate=useNavigate();
  const cart=useSelector((state)=>state.cart);
  const [isShow,setIsShow]=useState(false);
  
  const [searchTerm,setSearchTerm]=useState();
  // const cart=useSelector((cart)=>state.cart)

  const IsSearchPage=location.pathname === "/s" || location.pathname===`/s/${searchTerm}`

  const handleKeydown=(event)=>{
    if(event.key === 'Enter'&&searchTerm.trim()){
      navigate(`/s/${searchTerm.trim()}`)
      setSearchTerm('')
    }
  }

  
  

  return (
    <div className='navbar'>
   <Link to='/' className='navbar-logo'> <h1 className='blink'>blink</h1><h1 className='it'>it</h1>
   </Link>
      <div className={IsSearchPage?'searchpage':"navbar-delivery-address"}>
        <div className="navbar-delivery">{constant.deliveryConstant}</div>
        <select className='navbar-dropdown' name="locations" id="locations">
  <option value="d-107-sector-74-phase-8">D-107, Sector 74, Phase 8</option>
  <option value="c-203-sector-70">C-203, Sector 70</option>
  <option value="b-45-sector-68-phase-7">B-45, Sector 68, Phase 7</option>
  <option value="a-12-phase-11">A-12, Phase 11</option>
  <option value="e-89-sector-71">E-89, Sector 71</option>
</select>
      </div>
      <div className="navbar-input-icon" >
      <SearchOutlinedIcon className="search-icon"/>
      <Link to='/s'><input 
       value={searchTerm} 
       onChange={(e)=>setSearchTerm(e.target.value)}
      onKeyDown={handleKeydown}
      className={IsSearchPage?'search-input':'navbar-input'} style={{fontSize:'15px'}} placeholder='Seacrh Milk ' type="text" /></Link>
      </div>
     {profileFromLogin?<AccountCircleOutlinedIcon style={{font:'20px'}} className={IsSearchPage?'searchpage':'navbar-login'}/>:<p className={IsSearchPage?'searchpage':'navbar-login'} onClick={isShowLogin}>Login</p>}
       <div className='navbar-cart-quantity' onClick={()=>setIsShow(true)}>
        <ShoppingCartOutlinedIcon className='navbar-cart' style={{color:'white'}}/>
        <div className='navbar-quantity-price'>
         {cart.length>0
         ?
          <div>
             <p>{cart.length} items</p>
          <p>₹{
            cart.reduce((total,item)=>
              total+item.price*item.itemquantity
          ,0)
           }</p>
          </div>
         :<p>My Cart</p>
        }
         
        </div>
       </div>
       {isShow?<Cart setIsShow={setIsShow} isShow={isShow}/>:''}
     
    </div>
  )
}

export default Navbar
