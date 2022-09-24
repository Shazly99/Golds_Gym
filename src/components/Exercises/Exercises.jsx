import React, { useEffect, useState } from 'react'
import { Box, Pagination, Stack, Typography } from '@mui/material'
import { exercisesOptions, fetchData } from './../../utils/fetchData';
import ExerciseCard from './ExerciseCard';


const Exercises = ({ bodyPart, exercises, setExercises }) => {
 
  const [exercisesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchExercisesData=async ()=>{
      let exercisesData=[];
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
      }else{
        exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exercisesOptions)
      }
      setExercises(exercisesData)
    }
    fetchExercisesData()
  }, [bodyPart])
  
 

  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt='50px' p='20px'>
      <Typography variant='h4' mb={5}>
        Showing Results
      </Typography>
      <Stack direction={'row'} sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap='wrap' justifyContent={'center'}>
        {
          currentExercises.map((exercises, index) => (
            <ExerciseCard key={index} exercises={exercises} />
          ))
        }
      </Stack>
      <Stack spacing={2}>
        <Pagination
          sx={{ textAlign: 'center', mx: 'auto', mt: '40px' }}
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size={'large'}
        />
      </Stack>
    </Box>
  )
}

export default Exercises
