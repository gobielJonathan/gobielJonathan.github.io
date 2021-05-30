import Contact from '../components/contact'
import Experience from '../components/experience'
import Intro from '../components/intro'
import Portfolio from '../components/portfolio'
import Service from '../components/service'
import WorkProcess from '../components/work-process'
import Layout from '../components/layout'
import Skills from '../components/skills'
import { PageContext } from './page.context'
import { useContext, useEffect, useRef } from 'react'

export default function Index() {
  const { current } = useContext(PageContext)
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translateX(-${current * window.innerWidth}px)`
    }
  }, [current])

  return (
    <Layout title="Gobiel's Profile">
      <div className="d-flex slow-motion" style={{transitionDuration : ".8s"}} ref={ref}>
        <Intro />
        <Skills />
        <Service />
        <Portfolio />
        <WorkProcess />
        <Experience />
        <Contact />
      </div>
    </Layout>
  )
}
