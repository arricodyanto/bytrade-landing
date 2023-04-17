import React from 'react'
import { Box, createTheme, Tab, Tabs, TabsProps, ThemeProvider } from '@mui/material'
import { TTabsContainerVerProps } from '@/common/types/tab';

const customTheme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: ({ theme }) => theme.unstable_sx({
          backgroundColor: '#0F172A',
          borderRadius: '40px 0px 0px 40px',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'flex-start',
          '& .Mui-selected': {
            color: '#E2E8F1'
          }
        }),
        flexContainerVertical: ({ theme }) => theme.unstable_sx({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          flexGrow: 1,
          overflowY: 'auto',
          height: '100%',
          padding: '8px 0',
          [theme.breakpoints.down('md')]: {
            padding: 0
          }
        }),
        indicator: {
          left: 10,
          right: 'auto',
          width: '100%',
          borderRadius: '40px 0 0 40px',
          backgroundColor: '#1F2A45',
          boxShadow: '0 4px 12px 0 rgba(0,0,0,0.16)',
          transform: 'none',
        },
        scrollButtons: ({ theme }) => theme.unstable_sx({
          [theme.breakpoints.up('lg')]: {
            display: 'none',
          },
          '&.Mui-disabled': {
            width: 0,
          },
          overflow: 'hidden',
          transition: 'width 0.5s',
        })
      }
    }
  }
});
export default function TabsContainerVer(props: TabsProps) {
    const { 
      value,
      children,
      ...tabsProps
    } = props
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Box className='w-full'>
          <Tabs value={value} orientation='vertical' variant='scrollable' scrollButtons allowScrollButtonsMobile { ...tabsProps }>
            {children}
          </Tabs>
        </Box>
      </ThemeProvider>
    </>
  )
}
