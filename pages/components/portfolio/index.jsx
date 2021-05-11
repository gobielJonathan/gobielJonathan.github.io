import styles from './index.module.css'
import classnames from 'classnames'
import Image from 'next/image'

export default function Portfolio() {

    return <section className="section-content">
        <div className={styles['port-header']} id="port" style={{ paddingTop: "5rem" }}>
            <h1 className={classnames('font-bold', styles['port-title'])}>PORTOLIO</h1>
        </div>

        <section className={classnames('container', styles['port-content'])} style={{ marginTop: "7rem" }}>
            <div className="position-relative w-100" style={{ gridColumn: "span 2" }}>
                <Image src={"/assets/images/crowde.webp"} layout="fill" objectFit="contain" />
            </div>
            <div className="position-relative w-100">
                <Image src={"/assets/images/cubes.webp"} layout="fill" objectFit="contain" />
            </div>

            <div className="position-relative w-100">
                <Image src={"/assets/images/firelogic.webp"} layout="fill" objectFit="contain" />
            </div>

            <div className="position-relative w-100">
                <Image src={"/assets/images/kemnaker.webp"} layout="fill" objectFit="contain" />
            </div>

            <div className="position-relative w-100">
                <Image src={"/assets/images/kleveru.webp"} layout="fill" objectFit="contain" />
            </div>
            <div className="position-relative w-100">
                <Image src={"/assets/images/sense.webp"} layout="fill" objectFit="contain" />
            </div>
        </section>
    </section>
}