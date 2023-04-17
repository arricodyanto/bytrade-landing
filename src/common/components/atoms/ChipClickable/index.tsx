import React from 'react'
import { Chip } from '@mui/material'
import { TChipProps } from '@/common/types/chip'

export default function ChipClickable(props: TChipProps) {
    const {
        active,
        inactive
    } = props
    const [variant, setVariant] = React.useState(inactive)
    const handleClick = (event:React.MouseEvent<HTMLDivElement>) => {
        setVariant(variant === inactive ? active : inactive)
    }
  return (
    <Chip variant={variant} onClick={handleClick} {...props} />
  )
}
