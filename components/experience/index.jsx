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
        <h6>Software Laboratory Center: </h6>
        <ul>
          <li>Manage Existing Web Application and Mobile Development </li>
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
          <li>
            Research about New Technology around Web Development, and Mobile
            Development
          </li>
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
        <ul>
          <li>Manage Existing Web Application </li>
        </ul>
        <h6>Tech of Web Application:</h6>
        <ul>
          <li>ReactJS</li>
          <li>NodeJs</li>
        </ul>
      </code>
    ),
  },
];
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
