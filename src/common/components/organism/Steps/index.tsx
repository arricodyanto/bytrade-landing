import { TabContext, TabPanel } from '@mui/lab'
import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import TabsContainerVer from '../../atoms/TabsContainerVer'
import TabItem from '../../atoms/TabItem'

export default function Steps() {
    const [value, setValue] = React.useState('1')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }
  return (
    <Box component='section'>
        <Box component='a' id='steps' className='relative xs:-top-[190px] lg:-top-[350px]'></Box>
        <Typography variant='h4' className='font-bold mb-6'>Get Started in 3 Steps</Typography>
        <Grid container spacing={0} rowSpacing={2}>
            <TabContext value={value}>
                <Grid item xs={12} md={6}>
                    <TabsContainerVer onChange={handleChange} value={value} className='h-[315px]'>
                        <TabItem label='Buy Crypto in 1 Minute' value='1' />
                        <TabItem label='Here’s How You Save & Earn Interest' value='2' />
                        <TabItem label='Make Your First Spot Trade' value='3' />
                    </TabsContainerVer>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className='h-full bg-[#0F172A] rounded-none'>
                        <TabPanel value='1' className='p-0 xs:w-full xs:h-[200px] md:w-full md:h-[315px]'>
                            <iframe width='100%' height='100%' src="https://www.youtube.com/embed/m1CyUajtlr0?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </TabPanel>
                        <TabPanel value='2' className='p-0 xs:w-full xs:h-[200px] md:w-full md:h-[315px]'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7eHZm9gja6k?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </TabPanel>
                        <TabPanel value='3' className='p-0 xs:w-full xs:h-[200px] md:w-full md:h-[315px]'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qjqEPW5lJKw?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </TabPanel>
                    </Box>
                </Grid>
            </TabContext>
        </Grid>
    </Box>
  )
}
