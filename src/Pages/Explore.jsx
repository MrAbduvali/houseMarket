import React from 'react'
import { Link } from 'react-router-dom'
// import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
// import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'

function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className='font-bold text-3xl'>Explore</p>
      </header>
      <main>
        {/* slider */}
        <p className='font-semibold text-2xl'>categories</p>
        <div className='flex gap-4 justify-center items-stretch'>
          <Link to={'category/rent'}>
            {/* <img src={rentCategoryImage} alt="rent"  className='w-[200px] rounded-xl'/> */}
            <p>Place for rent</p>
          </Link>
          <Link to={'category/sell'}>
            {/* <img src={sellCategoryImage} alt="sell" className='w-[200px] rounded-xl' /> */}
            <p>Place for sale</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore