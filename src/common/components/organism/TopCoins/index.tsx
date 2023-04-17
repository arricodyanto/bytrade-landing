import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import CoinItem from '../../molecules/CoinItem'

export default function TopCoins() {
  return (
    <Box component='section' marginBottom={10}>
        <Box component='a' id='top-coins' className='relative -top-[120px]'></Box>
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant='h4' className='font-bold'>Top Coins</Typography>
          <Link href='/'>
            <Typography variant='body1' className='text-lg font-bold hover:text-primary transition'>See Markets →</Typography>
          </Link>
        </Stack>
        <Grid container spacing={1}>
            <Grid item xs={12} md={4} lg={2.4} marginTop={2}>
                <CoinItem name='Binance' chips='BNB' value={324.5} precentage={1.79} />
            </Grid>
            <Grid item xs={12} md={4} lg={2.4} marginTop={2}>
                <CoinItem name='Bitcoin' chips='BTC' value={30115} precentage={1.75} />
            </Grid>
            <Grid item xs={12} md={4} lg={2.4} marginTop={2}>
                <CoinItem name='Etherium' chips='ETH' value={2010} precentage={5.43} />
            </Grid>
            <Grid item xs={12} md={4} lg={2.4} marginTop={2}>
                <CoinItem name='Balancer' chips='BAL' value={7.12} precentage={-0.91} />
            </Grid>
            <Grid item xs={12} md={4} lg={2.4} marginTop={2}>
                <CoinItem name='Cardano' chips='ADA' value={0.4393} precentage={-2.64} />
            </Grid>
        </Grid>
    </Box>
  )
}
