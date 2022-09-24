import { Box, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import Image from '../../constants/Image.js'

// Image.body_part 
// Image.target
// Image.equipment
const Details = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail

  const {body_part ,targetGym,equipmentGym}=Image;
  const extraDetail=[
    {icon:body_part,name:bodyPart},
    {icon:targetGym,name:target},
    {icon: equipmentGym,name:equipment}
  ]

  return (
    <Stack gap={40} sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img width={900} src={gifUrl} loading='lazy' className='detail-image' />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography variant='h4' sx={{ textTransform: 'capitalize' }}>
          {name}
        </Typography>
        <Typography variant='h5' >
          Exercise Keep you strong .  <strong style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}{' '}</strong>
          is one ogf the best exercise to target your  <strong style={{ color: '#FF2625', textTransform: 'capitalize' }}>{target}{' '}</strong> . It will help you
          import your mood and gain energy
        </Typography>
        {
          extraDetail.map((item,index)=>(
            <Stack key={index} direction='row' gap='24px' alignItems='center'>
              <Button className='btn-shadow'  sx={{background:'#fff2db' , borderRadius:'50%' ,width:'100px',height:'100px'}}>
                <img   src={item.icon} style={{width:'50px',height:'50px'}} />
              </Button>
              <Typography textTransform={'capitalize'} variant='h5'>
                {item.name}
              </Typography>
            </Stack>
          ))
        }
      </Stack>
    </Stack>
  )
}

export default Details