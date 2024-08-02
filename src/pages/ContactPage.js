import React from 'react'
import Header from '../components/header/Header'
import HeaderPagesSection from '../sections/HeaderPagesSection'
import MapSection from '../sections/MapSection'
import ContactSection from '../sections/ContactSection'
import Footer from '../components/Footer'

function ContactPage() {
  return (
    <div>
        <Header/>
        <HeaderPagesSection title='Contact'/>
        <MapSection/>
        <ContactSection/>
        <Footer />
    </div>
  )
}

export default ContactPage