import classNames from 'classnames'
import styles from './index.module.css'

export default function Contact() {
    return <section className="section-content">
        <div style={{width : "100vw"}}>
        <div className="container d-flex flex-wrap" id="contact" style={{ paddingTop: "5rem" }}>
            <div className="col-sm-12 col-md-5 pl-0 d-flex flex-column">
                <h2 className="font-bold">CONTACT</h2>

                <div className="mt-5">
                    <div className="mb-5">
                        <h6 className="text-secondary font-bold">EMAIL</h6>
                        <p className="font-bold">jonathangobiel13@gmail.com</p>
                    </div>

                    <div className="mb-5">
                        <h6 className="text-secondary font-bold">PHONE</h6>
                        <p className="font-bold">+6282261976970</p>
                    </div>
                </div>

                <div className={classNames('mt-auto', styles['contact-social'])}>
                    <a href="https://www.facebook.com/jonathan.gobiel" target={"_blank"}>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="https://twitter.com/gobiel__" target={"_blank"}>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jonathan-gobiel-0b1208172/" target={"_blank"}>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div className="col-sm-12 col-md-7 px-0-sm pt-2-sm">

                <form action="mailto:jonathangobiel13@gmail.com"
                    encType="multipart/form-data"
                    name="EmailForm"
                    className={styles['form']}>
                    <div className="position-absolute" style={{ right: -40, top: 40 }}>
                        <div className="rounded-circle d-flex justify-content-center align-items-center" style={{
                            width: 80, height: 80, backgroundColor: "rgba(252, 89, 106,1)",
                            color: "white",
                            fontSize: "2.1rem",
                        }}>
                            <i className="fa fa-map-pin" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="p-5">
                        <h4 className="font-bold">PROJECT INQUIRY</h4>

                        <div>
                            <input className={styles['form-inquiry']} placeholder="FULL NAME" name="name" />
                        </div>
                        <div>
                            <input className={styles['form-inquiry']} placeholder="EMAIL" name="mail" />
                        </div>
                        <div>
                            <textarea className={styles['form-inquiry']} placeholder="MESSAGE" cols={5} name="comment"></textarea>
                        </div>

                        <div className="d-flex mt-3">
                            <button type="submit" className="ml-auto btn btn-sm bg-transparent font-semi-bold" style={{
                                borderRadius: 0,
                                borderBottom: "2px solid black"
                            }}>
                                SEND MESSAGE
                        </button>
                        </div>
                    </div>

                </form>


            </div>
        </div>
        </div>
    </section>
}