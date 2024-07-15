import Experience from "../components/experience";
import Intro from "../components/intro";
import Portfolio from "../components/portfolio";
import Layout from "../components/layout";

export default function Index() {
  return (
    <Layout title="Gobiel's Profile">
      <div className="slow-motion" style={{ transitionDuration: ".8s" }}>
        <Intro />
        <Portfolio />
        <Experience />
      </div>
    </Layout>
  );
}
