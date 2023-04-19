import { Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ButtonContained from '../../atoms/ButtonContained'
import { MenuItems as menuItems } from '../Appnav'
import Link from 'next/link'
import Image from 'next/image'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Cookies from 'js-cookie'

export default function Footer() {
    const getUserInfo = Cookies.get('loginInfo')
  return (
    <>
        <Divider light className='border-gray-600 w-screen absolute left-0' />
        <Stack className='py-8'>
            <Grid container columnSpacing={2} rowSpacing={4}>
                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant='h5' className='font-bold mb-2'>
                        Start earning today
                    </Typography>
                    { getUserInfo === undefined ? 
                        <Link href='/register'>
                            <ButtonContained label='Register Now' size='large' fullWidth className='py-3 capitalize text-[16px] rounded-[4px] font-bold' />
                        </Link>
                        : 
                        <Link href='/#top-coins'>
                            <ButtonContained label='Trades Now' size='large' fullWidth className='py-3 capitalize text-[16px] rounded-[4px] font-bold' />
                        </Link>
                    }
                </Grid>
                <Grid item xs={12} md={6} lg={3} className='xs:text-start lg:text-end'>
                    <Typography variant='h5' className='font-bold mb-2'>
                        Pages
                    </Typography>
                    {menuItems.map(item=> {
                        return(
                            <>
                                <Link href={item.link}>
                                    <Typography variant='h6' className='hover:brightness-125 transition text-[20px]'>{item.label}</Typography>
                                </Link>
                            </>
                        )
                    })}
                </Grid>
                <Grid item xs={12} md={6} lg={3} className='xs:text-start lg:text-center'>
                    <Typography variant='h5' className='font-bold mb-2'>
                        Community
                    </Typography>
                    <Stack direction='row' spacing={1} justifyContent='center'>
                        <Link href='#'>
                            <LinkedInIcon color='primary' fontSize='large' className='hover:brightness-125 transition' />
                        </Link>
                        <Link href='#'>
                            <FacebookIcon color='primary' fontSize='large' className='hover:brightness-125 transition' />
                        </Link>
                        <Link href='#'>
                            <TwitterIcon color='primary' fontSize='large' className='hover:brightness-125 transition' />
                        </Link>
                        <Link href='#'>
                            <InstagramIcon color='primary' fontSize='large' className='hover:brightness-125 transition' />
                        </Link>
                        <Link href='#'>
                            <YouTubeIcon color='primary' fontSize='large' className='hover:brightness-125 transition' />
                        </Link>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Link href='/'>
                        <Stack direction='row' spacing={1} className='flex items-center text-lg mb-4' sx={{display:'flex', alignItems:'center'}}>
                            <Image src='/bytrade-logo.png' width={35} height={35} alt='Bytrade - Logo' />
                            <Typography variant='h5' className='font-bold uppercase text-[35px]'>Bytrade</Typography>
                        </Stack>
                    </Link>
                    <Stack direction='row' spacing={1} marginBottom={1}>
                        <PlaceIcon fontSize='small' color='primary' />
                        <Typography variant='subtitle2'>Five Lamps Place, 1 Amiens Street, Dublin, New Jersey</Typography>
                    </Stack>
                    <Stack direction='row' spacing={1} marginBottom={1}>
                        <CallIcon fontSize='small' color='primary' />
                        <Typography variant='subtitle2'>+201 7612 812388</Typography>
                    </Stack>
                    <Stack direction='row' spacing={1} marginBottom={1}>
                        <EmailIcon fontSize='small' color='primary' />
                        <Typography variant='subtitle2'>bytrade@trade.com</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
        <Stack className='py-4'>
            <Divider light className='border-gray-600 mb-3' />
            <Typography variant='subtitle1' className='text-center text-text-secondary'>© 2023 <Link href='/' className='hover:text-primary'>Bytrade</Link> - All Rights Reserved</Typography>
        </Stack>
    </>
  )
}
