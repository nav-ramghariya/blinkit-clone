import React, { useRef } from 'react'
import './ProductCategories.css'
import { products } from '../../assets/assets';
import { useState,useEffect } from 'react';
import flame from '../../assets/images/flame.png';
import { useDispatch, useSelector } from 'react-redux';
import {add,IncrementQuantity,DecrementQuantity} from '../../store/CartSlice'
import { Link } from 'react-router-dom';
import { ForkRight } from '@mui/icons-material';

const ProductCategories = () => {
    const [product,setProduct]=useState([]);
    const [addButtonShow,setAddButtonShow]=useState(false);
    const cart=useSelector(state=>state.cart)
    useEffect(()=>{
        setProduct(products)
    }, [])


    // const scrollRef=useRef()

    // const handleScroll=(direction)=>{
    //  const {current}=scrollRef
    //  if(direction==='left'){
    //     current.scrollBy({left:-200,behavior:'smooth'})
    //  }else{
    //     current.scrollBy({left:200,behavior:'smooth'})
    //  }
    // }

    const dispatch = useDispatch();

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


    const groupedCategories=(products)=>{
        // if (!products || products.length === 0) return {};
        return products.reduce((acc,prod)=>{
            if(!acc[prod.category]){
                acc[prod.category]=[];
            }
            acc[prod.category].push(prod);
            return acc;
        },{})
    }
      const groupedCategory=groupedCategories(product)

      const getcartQuantity=(id)=>{
        const item=cart.find((item)=>item.id===id)
           return item?item.itemquantity:0
      }
    return (
        <div className="product-categories">
            <h2 className='popular-product'>Popular Products</h2>
            {Object.keys(groupedCategory).map((category) => (
                <div key={category} className="category-section">
                    <h2 className='category-name'>{category}</h2>

                    <div className="category-products">
                   
                        {groupedCategory[category].map((product) => (
                            <div key={product.id} className="product-card">
                               
                               <Link to={`/${product.id}`} >  <img className='category-image' src={product.image} alt={product.name} /> </Link>
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
                        ))}
      </div>
                </div>
            ))}
        </div>
    )
  return (
    <div>
    </div>
  )
}

export default ProductCategories
