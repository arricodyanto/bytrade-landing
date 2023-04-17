import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import type { TButtonOutlinedProps } from '@/common/types/button'

export default function ButtonOutlined(props: TButtonOutlinedProps & Partial<ButtonProps>) {
    const {
        label,
    } = props
  return (
    <Button variant='outlined' size='small' color='secondary' {...props} className='capitalize text-[16px] rounded-[2px]' sx={{ paddingX: 2.5 }}>{label}</Button>
  )
}
