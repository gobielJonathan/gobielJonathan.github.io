import styles from './index.module.css'
import classnames from 'classnames'

export default function WorkProcess() {
    return <section className="section-content">
        <div className={styles['work-header']} id="work-process" style={{paddingTop : "5rem"}}>
            <h1 className={classnames('font-bold', styles['work-title'])}>WORK PROCESS</h1>
        </div>

        <section className="container" style={{display : 'grid', gridTemplateColumns : '1fr 1fr 1fr', gap : "1rem", marginTop : "7rem"}}>
            
            <section>
                <h2 className={'font-bold'}>01</h2>
                <h6 className="font-bold my-4">WIREFRAME</h6>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequuntur, maiores explicabo ea, nemo odit deleniti mollitia quo voluptatum, eius quos dolor tempore inventore ipsum magnam similique. Accusantium, deserunt est!</p>
            </section>

            <section>
                <h2 className={'font-bold'}>02</h2>
                <h6 className="font-bold my-4">DESIGN</h6>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequuntur, maiores explicabo ea, nemo odit deleniti mollitia quo voluptatum, eius quos dolor tempore inventore ipsum magnam similique. Accusantium, deserunt est!</p>
            </section>

            <section>
                <h2 className={'font-bold'}>03</h2>
                <h6 className="font-bold my-4">DEVELOP</h6>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequuntur, maiores explicabo ea, nemo odit deleniti mollitia quo voluptatum, eius quos dolor tempore inventore ipsum magnam similique. Accusantium, deserunt est!</p>
            </section>

            <section>
                <h2 className={'font-bold'}>04</h2>
                <h6 className="font-bold my-4">BUG TEST</h6>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequuntur, maiores explicabo ea, nemo odit deleniti mollitia quo voluptatum, eius quos dolor tempore inventore ipsum magnam similique. Accusantium, deserunt est!</p>
            </section>

            <section>
                <h2 className={'font-bold'}>05</h2>
                <h6 className="font-bold my-4">LAUNCH</h6>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequuntur, maiores explicabo ea, nemo odit deleniti mollitia quo voluptatum, eius quos dolor tempore inventore ipsum magnam similique. Accusantium, deserunt est!</p>
            </section>

        
        </section>
    </section>
}