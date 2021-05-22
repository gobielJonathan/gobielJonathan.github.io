import Contact from '../components/contact'
import Experience from '../components/experience'
import Intro from '../components/intro'
import Portfolio from '../components/portfolio'
import Service from '../components/service'
import WorkProcess from '../components/work-process'
import Layout from '../components/layout'
import Skills from '../components/skills'

export default function Index() {
  return (
    <Layout title="Gobiel's Profile">
      <Intro />
      <Skills />
      <Service />
      <Portfolio />
      <WorkProcess />
      <Experience />
      <Contact />
    </Layout>
  )
}
