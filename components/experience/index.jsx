import styles from "./index.module.css";
import classnames from "classnames";

const data = [
  {
    job: "Teaching Assistant",
    location: "Bina Nusantara, Kemanggisan",
    date: "2018-2019",
    desc: (
      <code>
        <h6>Software Laboratory Center:</h6>
        <ul>
          <li> Progressive tests (projects) for assistant</li>
          (Game, Analysis, Web, Network, Mobile)
          <li>
            Practicum teaching (Algorithm, Database, Multimedia, Security, Web)
          </li>
          <li> Answer marking</li>
        </ul>
      </code>
    ),
  },

  {
    job: "Research & Developement Team",
    location: "Bina Nusantara, Kemanggisan",
    date: "2019-2021",
    desc: (
      <code>
        <h6>Research & Developement Team at Bina Nusantara: </h6>
        <ul>
          <li>Manage existing web application and mobile development</li>
          <li>Refactor hiring web app from jQuery template into Nextjs</li>
          <li>Refactor teaching assistant web app from asp.net into Nextjs</li>
          <li>Mentoring teaching assistant in Research Development Phase</li>
        </ul>
        <h6>Tech of Web Application:</h6>
        <ul>
          <li>C# Web API </li>
          <li>ReactJS </li>
          <li>Angular </li>
          <li>Laravel </li>
          <li>IIS </li>
          <li>SQL Server </li>
        </ul>

        <h6>Tech of Mobile Development: </h6>
        <ul>
          <li>Java </li>
          <li>Flutter</li>
        </ul>
      </code>
    ),
  },
  {
    job: "Software Engineer Web Platform",
    location: "Tokopedia, Ciputra World",
    date: "2019-Now",
    desc: (
      <code>
        <h6>Software Engineer Web Platform at Tokopedia Digital: </h6>
        <p>
          I worked in the Web Platform team, planning and implementing various
          tech improvements along with the team. Some projects that I worked on:
        </p>
        <ol>
          <li>
            Contribute features into our javascript framework
            <ul>
              <li>Added automation report before release</li>
              <li>Added bundle size checker in PR before merge</li>
              <li>
                Support seamless migration from tokopeda into tiktok ecosystem
              </li>
              <li>
                Improved the build time in development by 90% to enable better
                developer experience
              </li>
            </ul>
          </li>

          <li>Migrate web tokopedia service into tiktok ecosystem</li>
        </ol>
        <h6>Tech of Web Application:</h6>
        <ul>
          <li>ReactJS</li>
          <li>NodeJs</li>
          <li>Docker</li>
          <li>Typescript</li>
          <li>Graphql</li>
        </ul>
      </code>
    ),
  },
].reverse();

export default function Experience() {
  return (
    <section className="section-content">
      <div style={{ width: "100vw" }}>
        <div className={"container"} id="exp" style={{ paddingTop: "5rem" }}>
          <h1 className={classnames("font-bold", styles["exp-title"])}>
            WORK EXPERIENCES
          </h1>
        </div>

        <section
          className={classnames("container", styles["exp-list-container"])}
          style={{ marginTop: "4rem" }}
        >
          {data.map(({ date, job, location, desc }, idx) => {
            return (
              <div key={idx} className="exp-list mb-5">
                <h4 className="font-bold">
                  {job} - {location}
                </h4>
                <div className="my-3">
                  <i className="text-secondary">{date}</i>
                </div>

                <div>{desc}</div>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
}
