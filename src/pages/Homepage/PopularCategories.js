import React from 'react'
import { useGetAllMealCategoriesQuery } from '../../components/mealApi'
import { useNavigate } from 'react-router';
import Loading from '../../components/Loading';

const PopularCategories = () => {

  const { data, isLoading } = useGetAllMealCategoriesQuery();
  const nav = useNavigate();

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <div className=' pt-4 pb-6 px-12 mmd:px-10 msm:px-3 mmd:pt-3 msm:pt-2'>
      <h1 className=' text-center text-3xl font-semibold mmd:text-2xl msm:text-base mmd:text-left '>Popular <span className='text-rose-600'>Categories</span></h1>
      <div className="grid grid-cols-5 pt-8  mmd:grid-cols-3 mmd:gap-8 justify-items-center mmd:pt-5 msm:grid-cols-3 msm:gap-2">
        {data?.categories.map((meal, index) => {
          if (index < 5) {
            return (
              <div key={meal?.idCategory} className='px-2 ' onClick={() => nav(`/category/${meal?.strCategory}`)} >
                <div className=" items-center justify-center mb-4 hover:scale-125 ease-in-out duration-150">
                  <img src={`${meal?.strCategoryThumb}`} alt="" className='w-[100%] h-[100%] object-cover' />
                </div>
                <h2 className='text-center break-all  text-xl mmd:text-base font-semibold msm:text-xs'>{meal?.strCategory}</h2>
              </div>
            )
          }

          return null
        })}
      </div>
    </div>
  )
}

export default PopularCategories