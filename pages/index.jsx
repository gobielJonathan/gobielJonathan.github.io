import { Intro } from './components/intro'
import Portfolio from './components/portfolio'
import Service from './components/service'
import WorkProcess from './components/work-process'
import { Layout } from './layout'

export default function Home() {
  return (
    <Layout title="My Profile">
      <Intro />
      <Service />
      <Portfolio />
      <WorkProcess />
    </Layout>
  )
}
