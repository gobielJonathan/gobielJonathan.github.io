import styles from "./index.module.css";
import classnames from "classnames";

export default function Skills() {
  return (
    <section className="section-content">
      <div
        className={styles['skills-header']}
        id="skills"
        style={{ paddingTop: "5rem" }}
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
              <progress min="0" max="100" value="70" />
            </div>

            <div className={styles['skills']}>
              <p className="mb-1 font-light">Javascript</p>
              <progress min="0" max="100" value="91" />
            </div>

            <div className={styles['skills']}>
              <p className="mb-1 font-light">HTML</p>
              <progress min="0" max="100" value="91" />
            </div>

            <div className={styles['skills']}>
              <p className="mb-1 font-light">CSS</p>
              <progress min="0" max="100" value="91" />
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
            <div className={styles['skills']}>
              <p className="mb-1 font-light">Java</p>
              <progress min="0" max="100" value="75" />
            </div>
            <div className={styles['skills']}>
              <p className="mb-1 font-light">C#</p>
              <progress min="0" max="100" value="85" />
            </div>
            <div className={styles['skills']}>
              <p className="mb-1 font-light">SQL SERVER</p>
              <progress min="0" max="100" value="70" />
            </div>
            <div className={styles['skills']}>
              <p className="mb-1 font-light">DART</p>
              <progress min="0" max="100" value="75" />
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
            <div className={styles['skills']}>
              <p className="mb-1 font-light">Flutter</p>
              <progress min="0" max="100" value="75" />
            </div>
            <div className={styles['skills']}>
              <p className="mb-1 font-light">ReactJs</p>
              <progress min="0" max="100" value="90" />
            </div>

            <div className={styles['skills']}>
              <p className="mb-1 font-light">Angular</p>
              <progress min="0" max="100" value="80" />
            </div>

            <div className={styles['skills']}>
              <p className="mb-1 font-light">VueJs</p>
              <progress min="0" max="100" value="70" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
