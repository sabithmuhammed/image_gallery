import React from 'react'

const Card = ({image,handleOnclick}) => {
  return (
    <div className='card' onClick={()=>handleOnclick(image.urls.regular)}>
      <img src={image.urls.small} alt="" />
    </div>
  )
}

export default Card
