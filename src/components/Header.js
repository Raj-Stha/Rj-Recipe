import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';

const Header = () => {
  const url = useLocation();
  const nav = useNavigate();
  const [isMenu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);


  const searchMeal = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (value, { resetForm }) => {
      if (value.search !== '') {
        nav(`/search/${value.search}`);
        resetForm();
        setSearch(false);
      }
    }
  })

  return (
    <div className="">
      {
        url.pathname !== '/' &&  <div className='text-white  '>
        <div className="flex items-center justify-between  mmd:pb-2 msm:pb-0 msm:px-3 sticky-header" >
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
  
        {search && <div className="hidden search-bar z-20 pb-6 msm:pb-0 pt-0 msm:pt-4 pl-5 pr-6 mmd:inline-block w-[100%] ">
          <form className=' relative rounded-md overflow-hidden' onSubmit={searchMeal.handleSubmit} >
            <i className="fa-solid fa-magnifying-glass px-4  bg-rose-600 py-3 hover:bg-rose-700 text-black hover:text-white  absolute top-[50%] translate-y-[-50%] right-0 z-10 " onClick={searchMeal.handleSubmit} ></i>
            <input type="text" name='search' id='search' className=' outline-none  bg-gray-600 text-white rounded-sm px-4 py-2 w-[100%] ' placeholder='Chicken' onChange={searchMeal.handleChange} value={searchMeal.values.search} />
          </form>
        </div>}
  
        {isMenu &&
          <div className="p-1 z-30 sub-cat hidden w-[15%] msm:w-[30%] bg-gray-600  mmd:flex flex-col ml-auto mr-2  text-white ">
  
            <NavLink to={'/'} className={'hover:text-rose-500'}>Home</NavLink>
            <NavLink to={'/categories'} className={'hover:text-rose-500'}>Categories</NavLink>
          </div>
        }

  
      </div>
      }
    </div>
  )
}

export default Header