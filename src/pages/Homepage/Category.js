import React from 'react'
import { useGetCategoryDetailQuery } from '../../components/mealApi'
import { useNavigate } from 'react-router';
import Loading from '../../components/Loading';

const Category = () => {
  const nav = useNavigate();

  const { data, isLoading } = useGetCategoryDetailQuery('Chicken');
  if (isLoading) {
    return (
      <Loading />
    )
  }
  return (
    <div className="px-16 py-4  mmd:px-9 msm:px-3  msm:py-4 ">
      <div className='pb-5 msm:pb-2'>
        <h1 className=' text-3xl font-semibold mmd:text-2xl msm:text-base'>Chicken <span className='text-rose-600'>Recipes</span></h1>
      </div>


      <div className=" grid grid-cols-6 mlg:grid-cols-3  gap-8 grid-rows-[250px_260px] overflow-hidden  mlg:grid-rows-1  mmd:gap-6 msm:gap-2">
        {data?.meals.map((meal, index) => {
          if (index < 5) {
            return (

              <div key={index} className={` relative h-[100%]  w-[100%]  rounded-md overflow-hidden shadow-xl shadow-gray-400 ${index >= 3 ? 'mlg:hidden' : ' mlg:col-span-1 mlg:row-span-1 '}  ${index === 0 ? 'row-span-1 col-span-2 ' : index === 1 ? 'col-span-2 row-span-2 ' : index === 2 ? 'col-span-2 row-span-1 ' : 'col-span-2'} mlg:row-span-1 col-span-2`} onClick={() => nav(`/${meal?.idMeal}`)}>

                <div className='items-center justify-center mb-4 w-[100%] h-[100%]  '>

                  <img src={`${meal?.strMealThumb}`} alt="" className='w-[100%] h-[100%] object-cover' />
                </div>

                <h2 className='text-center text-xl font-semibold absolute bottom-5 text-white left-[50%] translate-x-[-50%] z-30 mmd:w-[100%] mmd:text-sm msm:text-xs msm:bottom-1' >{meal?.strMeal}</h2>

                <div className="absolute top-0 w-[100%] h-[100%] z-10 overlay hover:opacity-0">
                </div>
              </div>

            )
          }
          return null

        })}
      </div>
    </div>
  )
}

export default Category