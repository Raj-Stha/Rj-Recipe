import React from 'react'
import Banner from './Homepage/Banner'
import PopularCategories from './Homepage/PopularCategories';
import Ingredient from './Homepage/Ingredient';
import Category from './Homepage/Category';

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularCategories />
      <Ingredient />
    </div>
  )
}

export default Homepage