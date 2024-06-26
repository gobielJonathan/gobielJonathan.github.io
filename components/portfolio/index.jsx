import styles from "./index.module.css";
import classnames from "classnames";
import Image from "next/legacy/image";
import Link from "next/link";

const data = [
  {
    image: "/assets/images/crowde.webp",
    title: "Crowde",
    desc: "Sebuah sistem yang mengatur jadwal, dan tempat survey.",
    link: "https://www.crowde.co/",
    tags: ["ReactJs", "golang"],
  },
  {
    image: "/assets/images/cubes.webp",
    title: "Cubes",
    desc: "Sebuah sistem yang bergerak di bidang pelatihan accounting management.",
    link: "https://cubes.crmsindonesia.org",
    tags: ["ReactJs", "laravel"],
  },
  {
    image: "/assets/images/firelogic.webp",
    title: "Firelogic",
    desc: "Sebuah sistem yang mendeteksi sebuah event fire alarm.",
    link: '',
    tags: ["Flutter"],
  },
  {
    image: "/assets/images/kemnaker.webp",
    title: "Inaskills",
    desc: "Sebuah sistem yang bergerak di bidang perlombaan yang digunakan oleh kementerian ketenagakerjaan.",
    link: "https://inaskills.kemnaker.go.id",
    tags: ["JQuery", "Blade"],
  },
  {
    image: "/assets/images/kleveru.webp",
    title: "Kleveru",
    desc: "Sebuah sistem yang bergerak di bidang kecantikan.",
    link: "http://kleveru.com/",
    tags: ["NextJs", "laravel"],
  },
  {
    image: "/assets/images/sense.webp",
    title: "Sense",
    desc: "Sebuah sistem yang mengatur tentang laundry.",
    link: "https://www.sensehospitality.id/",
    tags: ["ReactJs"],
  },
  {
    image: "/assets/images/tangerangsport.webp",
    title: "Tangerangsport",
    desc: "Sebuah toko online yang menjual macam macam tipe sepatu.",
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
    desc: "aplikasi kesehatan dengan fitur dan program yang lengkap untuk membantumu memulai hidup sehat.",
    link: "https://fita.co.id/",
    tags: ["NextJs", "tailwindcss"],
  },
  {
    image: "/assets/images/brc-depo.png",
    title: "Brc Depo",
    desc: "aplikasi menjual peralatan rumah",
    link: "https://brcdepo.com/",
    tags: ["NextJs", "tailwindcss", "postgresql"],
  },
  {
    image: "/assets/images/aerium.svg",
    title: "Aerium",
    desc: "aplikasi menjual peralatan rumah",
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
                      "position-relative",
                      styles["port-content-wrapper"]
                    )}
                  >
                    <Image
                      src={image}
                      layout="fill"
                      objectFit="contain"
                      priority={true}
                    />
                    <div className={styles["port-desc"]}>
                      <div className="w-100 h-100 d-flex justify-content-center px-3 flex-column">
                        <h5 className="font-bold">{title}</h5>
                        <p>{desc}</p>
                        <div className="border-0 mb-2">
                          {tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="badge mr-2 badge-pill bg-primary"
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
