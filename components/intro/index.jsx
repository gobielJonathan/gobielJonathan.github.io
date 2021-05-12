import styles from './index.module.css'
import Image from 'next/image'

export default function Intro() {
    return <section className="section-content position-relative" id="intro">
        <div className={styles['intro-square']}>

        </div>
        <div className="row mx-0" style={{height : "100vh"}}>
            <div className="col-6 d-flex justify-content-center align-items-center flex-column">
                <div className="text-left">
                    <h4 className="font-bold">Jonathan Gobiel</h4>
                    <p className="text-secondary mt-2 font-semi-bold">Full Stack Developer</p>

                    <p className="mt-5 pb-2 font-bold" style={{ borderBottom: "3px solid black", width: "fit-content" }}>
                        LATEST WORKS
                    </p>
                </div>
            </div>
            <div className="col-3 d-flex align-items-center flex-column justify-content-center d-none-md">
                <div className={styles['intro-avatar']}>
                    <Image src={'/assets/images/me.jpg'} alt="me" layout="fill" objectFit="cover" className="rounded"/>
                </div>
            </div>
        </div>
    </section>
}