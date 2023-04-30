import { Outlet } from 'react-router-dom'
import { Sibedar } from '../components/Sidebar'

import './Default.css'

export default function Default() {
    return (
        <div>
            <div className='layout'>

                <Sibedar />

                <div className='content'>
                    <Outlet/>
                </div>

            </div>
        </div>
    )
}