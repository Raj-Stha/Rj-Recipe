import React, { useEffect } from 'react'
import { useGetAllMealCategoriesQuery } from '../components/mealApi'
import { useNavigate } from 'react-router';
import Loading from '../components/Loading';
import { Image, Shimmer } from 'react-shimmer';


const MealCategories = () => {
  const nav = useNavigate();
  const { data, isLoading } = useGetAllMealCategoriesQuery();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);



  return (
    <div className='mt-[5%] mb-[4%] px-12 mlg:mt-[8%] mmd:mt-[9%] mmd:px-8 msm:mt-[17%] msm:px-4'>
      <h1 className=' text-center text-3xl font-semibold msm:text-base'>All <span className='text-rose-600'>Categories</span></h1>
      {isLoading && <Loading />}
      <div className="grid grid-cols-4 pt-12 gap-5 msm:grid-cols-3  msm:gap-4 justify-items-center mmd:pt-7 msm:pt-5">
        {data?.categories.map((meal, index) => {
          return (
            <div key={meal?.idCategory} className='px-2 msm:px-0 ' onClick={() => nav(`/category/${meal?.strCategory.toLowerCase()}`)}>
              <div className=" items-center justify-center mb-4 hover:scale-125 ease-in-out duration-150">
                <Image src={`${meal?.strCategoryThumb}`} alt="" className='w-[100%] h-[100%] object-cover' fallback={<Shimmer width={400} height={300} />} />
              </div>
              <h2 className='text-center text-xl font-semibold msm:text-xs'>{meal?.strCategory}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MealCategories