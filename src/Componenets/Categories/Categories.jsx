import React from 'react'
import './Categories.css'
import { categories } from '../../assets/assets'

const Categories = () => {
  return (
    <div className='categories'>
      {
        categories.map((category)=>{
              return (
                <div  className='category'>
                  <img  src={category.image} alt={category.name} />
                  <p className='category-title'>{category.name}</p>
                </div>
              )
        })
      }
    </div>
  )
}

export default Categories
