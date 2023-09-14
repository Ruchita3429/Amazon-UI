import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';

export default function Star({stars}){

  const ratingStar = Array.from({length:5},(elem, index) => {
  let number = index + 0.5;
  return(
    <span key={index}>
        {
            stars >= index + 1 ? <StarIcon /> : stars >= number ? <StarHalfIcon /> : <StarOutlineIcon />
        }
    </span>
  )
  })

  return (
    <wrapper className="star" >
        {ratingStar }
    </wrapper>
  )
}
