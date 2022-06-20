import styles from "./index.module.css";
import classnames from "classnames";

const data = [
  {
    title: "WIREFRAME",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem id sunt odit alias, error ducimus repellat, reiciendis ea provident voluptatum, explicabo voluptas voluptate corrupti quia veniam sapiente natus mollitia est.",
  },

  {
    title: "DESIGN",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem id sunt odit alias, error ducimus repellat, reiciendis ea provident voluptatum, explicabo voluptas voluptate corrupti quia veniam sapiente natus mollitia est.",
  },

  {
    title: "DEVELOP",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem id sunt odit alias, error ducimus repellat, reiciendis ea provident voluptatum, explicabo voluptas voluptate corrupti quia veniam sapiente natus mollitia est.",
  },

  {
    title: "BUG TEST",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem id sunt odit alias, error ducimus repellat, reiciendis ea provident voluptatum, explicabo voluptas voluptate corrupti quia veniam sapiente natus mollitia est.",
  },

  {
    title: "LAUNCH",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem id sunt odit alias, error ducimus repellat, reiciendis ea provident voluptatum, explicabo voluptas voluptate corrupti quia veniam sapiente natus mollitia est.",
  },
];

export default function WorkProcess() {
  return (
    <section className="section-content">
      <div style={{ width: "100vw" }}>
        <div
          className={styles["work-header"]}
          id="work-process"
          style={{ paddingTop: "5rem" }}
        >
          <h1 className={classnames("font-bold", styles["work-title"])}>
            WORK PROCESS
          </h1>
        </div>

        <section className="container" style={{ marginTop: "7rem" }}>
          <CustomSlider data={data} vertical={false} slideToShow={3}>
            {data.map(({ desc, title }, idx) => {
              return (
                <section key={idx} className="pr-2">
                  <h2 className={"font-bold"}>
                    {idx + 1 < 9 ? `0${idx + 1}` : idx + 1}
                  </h2>
                  <h6 className="font-bold my-4">{title}</h6>
                  <p className="text-secondary">{desc}</p>
                </section>
              );
            })}
          </CustomSlider>
        </section>
      </div>
    </section>
  );
}
