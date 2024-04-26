import React from 'react'
import Lottie from "lottie-react"
import EmptyJson from "../../../lottie/Animation - 1714140891401.json"

const EmptyLottie = () => {
  return (
    <div className=' w-[300px] h-[300px]'>
        <Lottie className=''
        animationData={EmptyJson}
        loop
        size={50}/>
    </div>
  )
}

export default EmptyLottie