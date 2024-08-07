import React from "react"
import './Menu.css'
function Menu() {



    return (
        <>

            <header className="bg-white shadow-lg h-24 hidden md:flex">
                <a href="" className=" flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
                    <a>
                        <h2 className="font-Docker-One text-3xl text-hoodaLaranja">Hooda</h2>
                    </a>
                </a>
                <nav className="header-links contents font-semibold text-base lg:text-lg">
                    <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
                        <li className="p-3 xl:p-6 active">
                            <a href="">
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="p-3 xl:p-6">
                            <a href="">
                                <span>Contato</span>
                            </a>
                        </li>
                        <li className="p-3 xl:p-6">
                            <a href="">
                                <span>Sobre Nós</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className="bg-hoodaLaranja hover:bg-amber-400 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">Login / Entrar</button>

            </header>
        </>
    )
}

export default Menu

