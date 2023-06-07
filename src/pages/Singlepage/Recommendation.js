import React from 'react'
import { useGetCategoryDetailQuery } from '../../components/mealApi'
import { useNavigate } from 'react-router';
import Loading from '../../components/Loading'

const Recommendation = ({ meal }) => {
  const nav = useNavigate();
  const { data, isLoading } = useGetCategoryDetailQuery(meal.strCategory);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      <h2 className=' text-2xl pt-8 font-semibold pb-3 mmd:text-xl mmd:pt-4 msm:text-base'>You may also like </h2>

      <div className="grid grid-cols-5 gap-5 mmd:gap-4 msm:grid-cols-3 msm:gap-4">
        {data?.meals.map((result, index) => {
          if (meal?.strMeal !== result?.strMeal && index < 6) {
            return (
              <div className="py-2 px-2 hover:scale-110 ease-in-out duration-200 mmd:px-0 mmd:py-0" key={index} onClick={() => nav(`/${result.idMeal}`)}>
                <div className="pb-3 mmd:pb-1">
                  <img src={`${result?.strMealThumb}`} alt="" className='w-[100%] h-[100%] object-cover rounded-lg overflow-hidden ' />
                </div>
                <h2 className='text-center font-semibold tracking-wide mmd:text-sm msm:text-xs'>{result?.strMeal.length > 24 ? `${result?.strMeal.substring(0, 24)}...` : result?.strMeal} </h2>

              </div>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default Recommendation