import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectsOngoing from './pages/ProjectsOngoing'
import ProjectsUpcoming from './pages/ProjectsUpcoming'
import ProjectsCompleted from './pages/ProjectsCompleted'
import ProjectDetail from './pages/ProjectDetail'
import Locations from './pages/Locations'
import Journal from './pages/Journal'
import JournalArticle from './pages/JournalArticle'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const [ready, setReady] = useState(false)
  const location = useLocation()

  return (
    <>
      {!ready && <Preloader onDone={() => setReady(true)} />}
      <ScrollToTop />
      {ready && <Navbar />}
      <main key={location.pathname} className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ongoing" element={<ProjectsOngoing />} />
          <Route path="/projects/upcoming" element={<ProjectsUpcoming />} />
          <Route path="/projects/completed" element={<ProjectsCompleted />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalArticle />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {ready && <Footer />}
    </>
  )
}