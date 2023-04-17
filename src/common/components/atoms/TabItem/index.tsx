import { createTheme, Tab, TabProps, ThemeProvider } from '@mui/material'
import React from 'react'

const customTheme = createTheme({
    components: {
        MuiTab: {
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx ({
                    '&:hover': {
                        opacity: 1
                    },
                    minHeight: 44,
                    [theme.breakpoints.up('lg')]: {
                        height: 100
                    },
                    [theme.breakpoints.up('xs')]: {
                        height: 75
                    },
                    textTransform: 'initial',
                }),
            },

        },
    }
})

export default function TabItem(props: TabProps) {
    const { ...tabProps } = props
  return (
    <ThemeProvider theme={customTheme}>
        <Tab disableRipple { ...tabProps } className='text-2xl font-bold text-[#94a3b8]' />
    </ThemeProvider>
  )
}
