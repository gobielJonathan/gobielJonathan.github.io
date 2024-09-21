import Link from "next/link";
import Badge from "../badge";

const data = [
  {
    image: "/assets/images/crowde.webp",
    title: "Crowde",
    desc: "A system that manages schedules and survey locations.",
    link: "https://www.crowde.co/",
    tags: ["ReactJs", "Golang"],
  },
  {
    image: "/assets/images/cubes.webp",
    title: "Cubes",
    desc: "A system that operates in the field of accounting management training.",
    link: "https://cubes.crmsindonesia.org",
    tags: ["ReactJs", "Laravel"],
  },
  {
    image: "/assets/images/firelogic.webp",
    title: "Firelogic",
    desc: "A system that detects a fire alarm event.",
    link: "",
    tags: ["Flutter"],
  },
  {
    image: "/assets/images/kemnaker.webp",
    title: "Inaskills",
    desc: "A system that operates in the field of competitions used by the Ministry of Manpower.",
    link: "https://inaskills.kemnaker.go.id",
    tags: ["JQuery"],
  },
  {
    image: "/assets/images/kleveru.webp",
    title: "Kleveru",
    desc: "A system that operates in the field of beauty.",
    link: "http://kleveru.com/",
    tags: ["NextJs", "Laravel"],
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
    tags: ["NextJs", "Golang"],
  },
  {
    image: "/assets/images/fita.png",
    title: "Fita",
    desc: "A health application with comprehensive features and programs to help you start living a healthy life.",
    link: "https://fita.co.id/",
    tags: ["NextJs", "Tailwindcss"],
  },
  {
    image: "/assets/images/brc-depo.png",
    title: "Brc Depo",
    desc: "An application for selling household equipment.",
    link: "https://brcdepo.com/",
    tags: ["NextJs", "Tailwindcss", "Postgresql"],
  },
  {
    image: "/assets/images/aerium.svg",
    title: "Aerium",
    desc: "Residence Landing Page",
    link: "https://aerium-residences.com/",
    tags: ["NextJs", "Tailwindcss"],
  },
];

export default function Portfolio() {
  return (
    <section className="container mx-auto px-4" id="porto">
      <>
        <div id="port">
          <h1 className="font-bold text-4xl mb-16 text-slate-900 dark:text-white">
            PORTOFOLIO
          </h1>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {data.map(({ desc, image, link, tags, title }, idx) => {
            return (
              <Link key={idx} href={link} target="_blank" className="mb-3">
                <div className="flex flex-col h-full">
                  <img src={image} className="h-[200px] mb-2 object-contain" />
                  <div className="mt-auto">
                    <div className="w-full h-full flex justify-center flex-col">
                      <h5 className="font-bold text-slate-900 dark:text-white">
                        {title}
                      </h5>
                      <p className="text-slate-900 dark:text-white">{desc}</p>
                      <div className="mt-2 flex flex-wrap gap-y-2">
                        {tags.map((t, idx) => (
                          <Badge key={idx} text={t} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      </>
    </section>
  );
}
