import React, { useState } from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return 'Loading...'
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' }, p: '20px' }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a key={index} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
            <img style={{ borderRadius: '10px' , p:'50px'}} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box sx={{padding:'0px 10px'}}>
              <Typography variant='h6'  sx={{textTransform:'lowercase'}} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography variant='h6'   fontWeight={100} sx={{textTransform:'lowercase'}}  color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos