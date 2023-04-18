import { handleLogOut } from '@/common/utils/logout'
import { useRouter } from 'next/router'
import React from 'react'

export default function Logout() {
    const router = useRouter()
    React.useEffect(() => {
        handleLogOut
        router.push('/')
    })
  return (
    <></>
  )
}
