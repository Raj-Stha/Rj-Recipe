import React from 'react'

const Ingredients = ({ meal }) => {
  return (
    <div className="">
      <h2 className='pt-7 pb-2 text-2xl font-semibold mmd:pt-3 mmd:text-xl msm:text-base '>Ingredients</h2>
      <div className="grid grid-cols-6 gap-6 mmd:gap-2 msm:grid-cols-3 msm:gap-1">
        {[...Array(11).keys()].map((data, index) => {

          if (meal?.[`strIngredient${index + 1}`] !== "") {
            return (
              <div className="px-2 py-2 msm:py-1 msm:px-2" key={index}>
                <div className="hover:scale-110 ease-in-out duration-200 cursor-pointer">
                  <img src={`https://www.themealdb.com/images/ingredients/${meal?.[`strIngredient${index + 1}`]}.png`} alt="" className='w-[100%] h-[100%] object-cover' />
                </div>
                < h4 className='px-2 py-2 text-center msm:text-sm ' >{meal?.[`strIngredient${index + 1}`]}</h4>
              </div>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default Ingredients