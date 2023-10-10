import React from 'react'
import Image from 'next/image'
const ImageCard = ({Gym}) => {
  return (
    <div className="w-full h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 p-6">
      <Image src={Gym} className="hover:scale-105 ease-in duration-300"/>
    </div>
  )
}

export default ImageCard
