import React from 'react'
import HeaderPagesSection from '../sections/HeaderPagesSection'
import Header from '../components/header/Header'
import RegisterNowSection from '../sections/RegisterNowSection'
import UnlimitedClassesSection from '../sections/UnlimitedClassesSection'
import FooterBanner from '../sections/FooterBanner'
import Footer from '../components/Footer'
import TimeAbleSection from '../sections/TimeAbleSection'

function ClassesPage() {
  return (
    <div>
        <Header/>
        <HeaderPagesSection title='Classes'/>
        <RegisterNowSection/>
        <UnlimitedClassesSection/>
        <TimeAbleSection />
        <br />
        <br />
        <FooterBanner/>
        <Footer />
    </div>
  )
}

export default ClassesPage