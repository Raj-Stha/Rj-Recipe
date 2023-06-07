import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetCategoryDetailQuery } from '../components/mealApi';
import Loading from '../components/Loading'
import { Image, Shimmer } from 'react-shimmer';

const MealSingleCategory = () => {

  const { mealName } = useParams();
  const meals = mealName.substring(0, 1).toUpperCase().concat(mealName.substring(1));
  const nav = useNavigate();

  const { data, isLoading } = useGetCategoryDetailQuery(meals);

  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);



  return (
    <div className='mt-[5%] mb-[4%] px-12 mlg:mt-[8%] mmd:mt-[9%] mlg:px-8 mmd:px-8 msm:mt-[17%] msm:px-4'>
      {data?.meals === null ? <h1 className='text-center text-3xl font-semibold py-[12%] mt-[5%] msm:py-[50%] msm:mt-[5%] msm:text-base'>No Categories Found</h1> : <h1 className=' text-center text-3xl font-semibold mmd:text-2xl msm:text-base '>{meals} <span className='text-rose-600'>Recipes</span></h1>}

      {isLoading && <Loading />}
      <div className="grid grid-cols-4 gap-10 pt-6 mlg:gap-8  msm:grid-cols-3 msm:gap-3 msm:pt-4">
        {data?.meals !== null && data?.meals.map((meal, index) => {
          return (
            <div key={index} className='shadow-lg hover:scale-105 cursor-pointer hover:ease-in-out duration-150' onClick={() => nav(`/${meal?.idMeal}`)} >
              < div className=" rounded-md overflow-hidden pb-4 msm:pb-2" >

                <Image src={`${meal?.strMealThumb}`} fallback={<Shimmer width={400} height={300} />} />
              </div>

              <h2 className='text-center text-xl font-semibold pb-4 px-1 mlg:text-base mlg:pb-1 msm:text-xs'>{meal?.strMeal.length > 18 ? `${meal?.strMeal.substring(0, 20)}...` : meal?.strMeal} </h2>

            </div>

          )
        })}
      </div >
    </div >
  )
}

export default MealSingleCategory