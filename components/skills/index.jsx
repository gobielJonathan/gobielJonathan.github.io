import styles from "./index.module.css";
import classnames from "classnames";
import ProgressBar from "../progress-bar";

const SKILLS = [
  {
    catgeory: "Frontend Platform",
    items: [
      { text: "HTML", score: 95 },
      { text: "Javascript", score: 95 },
      { text: "ReactJS", score: 95 },
      { text: "Angular", score: 70 },
      { text: "Vue", score: 60 },
      { text: "Dart", score: 70 },
      { text: "Flutter", score: 70 },
    ],
  },
  {
    catgeory: "Backend Platform",
    items: [
      { text: "PHP", score: 80 },
      { text: "C#", score: 80 },
    ],
  },
  { catgeory: "Database Platform", items: [{ text: "SQL Server", value: 75 }] },
];

export default function Skills() {
  return (
    <section className="section-content">
      <div
        className={styles["skills-header"]}
        id="skills"
        style={{ paddingTop: "5rem", width: "100vw" }}
      >
        <h1 className={classnames("font-bold", styles["skills-title"])}>
          SKILLS
        </h1>
      </div>

      <section
        className={classnames("container")}
        style={{ marginTop: "8rem" }}
      >
        <div className="row">
          {SKILLS.map((d, idx) => (
            <div
              key={idx}
              className="col-sm-12 col-md-4 d-flex flex-column align-items-center"
            >
              <h5>{d.catgeory}</h5>
              {d.items.map((i, idx) => (
                <div key={idx} className={styles["skills"]}>
                  <p className="mb-1 font-light">{i.text}</p>
                  <ProgressBar value={i.score} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
