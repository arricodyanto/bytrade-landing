import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ChipClickable from '../../atoms/ChipClickable'
import Article from '../../molecules/Article'

export default function Academy() {
  return (
    <Box component='section' marginTop={4} marginBottom={4}>
        <Box component='a' id='academy' className='relative xs:-top-[120px] lg:-top-[150px]'></Box>
        <Stack direction={{xs: 'column', md: 'row'}} rowGap={2} justifyContent='space-between' alignItems={{xs: 'start', md: 'center'}} marginBottom={2}>
            <Typography variant='h4' className='font-bold'>Latest Article</Typography>
            <Stack direction='row' spacing={2} alignItems='center'>
                <Typography variant='body1' className='font-bold text-lg'>Level</Typography>
                <Stack direction='row' spacing={0.5} alignItems='center'>
                    <ChipClickable active='filled' inactive='outlined' label='Beginner' />
                    <ChipClickable active='filled' inactive='outlined' label='Intermediate' />
                    <ChipClickable active='filled' inactive='outlined' label='Advanced' />
                </Stack>
            </Stack>
        </Stack>
        <Grid container columnSpacing={3} rowSpacing={6}>
            <Grid item xs={12} md={4}>
                <Article src='/post/article-1.jpg' level='Intermediate' link='/' title='Read Bitcoin Direction Before and After Halving' body='The halving event is one of the long-awaited catalysts because it is expected to bring the price of Bitcoin to increase. This is because Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, molestias.' />
            </Grid>
            <Grid item xs={12} md={4}>
                <Article src='/post/article-2.jpg' level='Beginner' link='/' title='What is the Ethereum Shapella Upgrade?' body='After the Merge update that occurred in September 2022, many parties are waiting for the next Ethereum update. Next update...' />
            </Grid>
            <Grid item xs={12} md={4}>
                <Article src='/post/article-3.jpg' level='Advanced' link='/' title='What is Zero-Knowledge and How Does it Work?' body='The blockchain and crypto industries were born from a combination of existing computer technologies. Today crypto is becoming an industry for various teams of developers trying to create...' />
            </Grid>
        </Grid>
    </Box>
  )
}
