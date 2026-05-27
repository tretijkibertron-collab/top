import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Content from './components/content/content'

function App() {
  return (
    <div className="app container py-4">
        <Header />
        <Content />
        <Footer />
</div>

  )
}

export default App
