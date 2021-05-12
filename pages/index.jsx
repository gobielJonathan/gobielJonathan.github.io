import Contact from '../components/contact'
import Experience from '../components/experience'
import Intro from '../components/intro'
import Portfolio from '../components/portfolio'
import Service from '../components/service'
import WorkProcess from '../components/work-process'
import Layout from '../components/layout'

export default function Index() {
  return (
    <Layout title="My Profile">
      <Intro />
      <Service />
      <Portfolio />
      <WorkProcess />
      <Experience />
      <Contact />
    </Layout>
  )
}
