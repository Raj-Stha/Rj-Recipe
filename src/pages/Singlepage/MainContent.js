import React from 'react'


const MainContent = ({ meal }) => {
  return (
    <div className="">
      <h1 className='text-3xl font-medium mmd:text-2xl msm:text-base'>{meal?.strMeal}</h1>
      <div className="flex pt-2 mmd:pt-1 mmd:text-sm  msm:text-xs">
        <div className="flex items-center pr-[3%] space-x-2 msm:space-x-1">

          <i className="fa-solid fa-utensils"></i>
          <h3>Categories: <span className='font-semibold '>{meal?.strCategory}</span></h3>
        </div>

        <div className="flex items-center space-x-2 msm:space-x-1">
          <i className="fa-solid fa-location-dot"></i>
          <h3>Place: <span className='font-semibold'>{meal?.strArea}</span></h3>
        </div>
      </div >

      <div className="flex justify-between  mmd:block">
        <div className="rounded-lg overflow-hidden h-[500px] w-[55%] pt-6 mmd:w-[100%] mmd:h-[350px] mmd:pt-3 msm:h-[250px]" >
          <img src={`${meal?.strMealThumb}`} alt="" className='w-[100%] h-[100%] object-cover' />
        </div>

        <div className="w-[40%] text-justify space-y-3 pt-1 mmd:w-[80%] msm:w-[100%]">
          <div className="flex space-x-16 msm:space-x-4" >

            <div className=" ">
              <h2 className='pt-4 pb-2 text-xl font-semibold  msm:text-base msm:pb-1 '>Ingredients</h2>
              {[...Array(11).keys()].map((data, index) => {

                if (meal?.[`strIngredient${index + 1}`] !== "") {
                  return (
                    < h4 className='px-1 py-2 msm:py-1 msm:text-sm ' key={index}>{index + 1}. &nbsp; {meal?.[`strIngredient${index + 1}`]}</h4>

                  )
                }
                return null
              })}
            </div>

            <div className="">
              <h2 className='pt-4 pb-2 text-xl font-semibold msm:text-base msm:pb-1'>Measures</h2>
              {[...Array(11).keys()].map((data, index) => {
                if (meal?.[`strMeasure${index + 1}`] !== " ") {
                  return (
                    < h4 className=' pl-2 pr-8 py-2 msm:py-1 msm:text-sm' key={index}> {meal?.[`strMeasure${index + 1}`]}</h4>
                  )
                }
                return null
              })}
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default MainContent