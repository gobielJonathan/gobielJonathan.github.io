import styles from "./index.module.css";
import classnames from "classnames";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="section-content">
      <div
        className={styles["port-header"]}
        id="port"
        style={{ paddingTop: "5rem" }}
      >
        <h1 className={classnames("font-bold", styles["port-title"])}>
          PORTOLIO
        </h1>
      </div>

      <section
        className={classnames("container", styles["port-content"])}
        style={{ marginTop: "7rem" }}
      >
        <div
          className="position-relative w-100"
          style={{ gridColumn: "span 2" }}
        >
          <Image
            src={"/assets/images/crowde.webp"}
            layout="fill"
            objectFit="contain"
          />

          <div className={styles["port-desc"]}>
            <div className="w-100 h-100 d-flex justify-content-center px-3 flex-column">
              <h5 className="font-bold">Crowde</h5>
              <p>Sebuah sistem yang mengatur jadwal, dan tempat survey.</p>
              <div className="border-0 mb-2">
                <span class="badge badge-pill bg-primary">ReactJs</span>
              </div>
              <a className="btn bg-primary text-white" target="_blank" href="https://agent.crowde.co/auth/login" role="button">I want to see...</a>

            </div>
          </div>

        </div>
        <div className="position-relative w-100">
          <Image
            src={"/assets/images/cubes.webp"}
            layout="fill"
            objectFit="contain"
          />
          <div className={styles["port-desc"]}>
            <div className="w-100 h-100 d-flex justify-content-center px-3 flex-column">
              <h5 className="font-bold">Cubes</h5>
              <p>Sebuah sistem yang bergerak di bidang pelatihan accounting management.</p>
              <div className="border-0 mb-2">
                <span class="badge badge-pill bg-primary">ReactJs</span>
              </div>
              <a className="btn bg-primary text-white" target="_blank" href="https://tangerangsport.id/" role="button">I want to see...</a>
            </div>
          </div>
        </div>

        <div className="position-relative w-100">
          <Image
            src={"/assets/images/firelogic.webp"}
            layout="fill"
            objectFit="contain"
          />
          <div className={styles["port-desc"]}>
            <div className="w-100 h-100 d-flex justify-content-center px-3 flex-column">
              <h5 className="font-bold">Firelogic</h5>
              <div className="border-0 mb-2">
                <span class="badge badge-pill bg-primary">Flutter</span>
              </div>
              <p>Sebuah sistem yang mendeteksi sebuah event fire alarm.</p>
            </div>
          </div>
        </div>

        <div className="position-relative w-100">
          <Image
            src={"/assets/images/kemnaker.webp"}
            layout="fill"
            objectFit="contain"
          />
          <div className={styles["port-desc"]}>
            <div className="w-100 h-100 d-flex justify-content-center px-3 flex-column">
              <h5 className="font-bold">Inaskills</h5>
              <div className="border-0 mb-2">
                <span class="badge badge-pill bg-primary mr-2">JQuery</span>
                <span class="badge badge-pill bg-primary">Blade</span>
              </div>
              <p>Sebuah sistem yang bergerak di bidang perlombaan yang digunakan oleh kementerian ketenagakerjaan.</p>
              <a className="btn bg-primary text-white" target="_blank" href="https://inaskills.kemnaker.go.id/" role="button">I want to see...</a>

            </div>
          </div>
        </div>

        <div className="position-relative w-100">
          <Image
            src={"/assets/images/kleveru.webp"}
            layout="fill"
            objectFit="contain"
          />
          <div className={styles["port-desc"]}>
            <div className="w-100 h-100 d-flex justify-content-center px-3 flex-column">
              <h5 className="font-bold">Kleveru</h5>
              <div className="border-0 mb-2">
                <span class="badge badge-pill bg-primary">NextJs</span>
              </div>
              <p>Sebuah sistem yang bergerak di bidang kecantikan.</p>
            </div>
          </div>
        </div>

        <div className="position-relative w-100">
          <Image
            src={"/assets/images/sense.webp"}
            layout="fill"
            objectFit="contain"
          />
          <div className={styles["port-desc"]}>
            <div className="w-100 h-100 d-flex justify-content-center px-3 flex-column">
              <h5 className="font-bold">Sense</h5>
              <p>Sebuah sistem yang mengatur tentang laundry.</p>
              <div className="border-0 mb-2">
                <span class="badge badge-pill bg-primary">ReactJs</span>
              </div>
              <a className="btn bg-primary text-white" target="_blank" href="http://dev.sensehospitality.id/login" role="button">I want to see...</a>

            </div>
          </div>
        </div>

        <div className="position-relative w-100">
          <Image
            src={"/assets/images/tangerangsport.webp"}
            layout="fill"
            objectFit="contain"
          />
          <div className={styles["port-desc"]}>
            <div className="w-100 h-100 d-flex justify-content-center px-3 flex-column">
              <h5 className="font-bold">Tangerangsport</h5>
              <div className="border-0 mb-2">
                <span class="badge badge-pill bg-primary">ReactJs</span>
              </div>
              <p>Sebuah toko online yang menjual macam macam tipe sepatu.</p>

              <a className="btn bg-primary text-white" target="_blank" href="https://tangerangsport.id/" role="button">I want to see...</a>
            </div>
          </div>
        </div>

      </section>
    </section>
  );
}
