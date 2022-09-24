import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercises }) => {
    return (
        <Link className='exercise-card ' to={`/exercise/${exercises.id}`}>
            <img src={exercises.gifUrl} alt="" />
            <Stack direction={'row'}>
                <Button className='btn_bodyPart'>
                    {exercises.bodyPart}
                </Button>
                <Button className='btn_target'>
                    {exercises.target}
                </Button>
            </Stack>
            <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
                {exercises.name}
            </Typography>
        </Link>
    )
}
export default ExerciseCard