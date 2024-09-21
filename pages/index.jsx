import Experience from "../components/experience";
import Intro from "../components/intro";
import Portfolio from "../components/portfolio";
import Layout from "../components/layout";
import Skills from "../components/skills";

export default function Index() {
  return (
    <Layout title="Gobiel's Profile">
      <>
        <Intro />
        <Portfolio />
        <div className="py-12">
          <Skills />
        </div>
        <div className="py-12">
          <Experience />
        </div>
      </>
    </Layout>
  );
}
