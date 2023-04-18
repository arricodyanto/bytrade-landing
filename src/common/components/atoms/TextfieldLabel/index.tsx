import React from 'react'
import { TTextfieldLabelProps } from '@/common/types/textfield'
import { FormControl, FormLabel, TextField } from '@mui/material'

export default function TextfieldLabel(props: TTextfieldLabelProps) {
    const { label } = props
  return (
    <FormControl className='mb-4 w-full'>
        <FormLabel className='mb-1 text-md text-text-primary'>
            {label}
        </FormLabel>
        <TextField fullWidth {...props} label='' variant='outlined' size='small' inputProps={{style: {fontSize: 14 }}} sx={{
            '& .MuiOutlinedInput-root': { 
                '&:hover fieldset': { 
                    borderColor: '#7161EF',
                },
            }, 
            '& .MuiInputBase-root': {
                height: 38,
                transition: 'height 0.3s',
            },
            '& .Mui-focused': {
                height: 48,
                transition: 'height 0.3s',
            },
            '& .Mui-disabled': {
                '&:hover fieldset': { borderColor: '#bfc0c2' },
                    backgroundColor: '#E2E8F0' 
                }
            }} InputLabelProps={{ style: {fontSize: 14}}}/>
    </FormControl>
  )
}
