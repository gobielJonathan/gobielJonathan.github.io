import styles from './index.module.css'
import classnames from 'classnames'

export default function WorkProcess() {
    return <section className="section-content">
        <div className={styles['work-header']} id="work-process" style={{paddingTop : "5rem"}}>
            <h1 className={classnames('font-bold', styles['work-title'])}>WORK PROCESS</h1>
        </div>
    </section>
}