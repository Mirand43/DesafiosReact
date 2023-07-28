import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function Default() {
    return (
        <div>
            <div className='layout'>
                <Header/>
                <div className='content'>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}