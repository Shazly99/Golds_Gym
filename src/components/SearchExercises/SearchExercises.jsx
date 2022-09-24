import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exercisesOptions, fetchData } from '../../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import './SearchExercises.css'

const SearchExercises = ({setExercises,bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  // const [exercises, setExercises] = useState([])
  const handelSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
     
      const searchedExercises = exercisesData.filter(
        (e) => e.name.toLowerCase().includes(search) ||
          e.bodyPart.toLowerCase().includes(search) ||
          e.equipment.toLowerCase().includes(search) ||
          e.target.toLowerCase().includes(search)
      );
      setSearch('')
      setExercises(searchedExercises)
    }
  };
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);
      setBodyParts(['all', ...bodyPartData]);
    }
    fetchExercisesData()
  }, [])

  return (
    <Stack alignItems={'center'} justifyContent='center'  >
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: "30px" },mt:{lg:"20px",xs:'90px'} }}  textAlign='center' mb="50px">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField placeholder='Search'

          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          sx={{
            input: { fontWeight: "700", border: 'none', borderRight: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          type={'text'}
        />
        <Button className='search-btn'
          onClick={handelSearch}
          sx={{
            bgcolor: "#FF2625", color: '#fff', textTransform: 'none'
            , width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' }
            , height: "56px",
            position: 'absolute',
            right: '0px'
          }}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar isBodyParts data={bodyParts}   bodyPart={bodyPart} setBodyPart={setBodyPart}    />
      </Box>
    </Stack>
  )
}

export default SearchExercises