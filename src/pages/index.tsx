import Head from 'next/head'
import { Box } from '@mui/material'
import BackgorundGradient from '@/common/components/atoms/BackgroundGradient'
import Appnav from '@/common/components/organism/Appnav'
import ContainerPage from '@/common/components/atoms/ContainerPage'
import HeroSite from '@/common/components/organism/HeroSite'
import Features from '@/common/components/organism/Features'
import TopCoins from '@/common/components/organism/TopCoins'
import Steps from '@/common/components/organism/Steps'
import Academy from '@/common/components/organism/Acadamy'
import PartnerSupporters from '@/common/components/organism/PartnerSupporters'
import Footer from '@/common/components/organism/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bytrade - Exchange Platform for Your Cryptocurrencies</title>
      </Head>
      <Appnav />
      <Box className='relative'>
        <BackgorundGradient />
      </Box>
      <ContainerPage>
        <HeroSite />
        <Features />
        <TopCoins />
      </ContainerPage>
      <Box className='w-screen h-full xs:px-0 xs:py-8 lg:p-8 bg-[#1F2A45]'>
        <ContainerPage>
          <Steps />
        </ContainerPage>
      </Box>
      <Box className='relative'>
        <ContainerPage>
          <Academy />
          <PartnerSupporters />
          <Footer />
        </ContainerPage>
      </Box>
    </>
  )
}
