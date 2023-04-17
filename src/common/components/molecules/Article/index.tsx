import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Link from 'next/link';
import { TArticleProps } from '@/common/types/post';

export default function Article(props: TArticleProps) {
  const {
    src,
    level,
    link,
    title,
    body
  } = props
  return (
    <Stack spacing={1}>
        <Image src={src} width={100} height={100} alt='Image 1' layout='responsive' className='rounded-[10px] hover:brightness-110 mb-2 aspect-video object-cover' />
        <Stack direction='row' spacing={1} alignItems='center'>
          <SignalCellularAltIcon />
          <Typography variant='body1' className='font-bold text-lg'>{level}</Typography>
        </Stack>
        <Link href={link}>
          <Typography variant='subtitle1' className='font-bold text-2xl hover:brightness-125'>
            {title}
          </Typography>
        </Link>
        <Typography variant='body2' className='line-clamp-3'>
          {body}
        </Typography>
    </Stack>
  )
}
