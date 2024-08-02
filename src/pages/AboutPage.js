import React from 'react'
import Header from '../components/header/Header'
import HeaderPagesSection from '../sections/HeaderPagesSection'
import StoryAboutSection from '../sections/StoryAboutSection'
import aboutImg from "../image/about-signature.png.webp"
import DataCountSection from '../sections/DataCountSection'
import AboutBestGym from '../sections/AboutBestGym'
import TrainingTodaySection from '../sections/TrainingTodaySection'
import TrainersSection from '../sections/TrainersSection'
import FooterBanner from '../sections/FooterBanner'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <div>
        <Header/>
        <HeaderPagesSection  title='About'/>
        <StoryAboutSection btnVisible={false} aboutText={
          `<div>
                <img src="${aboutImg}" />
                <h4 class='text-[22px] font-[600] text-[#111111]'>Lettie Chavez</h4>
                <span class='text-[12px] text-[#f15d44]'>CEO - Founder</span>
            </div>`
        }/>

        <DataCountSection/>
        <AboutBestGym/>
        <TrainingTodaySection/>
        <TrainersSection/>
        <FooterBanner/>
        <Footer />
    </div>
  )
}

export default AboutPage