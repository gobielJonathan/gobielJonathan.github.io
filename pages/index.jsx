import Contact from "../components/contact";
import Experience from "../components/experience";
import Intro from "../components/intro";
import Portfolio from "../components/portfolio";
import Service from "../components/service";
import Layout from "../components/layout";
import Skills from "../components/skills";

export default function Index() {
  return (
    <Layout title="Gobiel's Profile">
      <div className="slow-motion" style={{ transitionDuration: ".8s" }}>
        <Intro />
        <Skills />
        <Service />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </Layout>
  );
}

export const getStaticProps = () => ({
  props: {},
});
