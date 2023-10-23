import axios from 'axios'
import React from 'react'
import { useEffect, useState, useRef } from 'react'


export default function Products() {
const [filter, setFilter] = useState(false)
 const [categories, setCategories] = useState([])
  useEffect(()=>{  
    axios.get('http://localhost:3000/categories')
    .then(res => setCategories(res.data.categories))
    
    .catch(err => console.log(err.message))
  },[])

  const [clickedFilter, setClickedFilter] = useState('')
 
   {console.log(clickedFilter)}
  return (
    <>
    <div className='filters'>
      <div className='catogries'>
        <p>Show all</p>
        {categories.map((category) => (
             <p key={category.id}> / {category.name}</p>
           ))}
      </div> 
      <p className='' onClick={() => setFilter(!filter)}>{filter ? 'Hide Filter' : 'Filter'}</p>
    </div>
    {filter &&<div className='filters_1'>
      <div className='filter' >
        <p>Sort By</p>
        <p onClick={() => setClickedFilter('this')}>Newest</p>
        <p>Popularity</p>
        <p>Price: Hight to Low</p>
        <p>Price Low to High</p>
      </div>
      <div className='filter'>
        <p>Choose Color</p>
        <p><div></div>Black</p>
        <p><div></div>Blue</p>
        <p><div></div>Brown</p>
        <p><div></div>Gray</p>
        <p><div></div>White</p>
        <p><div></div>Oragne</p>
      </div>
      <div className='filter'>
        <p>Delce & Gabbana</p>
        <p>Hermes</p>
        <p>Huge Boss</p>
        <p>Louis Vuitton</p>
        <p>Versace</p>
        <p>Zara</p>
      </div>
      <div className='filter'></div>
    </div>}
    </>
  )
}
