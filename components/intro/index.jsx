import Link from "next/link";
import styles from "./index.module.css";

export default function Intro() {
  return (
    <section className="section-content relative" id="intro">
      <div className={styles["intro-square"]}></div>
      <div className="flex flex-wrap px-4 w-screen h-screen">
        <div className="w-1/2 flex justify-center items-center flex-col z-10">
          <div className="text-left">
            <h1 className="font-bold text-2xl text-slate-900 dark:text-white ">
              Jonathan Gobiel
            </h1>
            <p className="text-gray-500 mt-2 font-semibold">
              Full Stack Developer
            </p>

            <div className="ml-auto flex gap-x-2 mt-3">
              <div className="linked-in">
                <a
                  className="text-2xl text-black dark:text-white"
                  target="_blank"
                  href="https://www.linkedin.com/in/jonathan-gobiel/"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </div>

              <div className="github">
                <a
                  className="text-2xl text-black dark:text-white"
                  target="_blank"
                  href="https://github.com/gobielJonathan/"
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            <Link href="#porto" legacyBehavior>
              <p className="mt-8 pb-2 font-bold border-b-[3px] border-b-black dark:border-b-white w-fit hover:cursor-pointer text-slate-900 dark:text-white">
                LATEST WORKS
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
