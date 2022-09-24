import { Stack, Typography } from '@mui/material'
import React from 'react'
import Image from '../../constants/Image'
import './SearchExercises.css'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {

  return (
    <Stack
      type="button"
      alignItems='center'
      justifyContent='center'
      sx={bodyPart === item ?
        {
          borderTop: '4px  solid #FF2625',
          background: 'rgb(241, 241, 241)',
          borderBottomLeftRadius: '20px',
          width: '270px', height: '282px',
          cursor: 'pointer',
          gap: '47px',
          boxShadow: 4
        } : {
          boxShadow: 4,
          background: 'rgb(241, 241, 241)',
          borderBottomLeftRadius: '20px',
          width: '270px', height: '282px',
          cursor: 'pointer',
          gap: '47px'
        }}
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({top:1800,left:100,behavior:'smooth'})
      }}
    >
      <div className='bodyPart-card'>
        <img src={Image.gym} alt="" style={{ width: '40px', height: '40px' }} />
        <Typography fontSize={24} fontWeight='bold' color='#3A1212' textTransform={'capitalize'}>{item}</Typography>
      </div>
    </Stack>
  )
}

export default BodyPart
