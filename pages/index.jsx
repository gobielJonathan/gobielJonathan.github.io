import Contact from "../components/contact";
import Experience from "../components/experience";
import Intro from "../components/intro";
import Portfolio from "../components/portfolio";
import Service from "../components/service";
import WorkProcess from "../components/work-process";
import Layout from "../components/layout";
import Skills from "../components/skills";
import { PageContext } from "./page.context";
import { useContext } from "react";

export default function Index() {
  const { current } = useContext(PageContext);

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
