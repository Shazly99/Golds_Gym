import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../constants/Image';

import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <Stack direction='row' justifyContent='space-around' sx={{gap:{sm:'123px' ,xs:"40px"},mt:{sm:"32px",xs:"20px"},justifyContent:'none'}} px="20px">
        <Link to='/'>
          <img className=' ' src={images.Logo_1} alt="Logo" />
        </Link>
        <Stack gap="40px" direction='row' fontSize={24} alignItems='flex-end'>
          <Link className='text-link' to='/' style={{borderBottom:"3px solid #FF2625"}}>
            Home
          </Link>
          <a className='text-link' href='#exercise'>
            Exercise
          </a>
        </Stack>
      </Stack>
    </>
  )
}

export default Navbar