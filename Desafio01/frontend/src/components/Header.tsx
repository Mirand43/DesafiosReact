import { NavLink } from 'react-router-dom'
import logo from '../assets/imagem/logo.png'

export default function Header() {
    return (
        <>
            <nav className="bg-gray-800 py-4 w-full fixed z-10">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <NavLink to="./">
                            <img className='w-16' src={logo} alt="Logo" />
                        </NavLink>
                    </div>
                </div>
            </nav>
            <br />
            
        </>
    )
}