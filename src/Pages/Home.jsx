import { Box } from '@mui/material'
import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Exercises from './../components/Exercises/Exercises';
import SearchExercises from './../components/SearchExercises/SearchExercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([])
   return (
    <div>
      <Box>
        <HeroBanner/>
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart }/>
        <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises }/>  
      </Box>  
    </div>
  )
}

export default Home
