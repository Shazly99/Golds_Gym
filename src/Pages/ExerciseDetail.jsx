import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/Exercises_Detalis/Details';
import ExerciseVideos from '../components/Exercises_Detalis/ExerciseVideos';
import SimilarExercises from '../components/Exercises_Detalis/SimilarExercises';
 
import { exercisesOptions, fetchData, youtubeOptions } from './../utils/fetchData';
 
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id}=useParams()
  useEffect(() => {
    const fetcExerciseData=async()=>{
      const exerciseDbUrl=`https://exercisedb.p.rapidapi.com`;
      const youtubeSearchUrl=`https://youtube-search-and-download.p.rapidapi.com`;
  
      const exerciseDetailData=await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exercisesOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseYoutubeData= await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exerciseYoutubeData.contents)

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exercisesOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exercisesOptions);
      setEquipmentExercises(equimentExercisesData);
     }
    fetcExerciseData()

  }, [id])


  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail
