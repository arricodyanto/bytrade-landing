import { handleSubmit } from '@/common/utils/login'
import { useRouter } from 'next/router'
import React from 'react'

export default function Auth() {
    const router = useRouter()
    React.useEffect(() => {
        handleSubmit
        router.push('/')
    })
  return (
    <></>
  )
}
