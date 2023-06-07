import { useFormik } from 'formik';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const Banner = () => {
  const nav = useNavigate();
  const [isMenu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  window.addEventListener('resize', () => {
    checkScroll();
  })
  const checkScroll = () => {
    let screenWidth = window.innerWidth;

    const header = document.querySelector('#header-wrapper');
    const searchbar = document.querySelector('.searchbar');
    const subCat = document.querySelector('.sub-category');

    if (header) {
      // Add Sticky for search bar and sub categories
      if (searchbar) {
        searchbar.classList.add('search-bar');
      }
      if (subCat) {
        subCat.classList.add('sub-cat');

      }

      // Responsive sticky header -- Breakpoints

      if (screenWidth >= 1440 && Math.round(window.scrollY) >= 600) {
        header.classList.add('sticky-header');
      }
      else if (screenWidth < 1440 && screenWidth > 1024 && Math.round(window.scrollY) >= 530) {
        header.classList.add('sticky-header');
      }
      else if (screenWidth <= 1024 && screenWidth > 768 && Math.round(window.scrollY) >= 400) {
        header.classList.add('sticky-header');
      }
      else if (screenWidth <= 768 && screenWidth > 540 && Math.round(window.scrollY) >= 300) {
        header.classList.add('sticky-header');
      }
      else if (screenWidth < 540 && Math.round(window.scrollY) >= 80) {
        header.classList.add('sticky-header');
      }
      else {
        if (searchbar) {
          searchbar.classList.remove('search-bar');
        }
        if (subCat) {
          subCat.classList.remove('sub-cat');
        }

        header.classList.remove('sticky-header');
      }
    }

  }
  window.addEventListener('scroll', checkScroll);


  const searchMeal = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (value, { resetForm }) => {
      if (value.search !== '') {
        nav(`/search/${value.search}`);
        resetForm();
      }
    }
  })



  return (
    <div className='text-white banner-image '>
      <div className="flex items-center justify-between px-5 pt-6 pb-6 mmd:pb-2 msm:pb-0 msm:px-3" id='header-wrapper'>
        <div className="flex  space-x-4 cursor-pointer items-center " onClick={() => nav('/')}>
          <div className="w-[50px] h-[50px] mmd:w-[30px] mmd:h-[30px]">
            <img src="./images/rj-logo-2.png" alt="" />
          </div>
          <h1 className='text-xl font-semibold mmd:text-base hover:text-red-500'>RJ Recipe</h1>
        </div>


        <div className="hidden mmd:flex  items-center space-x-2 ">
          <i className="fa-solid fa-magnifying-glass px-2 " onClick={() => {
            setMenu(false);
            setSearch(!search);
          }}></i>
          <i className="fa-solid fa-bars text-lg px-2 " onClick={() => {
            setSearch(false);
            return setMenu(!isMenu);
          }}></i>
        </div>



        <div className="right  space-x-5 pr-5 mlg:pr-3  flex items-center mmd:hidden">

          <NavLink to={'/'} className={'hover:text-rose-500'}>Home</NavLink>
          <NavLink to={'/categories'} className={'hover:text-rose-500'}>Categories</NavLink>
          <form className='mr-5 pl-4 relative rounded-md overflow-hidden' onSubmit={searchMeal.handleSubmit} >
            <i className="fa-solid fa-magnifying-glass px-4  bg-rose-600 py-3 hover:bg-rose-700 text-black hover:text-white  absolute top-[50%] translate-y-[-50%] right-0 z-10 " onClick={searchMeal.handleSubmit} ></i>
            <input type="text" name='search' id='search' className=' outline-none  bg-gray-600 text-white rounded-sm px-4 py-2 w-[300px] mlg:w-[250px]  ' placeholder='Chicken' onChange={searchMeal.handleChange} value={searchMeal.values.search} />
          </form>
        </div>

      </div>

      {search && <div className="hidden searchbar z-20 pb-6 msm:pb-0 pt-0 msm:pt-4 pl-5 pr-6 mmd:inline-block w-[100%] ">
        <form className=' relative rounded-md overflow-hidden' onSubmit={searchMeal.handleSubmit} >
          <i className="fa-solid fa-magnifying-glass px-4  bg-rose-600 py-3 hover:bg-rose-700 text-black hover:text-white  absolute top-[50%] translate-y-[-50%] right-0 z-10 " onClick={searchMeal.handleSubmit} ></i>
          <input type="text" name='search' id='search' className=' outline-none  bg-gray-600 text-white rounded-sm px-4 py-2 w-[100%] ' placeholder='Chicken' onChange={searchMeal.handleChange} value={searchMeal.values.search} />
        </form>
      </div>}

      {isMenu &&
        <div className="p-1 z-30 sub-category hidden w-[15%] msm:w-[30%] bg-gray-600  mmd:flex flex-col ml-auto mr-2  text-white ">

          <NavLink to={'/'} className={'hover:text-rose-500'}>Home</NavLink>
          <NavLink to={'/categories'} className={'hover:text-rose-500'}>Categories</NavLink>
        </div>
      }

      <div className=" flex pl-12 pt-4 items-center justify-between mxl:pl-6 mmd:pt-4 msm:pr-6 msm:pb-8 msm:pt-7 msm:px-4">

        <div className="w-[35%] space-y-6 mxl:w-[40%] msm:w-[100%] msm:space-y-3">
          <h2 className='text-3xl mxl:text-2xl msm:text-base'>Amazing Food with Fresh Daily Products</h2>
          <p className='text-justify mxl:text-sm msm:text-xs msm:leading-5' >Easy to follow 1 hours recipes that tastes delicious. Spices were bought from India and traded around Europe and Asia.</p>

          <div className="pt-4 msm:pt-4">
            <NavLink to={`/categories`} className={'px-6  bg-secondary py-3 rounded-md bg-rose-600 msm:px-3 msm:py-2 hover:bg-red-700 msm:text-xs'}>View ALL </NavLink>
          </div>
        </div>

        <div className="w-[55%] relative items-center flex  h-[640px]  mxl:h-[500px] mlg:h-[450px] mmd:h-[400px] msm:hidden" >

          <div className="w-[40%] h-[80%]">
            <img src="./images/food-banner-1.jpg" alt="" className='w-[100%] h-[100%] object-cover ' />
          </div>
          <div className="w-[55%] h-[100%] ">
            <img src="./images/food-banner.jpg" alt="" className='w-[100%] h-[100%] object-cover ' />
          </div>



        </div>

      </div>



    </div>
  )
}

export default Banner