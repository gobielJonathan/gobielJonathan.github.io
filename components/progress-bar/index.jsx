import styles from './index.module.scss'

export default function ProgressBar({ value }) {
    return <div className={styles['progress']}>
        <div className={styles['progress-bar']} style={{ width  : `${value}%`}}>

        </div>
    </div>
}