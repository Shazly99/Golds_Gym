import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Image from '../../constants/Image'

const Footer = () => {
  return (
    <Box mt={'80px'} bgcolor={'#FFF3F4'}>
      <Stack gap="40px" justifyContent={'center'} alignItems={'center'} px="40px" pt="24px">
        <img src={Image.Logo} />
      </Stack>
      <Typography sx={{userSelect:'none', fontSize: { lg: '28px', xs: '20px' } }} mt='30px' justifyContent={'center'} alignItems={'center'} textAlign='center'>
        Made with ❤️ by Shazly Dev
      </Typography>
    </Box>
  )
}

export default Footer
// 