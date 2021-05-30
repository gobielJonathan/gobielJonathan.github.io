import styles from "./index.module.css";
import classnames from "classnames";
import ProgressBar from "../progress-bar";

export default function Skills() {
  return (
    <section className="section-content">
      <div
        className={styles['skills-header']}
        id="skills"
        style={{ paddingTop: "5rem" , width : "100vw"}}
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
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
            <div className={styles['skills']}>
              <p className="mb-1 font-light">PHP</p>
              <ProgressBar value={80} />
            </div>

            <div className={styles['skills']}>
              <p className="mb-1 font-light">Javascript</p>
              <ProgressBar value={95} />
            </div>

            <div className={styles['skills']}>
              <p className="mb-1 font-light">HTML</p>
              <ProgressBar value={95} />
            </div>

            <div className={styles['skills']}>
              <p className="mb-1 font-light">CSS</p>
              <ProgressBar value={95} />
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
            <div className={styles['skills']}>
              <p className="mb-1 font-light">Java</p>
              <ProgressBar value={76} />
            </div>
            <div className={styles['skills']}>
              <p className="mb-1 font-light">C#</p>
              <ProgressBar value={80} />
            </div>
            <div className={styles['skills']}>
              <p className="mb-1 font-light">SQL SERVER</p>
              <ProgressBar value={70} />
            </div>
            <div className={styles['skills']}>
              <p className="mb-1 font-light">DART</p>
              <ProgressBar value={70} />
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
            <div className={styles['skills']}>
              <p className="mb-1 font-light">Flutter</p>
              <ProgressBar value={70} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
