import { Box, Stack } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import Image from 'next/image'
import React from 'react'

export default function BackgorundGradient() {
  const styles = {
    backgroundImage: `url('/gradient-circle.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    zIndex: 99
  }
  return (
    <Stack direction='row-reverse' sx={{ pointerEvents: 'none' }} className='absolute right-0' >
        <Box sx={{ 
            maxWidth: { xs: 250, md: 300, lg: 400, xl: 500 }, 
            filter: 'blur(70px)', 
            opacity: 0.4,
            marginRight: { xs: '40px', md: '100px', lg: '200px', xl: '350px' },
            marginTop: { xs: '150px', md: '130px', lg: '150px'},
        }}>
            <Image src='/gradient-circle.svg' alt='' width={100} height={100} layout='responsive'  />
        </Box>
    </Stack>
    // <Box sx={styles}></Box>
  )
}
