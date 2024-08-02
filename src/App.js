import React, { Component } from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ClassesPage from './pages/ClassesPage'
import BlogPage from './pages/BlogPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/classes' element={<ClassesPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
