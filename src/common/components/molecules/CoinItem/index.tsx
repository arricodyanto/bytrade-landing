import React from 'react'
import PrecentageShift from '../../atoms/PrecentageShift'
import Link from 'next/link'
import { Chip, Stack, Typography } from '@mui/material'
import { TCoinItemProps } from '@/common/types/coin'

export default function CoinItem(props: TCoinItemProps) {
    const {
        href,
        chips,
        name,
        value,
        precentage
    } = props
    const [CryptoIcon, setCryptoIcon] = React.useState<any>(null);
    React.useEffect(() => {
        import('react-cryptoicon').then((module) => {
            setCryptoIcon(() => module[chips])
        });
    }, [chips]);
  return (
    <Link href='/'>
        <Stack padding={3} rowGap={0.5} className='hover:bg-text-primary hover:bg-opacity-10 rounded-lg'>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <Stack direction='row' spacing={0.5} alignItems='center'>
                    {CryptoIcon && <CryptoIcon color='#F3BA2F' size={30} />}
                    <Typography variant='h6' maxWidth={90} className='font-bold text-[20px] truncate line-clamp-1'>{name}</Typography>
                </Stack>
                <Chip variant='outlined' label={chips}/>
            </Stack>
            <Stack direction='row' spacing={0.5}>
                <Typography variant='h4' className='font-bold'>$</Typography>
                <Typography variant='h4' maxWidth={120} className='font-bold'>{value.toFixed(3)}</Typography>
            </Stack>
            <PrecentageShift value={precentage} />
        </Stack>
    </Link>
  )
}
