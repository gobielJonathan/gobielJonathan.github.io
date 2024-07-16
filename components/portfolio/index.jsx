import styles from "./index.module.css";
import classnames from "classnames";
import Image from "next/legacy/image";
import Link from "next/link";

const data = [
  {
    image: "/assets/images/crowde.webp",
    title: "Crowde",
    desc: "A system that manages schedules and survey locations.",
    link: "https://www.crowde.co/",
    tags: ["ReactJs", "golang"],
  },
  {
    image: "/assets/images/cubes.webp",
    title: "Cubes",
    desc: "A system that operates in the field of accounting management training.",
    link: "https://cubes.crmsindonesia.org",
    tags: ["ReactJs", "laravel"],
  },
  {
    image: "/assets/images/firelogic.webp",
    title: "Firelogic",
    desc: "A system that detects a fire alarm event.",
    link: '',
    tags: ["Flutter"],
  },
  {
    image: "/assets/images/kemnaker.webp",
    title: "Inaskills",
    desc: "A system that operates in the field of competitions used by the Ministry of Manpower.",
    link: "https://inaskills.kemnaker.go.id",
    tags: ["JQuery", "Blade"],
  },
  {
    image: "/assets/images/kleveru.webp",
    title: "Kleveru",
    desc: "A system that operates in the field of beauty.",
    link: "http://kleveru.com/",
    tags: ["NextJs", "laravel"],
  },
  {
    image: "/assets/images/sense.webp",
    title: "Sense",
    desc: "A system that manages laundry.",
    link: "https://www.sensehospitality.id/",
    tags: ["ReactJs"],
  },
  {
    image: "/assets/images/tangerangsport.webp",
    title: "Tangerangsport",
    desc: "An online store that sells various types of shoes.",
    link: "https://tangerangsport.id",
    tags: ["ReactJs"],
  },
  {
    image: "/assets/images/visimedia.png",
    title: "Visimedia Supplies",
    desc: "Digital Printing Supplies.",
    link: "https://visimediasupplies.id/",
    tags: ["NextJs", "golang"],
  },
  {
    image: "/assets/images/fita.png",
    title: "Fita",
    desc: "A health application with comprehensive features and programs to help you start living a healthy life.",
    link: "https://fita.co.id/",
    tags: ["NextJs", "tailwindcss"],
  },
  {
    image: "/assets/images/brc-depo.png",
    title: "Brc Depo",
    desc: "An application for selling household equipment.",
    link: "https://brcdepo.com/",
    tags: ["NextJs", "tailwindcss", "postgresql"],
  },
  {
    image: "/assets/images/aerium.svg",
    title: "Aerium",
    desc: "Residence Landing Page",
    link: "https://aerium-residences.com/",
    tags: ["NextJs", "tailwindcss"],
  },
];

export default function Portfolio() {
  return (
    <section className="section-content" id="porto">
      <div style={{ width: "100vw" }}>
        <div
          className={styles["port-header"]}
          id="port"
          style={{ paddingTop: "5rem" }}
        >
          <h1 className={classnames("font-bold", styles["port-title"])}>
            PORTOFOLIO
          </h1>
        </div>

        <section
          className={classnames("container")}
          style={{ marginTop: "8rem" }}
        >
          <div className={styles["port-container"]}>
            {data.map(({ desc, image, link, tags, title }, idx) => {
              return (
                <Link href={link} target="_blank">
                  <div
                    key={idx}
                    className={classnames(
                      styles["port-content-wrapper"],
                      "d-flex flex-column h-100"
                    )}
                  >
                    <img
                      src={image}
                      className="w-100 h-100 object-contain mb-2"
                    />
                    <div className="mt-auto">
                      <div className="w-100 h-100 d-flex justify-content-center px-3 flex-column">
                        <h5 className="font-bold text-dark">{title}</h5>
                        <p className="text-dark">{desc}</p>
                        <div className="border-0 mb-2">
                          {tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="badge mr-2 badge-pill bg-primary text-white"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
