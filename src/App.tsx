import { useEffect } from 'react'
import { LanguageProvider, useLang } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import VideoTour from './components/VideoTour'
import About from './components/About'
import Products from './components/Products'
import Finishes from './components/Finishes'
import Quality from './components/Quality'
import WhyChooseUs from './components/WhyChooseUs'
import Branches from './components/Branches'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Site() {
  const { lang } = useLang()

  /* Reveal-on-scroll. Re-runs on language change because the DOM is rebuilt. */
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [lang])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[60] focus:bg-ink focus:text-cream focus:px-4 focus:py-3 focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <VideoTour />
        <About />
        <Products />
        <Finishes />
        <Quality />
        <WhyChooseUs />
        <Branches />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  )
}
