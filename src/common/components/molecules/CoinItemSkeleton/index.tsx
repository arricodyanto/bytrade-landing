import { Skeleton, Stack } from '@mui/material'
import React from 'react'

export default function CoinItemSkeleton() {
  return (
    <Stack padding={3} rowGap={0.5} className='hover:bg-text-primary hover:bg-opacity-10 rounded-lg'>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Stack direction='row' spacing={1} alignItems='center'>
                <Skeleton variant='circular' animation='wave' width={30} height={30} />
                <Skeleton animation='wave' className='xs:w-[160px] md:w-[120px]' />
            </Stack>
            <Skeleton variant='rounded' animation='wave' width={45} />
        </Stack>
        <Stack direction='row' spacing={0.5}>
            <Skeleton animation='wave' className='w-3/4' />
        </Stack>
            <Skeleton animation='wave' className='w-1/2' />
    </Stack>
  )
}
