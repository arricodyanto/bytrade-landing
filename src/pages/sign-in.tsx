import BackgorundGradient from '@/common/components/atoms/BackgroundGradient'
import ContainerPage from '@/common/components/atoms/ContainerPage'
import LoginForm from '@/common/components/molecules/LoginForm'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SignIn() {
  return (
    <>
        <Head>
            <title>Login - Bytrade</title>
        </Head>
        <Box className='relative'>
            <BackgorundGradient />
        </Box>
        <Stack className='h-screen grid place-items-center'>
            <ContainerPage className='lg:max-w-[1000px]'>
                <Box className='bg-[#131e36] border border-gray-800 rounded-md shadow-xl'>
                    <Grid container>
                        <Grid item xs={12} md={6} p={4}>
                            <Stack marginBottom={2}>
                                <Link href='/' className='w-fit mb-4'>
                                    <Stack direction='row' spacing={1} className='flex items-center text-lg hover:brightness-110'>
                                        <Image src='/bytrade-logo.png' width={35} height={35} alt='Bytrade - Logo' />
                                        <Typography variant='h5' className='font-bold uppercase text-[30px] text-text-primary'>Bytrade</Typography>
                                    </Stack>
                                </Link>
                                <Typography variant='h6' className='font-bold text-[24px]'>Hello!</Typography>
                                <Typography variant='body1' className=''>Welcome to Bytrade! Please Log in to your account to start earning!</Typography>
                            </Stack>
                            <LoginForm />
                        </Grid>
                        <Grid item md={6} sx={{ display: { xs: 'none', md: 'grid' }, position: 'relative' }}>
                            <Image src='/login-hero.jpg' alt='Login Hero' layout='fill' objectFit='cover' className='rounded-r-md brightness-75' />
                        </Grid>
                    </Grid>
                </Box>
                <Typography variant='body1' className='text-center mt-4'>Dont have a account? <Link href='/register' className='underline underline-offset-4 decoration-1 hover:no-underline hover:text-primary transition'>Register</Link></Typography>
            </ContainerPage>
        </Stack>
    </>
  )
}
