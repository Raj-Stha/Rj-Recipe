import React from 'react'

const Loading = () => {
  return (
    <div className='w-[500px] mx-auto msm:w-[320px] '>
      {/* https://assets3.lottiefiles.com/packages/lf20_6yhhrbk6.json */}
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_no6msz4f.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  )
}

export default Loading