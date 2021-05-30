import { useContext } from 'react'
import { PageContext } from '../../pages/page.context'
import classNames from 'classnames'

export default function ArrowPage() {
    const { current, foward, backward } = useContext(PageContext)

    return <>
        {
            current > 0 && <button className={classNames('btn btn-md hover rounded-circle bg-transparent btn-outline-0')} style={{
                position: "fixed",
                left: 40,
                bottom: 40,
                zIndex : 20
            }}
                onClick={backward}
            >
                <i className="text-black fa fa-arrow-left" style={{fontSize : "2rem"}} aria-hidden="true"></i>
            </button>
        }
        {
            current < 6 && <button className={classNames('btn btn-md hover rounded-circle bg-transparent btn-outline-0')} style={{
                position: "fixed",
                bottom: 40,
                right: 40,
                zIndex : 20

            }}
                onClick={foward}
            >
                <i className="text-black fa fa-arrow-right" style={{fontSize : "2rem"}} aria-hidden="true"></i>
            </button>
        }
    </>
}