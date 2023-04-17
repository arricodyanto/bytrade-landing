import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function PartnerSupporters() {
  return (
    <Box marginBottom={6} className='bg-[#1F2A45] py-8 px-2 rounded-[10px]' marginTop={10}>
        <Box component='a' id='partners' className='relative xs:-top-[150px] lg:-top-[80px]'></Box>
        <Stack className='flex justify-center'>
            <Typography variant='h4' className='font-bold text-center mb-4'>Partners & Supporters</Typography>
            <Grid container columnSpacing={4} rowSpacing={0} alignItems='center' justifyContent='center' paddingX={6}>
                <Grid item xs={12} md={3}>
                    <Image src='/sponsors/alcide.png' width={100} height={100} alt='Alcide Logo' layout='responsive' className='hover:brightness-110 aspect-video object-contain hover:scale-105 transition' />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Image src='/sponsors/algorithmia.png' width={100} height={100} alt='Algorithmia Logo' layout='responsive' className='hover:brightness-110 aspect-video object-contain  hover:scale-105 transition' />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Image src='/sponsors/valiantys.png' width={100} height={100} alt='Valiantys Logo' layout='responsive' className='hover:brightness-110 aspect-video object-contain  hover:scale-105 transition' />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Image src='/sponsors/kafka.png' width={100} height={100} alt='Apache Logo' layout='responsive' className='hover:brightness-110 aspect-video object-contain  hover:scale-105 transition' />
                </Grid>
            </Grid>
        </Stack>
    </Box>
  )
}
