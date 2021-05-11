import { useEffect } from "react";
import styles from "./index.module.css";

const PAGES = ["intro", "service", "port", "work-process", "exp"];
export default function Dot() {
  let active = 0;

  useEffect(() => {
    window.onmousewheel = function (event) {
      //scroll down
      if (event.deltaY == 100) ++active;
      else --active;
      if (active > PAGES.length - 1) active = PAGES.length - 1;
      if (active < 0) active = 0;
      this.window.location.hash = PAGES[active];
    };
    return () => {};
  }, []);
  return (
    <section className={styles["dot-controller"]}>
      {PAGES.map((id, idx) => {
        return (
          <div
            key={idx}
            className={styles["dot"]}
            onClick={() => {
              window.location.hash = id;
            }}
          ></div>
        );
      })}
    </section>
  );
}
