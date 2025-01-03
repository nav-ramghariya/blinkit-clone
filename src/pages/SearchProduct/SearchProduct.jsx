import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../assets/assets';
import flame from '../../assets/images/flame.png';
import { useDispatch, useSelector } from 'react-redux';
import {add,IncrementQuantity,DecrementQuantity} from '../../store/CartSlice'
import { useState,useEffect } from 'react';
import './SearchProduct.css'

const SearchProduct = () => {
    const cart=useSelector(state=>state.cart)
      const [addButtonShow,setAddButtonShow]=useState(false);
      const [filteredData,setFilteredData]=useState();
    const dispatch=useDispatch();
    const {query}=useParams();

    useEffect(() => {
    const result = products.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(result);
  }, [query, products]);

      if (!filteredData||filteredData.length === 0) {
        return <h2 className='ErrorMessage' >No results found for "{query}"!</h2>;
      }
        
console.log()
const handleAdd = (product) => {
        dispatch(add(product));
        setAddButtonShow(true);
    }
    
    const handleincrquantity=(id)=>{
        dispatch(IncrementQuantity(id))
   }

   const handledecrquantity=(id)=>{
        dispatch(DecrementQuantity(id))
   }
   const getcartQuantity=(id)=>{
    const item=cart.find((item)=>item.id===id)
       return item?item.itemquantity:0
  }

  return (
    <div className='searchProduct'>
      {
        filteredData.map((product)=>{
        return  <div key={product.id} className="product-card">
                               
        <img className='category-image' src={product.image} alt={product.name} /> 
         <div className='card-content'>
         <button className='category-mint' ><img style={{height:'12px', width:'12px'}} src={flame} alt="" /> 8 min</button>
         <p className='categpry-title'>{product.name}</p>
         <p className='category-quantity'>{product.quantity}</p>
         <div className="price-add">
             <div className='price'>
             <p style={{color:'black'}}>₹{product.discountPrice}</p>
             <p style={{textDecoration:'line-through'}}>₹{product.price}</p>
             </div>

          {
             getcartQuantity(product.id)>0?
             <div className="cart-quantity-btn">
             <span className='cart-decre-btn' onClick={()=>handledecrquantity(product.id)}>-</span>
             <span>{getcartQuantity(product.id)}</span>
             <span className='cart-incre-btn' onClick={()=>handleincrquantity(product.id)}>+</span>
             </div>
             : <button className='addToCart'  onClick={()=>handleAdd(product)}>ADD</button>
          }  
         </div>
         </div>
     </div>
        })
      }
    </div>
  )
}

export default SearchProduct
