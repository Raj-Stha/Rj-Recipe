import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useGetMealSingleDetailQuery } from '../components/mealApi';
import Ingredients from './Singlepage/Ingredients';
import MainContent from './Singlepage/MainContent';
import Recommendation from './Singlepage/Recommendation';
import Loading from '../components/Loading'
import PageNotFound from '../components/PageNotFound'

const SinglePage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetMealSingleDetailQuery(id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (<Loading />)
  }

  let meal;

  if (data?.meals == null) {
    return (
      <PageNotFound />
    )
  } else {
    meal = data?.meals[0];
  }


  return (
    <div className='mt-[5%] pt-1 mb-[3%] px-6 mx-5 mlg:mt-[6%] mlg:px-6 mlg:mb-[2%] mmd:mt-[7%] mmd:px-3 msm:mt-[15%] msm:px-1 msm:mx-3 msm:mb-[5%]'>
      {data && <div className="">
        <MainContent meal={meal} />

        <Ingredients meal={meal} />

        <div className=" text-justify pt-6 mmd:pt-2 ">
          <h2 className=' text-2xl font-semibold pb-3  mmd:pb-2 mmd:text-xl msm:text-base'>Instructions</h2>
          <p className='leading-7 mmd:leading-6 msm:text-sm msm:leading-7'>{meal?.strInstructions}</p>
        </div>

        {meal && <Recommendation meal={meal} />}

      </div>}


    </div >
  )
}

export default SinglePage