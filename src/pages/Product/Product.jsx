  import React, { useState } from 'react'
  import { useParams } from 'react-router-dom';
  import {products} from '../../assets/assets'
  import flame from '../../assets/images/flame.png'
  import { useDispatch } from 'react-redux';
  import { useSelector } from 'react-redux';
  import {add,IncrementQuantity,DecrementQuantity} from '../../store/CartSlice'
  import Delivery  from '../../assets/images/Delivery.avif'
  import BestPrices from '../../assets/images/Best_Prices_Offers.avif'
  import wideAssortment from '../../assets/images/Wide_Assortment.avif'
  import './Product.css'


  const Product = () => {
    const cart=useSelector((state)=>state.cart)
    const dispatch = useDispatch(); 
      const {productId}=useParams();
          const [addButtonShow,setAddButtonShow]=useState(false);


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
      
      
      const product=products.find((product=>product.id===Number(productId)))
      if (!product) {
          return <h2>Product not found!</h2>;
        }
    return (
      <div className='product'>
        <div className="productDescription">
          <div className="product-image-div">
          <img className='product-img' src={product.image} alt="" />
          </div>
          <div className="product-images">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />

          </div>
          <h1>Product Details</h1>
        <h5>Category</h5>
        <p>{product.category}</p>
        <h5>Unit</h5>
        <p>{product.quantity}</p>
        <h5>Return policy</h5>
        <p>The product is non-returnable. For a damaged, defective, expired or incorrect item, you can request a replacement within 24 hours of delivery.
        In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.</p>
        <h5>Customer Care Details</h5>
        <p>Email: info@blinkit.com</p>
        <h5>Seller</h5>
        <p>KEMEXEL ECOMMERCE PRIVATE LIMITED
        </p>
        <h5>Seller FSSAI</h5>
        <p>10823999000118</p>
        <h5>Disclaimer</h5>
        <p>Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more or different information. It is recommended not to solely rely on the information presented</p>
        </div>
        <div className='product-details'>
          <div className="product-main-title">
          <p>Home/{product.category}/{product.name}</p>
          <h1>{product.name}</h1>
          <button style={{color:'black',border:'none',padding:'4px'}}><img style={{height:'15px', width:'16px'}} src={flame} alt="" /> 8 min</button>

          </div>
          <div className="quantity-cart-tax">

          
          <p>{product.quantity}</p>
          <div className='product-price-cart'>

          <div className="product-prize"><span>MRP </span><span style={{fontWeight:'600'}}>₹{product.price}</span></div>
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
           <p>(Inclusive of all taxes)</p>
           </div>
          <div className="Blinkit-features">
          <h4>Why shop from blinkit?</h4>
              <div className="blinkit-features-sections">
              <div className="features-images">
            <img src={Delivery} alt="" /><br/>
            <img src={BestPrices} alt="" /><br/>
            <img src={wideAssortment} alt="" /><br/>
            </div>
            <div className="features-description">
              <div className='description1'>
              <h6>Superfast Delivery</h6>
              <p>Get your order delivered to your doorstep at the earliest from dark stores near you</p>
              </div>
              <div className='description2'>
              <h6>Best Prices & Offers</h6>
              <p>Best price destination with offers directly from the manufacturers.
              </p>
              </div>
              <div className='description3'>
              <h6>Wide Assortment</h6>
              <p>Choose from 5000+ products across food, personal care, household & other categories.</p>
              </div>
              
            </div>
              </div>
            
            
                                 
          </div>
          
          

        </div> 
      </div>
    )
  }

  export default Product
