import React from 'react'
import Header from '../components/header/Header'
import HeaderPagesSection from '../sections/HeaderPagesSection'
import MemberShipPlanSection from '../sections/MemberShipPlanSection'
import LatesBlog from '../sections/LatesBlog'
import Footer from '../components/Footer'

function BlogPage() {
  return (
    <div>
        <Header/>
        <HeaderPagesSection title='Blog'/>
        <LatesBlog/>
        <Footer />
    </div>
  )
}

export default BlogPage