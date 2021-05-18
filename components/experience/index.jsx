import styles from "./index.module.css";
import classnames from "classnames";
import CustomSlider from "../custom-slider";

const data = [
  {
    job: "Teaching",
    location: "Sister, Taman Surya",
    date: "2014-2015",
    desc: "",
  },

  {
    job: "Teaching Assistant",
    location: "Bina Nusantara, Kemanggisan",
    date: "2018-2019",
    desc: "",
  },

  {
    job: "Research & Developement Team",
    location: "Bina Nusantara, Kemanggisan",
    date: "2019-Now",
    desc: "",
  },

];
export default function Experience() {

  return (
    <section className="section-content">
      <div className={"container"} id="exp" style={{ paddingTop: "5rem" }}>
        <h1 className={classnames("font-bold", styles["exp-title"])}>
          WORK EXPERIENCES
        </h1>
      </div>

      <section
        className={classnames("container", styles["exp-list-container"])}
        style={{ marginTop: "4rem" }}
      >
        <CustomSlider slideToShowSmall={3} slideToShow={3} data={data}>
          {data.map(({ date, job, location, desc }, idx) => {
            return (
              <div key={idx} className="exp-list mb-5">
                <h5 className="font-bold">
                  {job} - {location}
                </h5>
                <div className="my-3">
                  <i className="text-secondary">{date}</i>
                </div>

                <p>{desc}</p>
              </div>
            );
          })}
        </CustomSlider>
      </section>
    </section>
  );
}
