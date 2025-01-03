import React from 'react'
import './Templates.css'

const Templates = () => {
  return (
    <div className='Templates'>
      <div className="first-template">
        <div className="template-content"> 
            <div className="title">
            <h1 className='fruits'>Fruits </h1>
            <h1 className='corner'>Corner</h1>
            </div>
           <h3>Fruits and Vegetables at your Doorstep</h3>
           <button className='template1-btn'>Shop Now</button>
      
        </div>
      </div>
     
      <div className='Group-template'>
      <div className='template2'>
         <h3 className='template2-title'>Pharmacy At Your<br/> Doorstep!</h3>
         <p></p>
         <button className='template2-btn'>Order Now</button>
        </div>
        <div className='template3'>
         <h3 className='template3-title'>Munchies Cravings is<br/> Over Now!</h3>
         <p></p>
         <button className='template3-btn'>Order Now</button>
        </div>
        <div className='template4'>
         <h3 className='template4-title'>No time for diaper<br/> run ? </h3>
         <p></p>
         <button className='template4-btn'>Order Now</button>
        </div>
        
      </div>
    </div>
  )
}

export default Templates
