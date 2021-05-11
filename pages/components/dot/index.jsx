import styles from './index.module.css'

const PAGES = ["intro", "service", "port", "work-process"]
export default function Dot() {
    
    return <section className={styles['dot-controller']}>
        {
            PAGES.map((id, idx) => {
                return <div key={idx} className={styles['dot']} onClick={() => {
                    window.location.hash = id
                }}></div>
            })
        }
    </section>
}