import React , { useContext } from 'react'
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import './SearchExercises.css'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Image from '../../constants/Image'
import ExerciseCard from '../Exercises/ExerciseCard';
 
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={Image.left_arrow} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img  src={Image.right_arrow} alt="right-arrow" />
    </Typography>
  );
};


const HorizontalScrollbar = ({data,bodyPart,setBodyPart,isBodyParts}) => {
   
  return (
    <ScrollMenu  LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {
        data.map((item,index)=>
        <Box  overflow={'hidden'} key={index} m='0 40px'>
          {
            isBodyParts?
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>:
            <ExerciseCard exercises={item}/>
          }
           
        </Box>
        )
      }
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
