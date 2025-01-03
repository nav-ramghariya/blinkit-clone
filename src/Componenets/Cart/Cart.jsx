import React from 'react'
import './Cart.css'
import { products } from '../../assets/assets'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {remove,IncrementQuantity,DecrementQuantity} from '../../store/CartSlice'
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import constants from '../../assets/constant'
import ReceiptIcon from '@mui/icons-material/Receipt';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const Cart = ({isShow,setIsShow}) => {
    const product=useSelector((state)=>state.cart)

    const dispatch = useDispatch();

    const handleRemove=(id)=>{
      dispatch(remove(id));
   }
   const handleincrquantity=(id)=>{
        dispatch(IncrementQuantity(id))
   }

   const handledecrquantity=(id)=>{
        dispatch(DecrementQuantity(id))
   }

   const getTotalCartAmount=(item)=>{
        dispatch(getTotalCartAmount(item))
   }

   

  return (
    <>
          {isShow && <div className="blur-overlay" onClick={() => setIsShow(false)}></div>}

    <div className='Cart'>
      <div className='cart-upper'>
        My Cart 
        <p onClick={()=>setIsShow(false)} className='cart-remove'>X</p>
      </div>
      <div className="cart-delivery-add">
      <div className="cart-delivery-time">
        <TimerOutlinedIcon className='clock'/>
        <div>         
        <h4>{constants.deliveryConstant}</h4>
        <p>{constants.ShipmentConstant}</p>
        </div>
        
      </div>
      
      

       {
        product.map((product)=>{

            return<div  key={product.id}>
    
                <div className='cart-product-added' >
                <img  src={product.image} alt={product.name} />
              <div className="name-price-quantity">
              <h6 className='cart-title'>{product.name}</h6>  
               <p className='cart-quantity'>{product.quantity}</p>
               <p className='cart-price'>₹{product.price}</p>
              </div>
              <div className="cart-quantity-btn">
              <span className='cart-decre-btn' onClick={()=>handledecrquantity(product.id)}>-</span>
              <span>{product.itemquantity}</span>
              <span className='cart-incre-btn' onClick={()=>handleincrquantity(product.id)}>+</span>
              </div>
                </div>

             </div>
        })
       }
        </div>
        <div className="bill-details">
          <h4>Bill details</h4>
           <div className="cart-total">
            <div className='cart-icon-title'>
            <ReceiptIcon className='cart-icons'/> 
            items total
            </div>
            <div>
         {
          product.reduce((total,item)=>
            total+item.price*item.itemquantity
        ,0)
         }
         </div>
           </div>
           <div className="delivery-charges">
            <div className='cart-icon-title'>
                 <DeliveryDiningIcon className='cart-icons'/> Delivery Charges  <InfoOutlinedIcon className='infoIcon'/>
            </div>
            <p>₹45</p>
           </div>
           <div className="handling-charges">
            <div className='cart-icon-title'>
                <ShoppingBagIcon className='cart-icons' />Handling Charges  <InfoOutlinedIcon className='infoIcon'/>
            </div>
            <p>₹5</p>
           </div>
           <div className="cart-grandTotal">
            <h3>GrandTotal</h3>
            <h3>{
              product.reduce((total,product)=>
                 total+product.price*product.itemquantity+45+5
              ,0)
              }</h3>
           </div>
        </div>
     
     <div className='cart-cancellation'>
     <h4 className='cancel-title'>Cancellation Policy</h4>
     <p classNamee='cancel-description'>
     Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.
     </p>

     </div>
        <div className='cart-checkout'>
          item :{product.length}
        </div>
    </div>
    </>
  )
}

export default Cart
