import { ChipProps } from "@mui/material"

export type TChipProps = ChipProps & {
    active: 'outlined' | 'filled'
    inactive: 'outlined' | 'filled'
}
