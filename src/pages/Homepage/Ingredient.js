import React from 'react'
import { useGetCategoryDetailQuery } from '../../components/mealApi'
import { useNavigate } from 'react-router';
import Loading from '../../components/Loading';

const Ingredient = () => {

  const { data, isLoading } = useGetCategoryDetailQuery('Vegan');
  const nav = useNavigate();

  if (isLoading) {
    return (
      <Loading />
    )
  }
  return (
    <div className="px-16 pt-6  pb-14 mmd:px-10 mmd:pt-4 msm:px-3 msm:pt-1 mmd:pb-9 msm:pb-7">
      <div className='pb-5 mmd:pb-3 '>
        <h1 className=' text-3xl font-semibold mmd:text-2xl msm:text-base'>Vegan <span className='text-rose-600'>Recipes</span></h1>
      </div>
      <div className="grid grid-cols-5 gap-9 grid-rows-[250px_250px]  overflow-hidden mmd:grid-cols-3 mmd:grid-rows-1  mmd:gap-5 msm:gap-2">
        {data?.meals.map((meal, index) => {
          if (index < 3) {
            return (
              <div key={index} className={`relative h-[100%] w-[100%] mmd:col-span-1 mmd:row-span-1 bg-red-500 rounded-md overflow-hidden shadow-xl shadow-gray-400  ${index === 0 ? 'row-span-2 col-span-3 ' : 'col-span-2'} `} onClick={() => nav(`/${meal?.idMeal}`)}>

                <div className='items-center justify-center mb-4 w-[100%] h-[100%] '>

                  <img src={`${meal?.strMealThumb}`} alt="" className='w-[100%] h-[100%] object-cover' />
                </div>
                <h2 className='text-center text-xl font-semibold absolute bottom-5 text-white left-[50%] translate-x-[-50%] z-30 mmd:text-sm mmd:w-[100%] msm:text-xs msm:bottom-2'>{meal?.strMeal}</h2>

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

export default Ingredient