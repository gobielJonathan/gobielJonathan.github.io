import styles from './index.module.css'
import classnames from 'classnames'

export default function Service() {
    return <section className={'section-content'}>
        <div className={styles['service-header']} id="service" style={{ paddingTop: "5rem" }}>
            <h1 className={classnames('font-bold', styles['service-title'])}>SERVICES</h1>
        </div>

        <div className="row mx-0 container mx-auto" style={{ marginTop: "7rem" }}>
            <div className={classnames('col-md-4 col-sm-12', styles['service-list'])} >

                <div className="w-100 h-100"
                    style={{ borderBottom: "1px solid rgba(252, 89, 106,1)" }}>

                    <i className={classnames('fa fa-trophy', styles['service-icon'])} aria-hidden="true"></i>

                    <h4 className="font-bold mt-5 mb-3">
                        BEST EVER QUALITY
                    </h4>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia culpa mollitia cupiditate? Atque optio harum in, tempora placeat possimus quis maiores asperiores magni quia. Cumque nisi nobis sed animi officiis.
                    </p>
                </div>

            </div>
            <div className={classnames('col-md-4 col-sm-12', styles['service-list'])} >

                <div className="w-100 h-100" style={{ borderBottom: "1px solid rgba(42, 157, 143,1)" }}>
                    <i className={classnames('fa fa-plane', styles['service-icon'])} aria-hidden="true"></i>

                    <h4 className="font-bold mt-5 mb-3">
                        FASTEST EVER DELIVERY
</h4>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia culpa mollitia cupiditate? Atque optio harum in, tempora placeat possimus quis maiores asperiores magni quia. Cumque nisi nobis sed animi officiis.
</p>
                </div>
            </div>
            <div className={classnames('col-md-4 col-sm-12', styles['service-list'])} >

                <div className="w-100 h-100"
                    style={{ borderBottom: "1px solid rgba(233, 196, 106,1)" }}>
                    <i className={classnames('fa fa-trophy', styles['service-icon'])} aria-hidden="true"></i>

                    <h4 className="font-bold mt-5 mb-3">
                        CULTURE BASED DESIGN
</h4>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia culpa mollitia cupiditate? Atque optio harum in, tempora placeat possimus quis maiores asperiores magni quia. Cumque nisi nobis sed animi officiis.
</p>
                </div>
            </div>
        </div>
    </section>
}