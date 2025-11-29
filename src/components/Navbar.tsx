import { Link } from "react-router-dom";
import Logo from '../assets/Logo2.jpeg'


function navbar() {

    return (
        <header className=' bg-white shadow-sm border-gray-200 white:bg-gray-900 fixed w-full border-b z-50'>
            <div className='max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4'> {/*contenedor padre*/}
                <div className='flex flex-wrap items-center space-x-3 rtl:space-x-reverse'>{/*contenedor hijo para el logo*/}
                    <img
                        src={Logo}
                        alt='logo del banco'
                        className='h-15'
                    />
                    <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-black'>AgroCoop366</span>
                </div>



                {/*menu */}
                <nav className='hidden w-full md:block md:w-auto'>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-950 md:p-0 dark:text-black md:dark:hover:text-emerald-950 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Inicio</a>
                        </li>
                        <li>
                            <Link to="/producto" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-950 md:p-0 dark:text-black md:dark:hover:text-emerald-950 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Productos y Servicios</Link>
                        </li>
                        <li>
                            <Link to="/calendario" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-950 md:p-0 dark:text-black md:dark:hover:text-emerald-950 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Calendario</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-950 md:p-0 dark:text-black md:dark:hover:text-emerald-950 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Contactenos</Link>
                        </li>
                    </ul>
                </nav>

                {/*Boton */}
                {/* <div>
                    <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Iniciar sesion</button>
                    <button className='focus:outline-none text-white  hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-[#8EA82D] dark:hover:bg-green-700 dark:focus:ring-green-800'>Registrarse</button>
                </div> */}

                    <div className="gap-4 mt-4 h-10">

                        <Link
                            to="/login"
                            className="w-full py-2.5 px-5 text-sm font-semibold text-white bg-gray-500 border rounded-lg hover:bg-[#9AA589] transition"
                        >
                            Iniciar sesión
                        </Link>
                        <Link
                            to="/register"
                            className="w-full text-center py-2.5 px-5 text-sm font-semibold text-white bg-[#8EA82D] rounded-lg hover:bg-green-800 transition"
                        >
                            Registrarse
                        </Link>

                </div>
            </div>
        </header>
    )
}

export default navbar