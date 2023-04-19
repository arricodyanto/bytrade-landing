import { Box } from '@mui/material'
import React from 'react'
import TextfieldLabel from '../../atoms/TextfieldLabel'
import ButtonContained from '../../atoms/ButtonContained'
import { handleSubmit } from '@/common/utils/auth'

export default function LoginForm() {
  return (
    <Box component='form' onSubmit={handleSubmit}>
        <Box className='hidden'>
          <TextfieldLabel label='Action' name='action' value='login' />
          <TextfieldLabel label='User Name' name='username' value='' />
        </Box>
        <Box className='mt-8'>
            <ButtonContained type='submit' label='Login' fullWidth size='large' />
        </Box>
    </Box>
  )
}
