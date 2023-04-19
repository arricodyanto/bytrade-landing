import { Box } from '@mui/material'
import React from 'react'
import TextfieldLabel from '../../atoms/TextfieldLabel'
import ButtonContained from '../../atoms/ButtonContained'
import { handleSubmit } from '@/common/utils/auth'

export default function RegisterForm() {
    const [username, setUsername] = React.useState<string>('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
  return (
    <Box component='form' onSubmit={handleSubmit}>
        <Box className='hidden'>
            <TextfieldLabel label='Action' name='action' value='register' />
        </Box>
        <TextfieldLabel label='User Name' name='username' placeholder='User Name' value={username} onChange={handleChange} />
        <Box className='mt-8'>
            <ButtonContained type='submit' label='Create an account' fullWidth size='large' />
        </Box>
    </Box>
  )
}
