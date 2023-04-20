import { Stack, Typography } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { TPrecentageShiftProps } from '@/common/types/precentageshift';

export default function PrecentageShift(props:TPrecentageShiftProps) {
  const {
    value
  } = props
  return (
    <Stack direction='row' alignItems='center'>
      { value >= 0 ?
          <>
            <PlayArrowIcon color='success' className='text-[27px] -rotate-90' />
            <Typography variant='body1' className='text-success font-bold'>{value.toFixed(4)}%</Typography>
          </>
        :
          <>
            <PlayArrowIcon color='error' className='text-[27px] rotate-90' />
            <Typography variant='body1' className='text-error font-bold'>{value.toFixed(4)}%</Typography>
          </>
      }
    </Stack>
  )
}
