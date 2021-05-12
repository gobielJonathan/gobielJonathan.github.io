import classNames from "classnames";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

const PAGES = ["intro", "service", "port", "work-process", "exp",'contact'];

let active = 0;

export default function Dot() {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    window.onmousewheel = function (event) {
      //scroll down
      if (event.deltaY == 100) ++active;
      else --active;
      if (active > PAGES.length - 1) active = PAGES.length - 1;
      if (active < 0) active = 0;
      setActiveIdx(active)
      this.window.location.hash = PAGES[active];

    };
    return () => {
      window.onmousewheel = null
    };
  }, []);

  return (
    <section className={styles["dot-controller"]}>
      {PAGES.map((id, idx) => {
        return (
          <div
            key={idx}
            className={classNames(styles["dot"], { 
              [styles['dot-active']] : activeIdx == idx
            })}
            onClick={() => {
              window.location.hash = id;
            }}
          ></div>
        );
      })}
    </section>
  );
}
