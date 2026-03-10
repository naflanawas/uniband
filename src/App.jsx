import './App.css'
import { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SimplePage from './pages/SimplePage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FeaturesPage from './pages/FeaturesPage'
import GetStartedPage from './pages/GetStartedPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

function AppRoutes() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    const observeNewElements = () => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el))
    }

    observeNewElements()

    const mutationObserver = new MutationObserver(() => {
      observeNewElements()
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [location.pathname])

  return (
    <>
      <Navbar variant={isHome ? 'dark' : 'light'} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route
          path="/privacy"
          element={
            <SimplePage
              title="Privacy policy"
              body="We keep your recordings private and only process them after you sync."
            />
          }
        />
        <Route
          path="/terms"
          element={
            <SimplePage
              title="Terms of use"
              body="A clear, student-friendly set of terms will live here."
            />
          }
        />
        <Route
          path="*"
          element={
            <SimplePage
              title="Page not found"
              body="That page does not exist yet."
            />
          }
        />
      </Routes>
      <Footer variant={isHome ? 'dark' : 'light'} />
    </>
  )
}

export default App
