import React from 'react'
import Header from '../components/header/Header'
import HeaderPagesSection from '../sections/HeaderPagesSection'
import GallerySection from '../sections/GallerySection'
import Footer from '../components/Footer'

function GalleryPage() {
  return (
    <div>
        <Header/>
        <HeaderPagesSection title='Gallery'/>
        <GallerySection/>
        <Footer />
    </div>
  )
}

export default GalleryPage