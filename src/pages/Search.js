import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetSearchedMealQuery } from '../components/mealApi';
import Loading from '../components/Loading'

const Search = () => {
  const { search } = useParams();
  const { data, isLoading } = useGetSearchedMealQuery(search);
  const nav = useNavigate();

  if (isLoading) {
    return (<Loading />)
  }

  if (data?.meals === null) {
    return (
      <div className="h-[82vh] my-auto flex items-center justify-center" >

        <h1 className='pt-1  text-center text-3xl font-semibold msm:text-base '>No Search Result Found </h1>
      </div>
    )
  }
  return (
    <div className='mt-[4%] pt-2 mb-[3%] px-14 mx-5 m2xl:mt-[5%] mlg:mt-[6%] mxl:px-8 mmd:mt-[8%] mmd:px-6 msm:mt-[15%] msm:px-1 msm:mb-[5%] ' >

      <h1 className='text-center text-3xl font-semibold mmd:text-2xl msm:text-sm'>Search Result for : <span className='text-rose-600'>{search} </span></h1>

      <div className="grid grid-cols-4 gap-10 pt-6 mlg:gap-8 mmd:gap-6 msm:grid-cols-3 msm:pt-2 msm:gap-3">
        {data?.meals.map((meal, index) => {
          return (
            <div key={index} className='shadow-lg hover:scale-105 cursor-pointer hover:ease-in-out duration-150' onClick={() => nav(`/${meal?.idMeal}`)}  >
              < div className=" rounded-md overflow-hidden pb-4 msm:pb-2" >
                <img src={`${meal?.strMealThumb}`} alt="" className='w-[100%] h-[100%] object-cover' />
              </div>

              <h2 className='text-center text-xl font-semibold pb-4 px-1 mmd:text-base msm:text-xs msm:pb-2 '>{meal?.strMeal.length > 24 ? `${meal?.strMeal.substring(0, 24)}...` : meal?.strMeal} </h2>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Search