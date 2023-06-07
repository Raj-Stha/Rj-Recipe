import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="px-14 pb-6 pt-6 bg-black text-white mmd:px-8 mmd:py-4 msm:px-4">
      <div className=' flex justify-between msm:block  '>
        <div className=" text-justify w-[30%] mmd:w-[40%] msm:w-[100%]">
          <div className="flex items-center space-x-4">
            <div className="w-[55px] h-[55px] mmd:w-[45px] mmd:h-[50px]">
              <img src="./images/rj-logo-2.png" alt="" />
            </div>
            <h1 className='text-xl font-semibold mmd:text-base'>RJ Recipe</h1>
          </div>
          <p className='pt-4 mmd:text-sm msm:text-xs msm:pt-2  msm:leading-5'>Delight your taste buds with our delicious meals! Nourish your body, delight your senses. Delicius Meal  available  </p>
        </div>

        <div className="flex w-[60%] justify-around msm:hidden   ">
          <div className=" flex flex-col pt-4 mmd:pt-2  mmd:text-sm ">
            <h2 className='text-lg font-semibold pb-2 mmd:text-base msm:pb-1 msm:text-sm'>Useful Links</h2>
            <NavLink className={'pb-1 msm:pb-0 hover:text-rose-500'} to={'/'} >Home</NavLink>
            <NavLink  to={'/categories'}  className={'hover:text-rose-500'}>Categories</NavLink>
          </div>

          <div className="pt-4 mmd:pt-2">
            <h2 className='text-center text-xl font-medium pb-2 mmd:text-base msm:pb-1 '>Follow Us</h2>
            <div className="icon-wrapper flex flex-col mmd:text-sm mmd:space-y-1 msm:space-y-0 msm:text-xs" >
              <div className=" flex items-center space-x-3">
                <i className="fa-brands fa-facebook space-x-3"></i>
                <h2>Facebook</h2>
              </div>


              <div className=" w-[25%] flex items-center space-x-3">

                <i className="fa-brands fa-twitter"></i>
                <h2>Twitter</h2>
              </div>

            </div>
          </div>
        </div>
      </div >

      <h2 className=' pt-4 mmd:text-sm msm:text-center msm:pt-3 msm:text-xs '>Copyright &copy; Rj Recipe {year}. All right reserved. </h2>


    </div>


  )
}

export default Footer