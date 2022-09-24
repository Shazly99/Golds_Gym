import React, { useContext } from 'react'
import { Typography, Box, Stack } from '@mui/material';
import HorizontalScrollbar from './../SearchExercises/HorizontalScrollbar';
import Loader from '../Loader';
import Image from '../../constants/Image'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
 
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <>
      <Box overflow={'hidden'} sx={{  mt: { lg: '100px', xs: '10px' } }}>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
          Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
        </Typography>
         <ScrollMenu  >
          <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
            {
              targetMuscleExercises.length ?
                <HorizontalScrollbar data={targetMuscleExercises} /> :
                <Loader />
            }
          </Stack>
        </ScrollMenu>
 
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
          Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
        </Typography>
        <ScrollMenu  >
          <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
            {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
          </Stack>
        </ScrollMenu>

      </Box>


    </>
  )
}

export default SimilarExercises