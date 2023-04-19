import { Box } from '@mui/material'
import React from 'react'
import TextfieldLabel from '../../atoms/TextfieldLabel'
import ButtonContained from '../../atoms/ButtonContained'
import { handleSubmit } from '@/common/utils/login'
import { useRouter } from 'next/router'

export default function LoginForm() {
    const [username, setUsername] = React.useState<string>('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
  return (
    <Box component='form' onSubmit={handleSubmit}>
        <TextfieldLabel label='User Name' name='username' placeholder='User Name' value={username} onChange={handleChange} />
        <Box className='mt-8'>
            <ButtonContained type='submit' label='Login' fullWidth size='large' />
        </Box>
    </Box>
  )
}
