import './sidebar.css'
import react from "../../assets/react.svg";
import { Link } from 'react-router-dom';
import { useState } from 'react'; 

function sidebar({isSidebarClose}){

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdowntwoOpen, setDropdowntwoOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
    const toggleDropdowntwo = () => {
        setDropdowntwoOpen(!isDropdowntwoOpen);
    };

    return (
        <>
            <section className='container-sidebar'>
                <div className="component-header">
                    <span className="header-logo">
                        <img src={react}/>
                    </span>
                    <div className="text-logo">
                        <span className={`text-info text-one ${isSidebarClose ? 'text-info' : 'close-text-logo'}`}>Proyecto</span>
                        <span className={`text-info text-two ${isSidebarClose ? 'text-info' : 'close-text-logo'}`}>Web</span>
                    </div>
                </div>
                <div className="content-navigation">
                    <div className="navigation-top">
                        <div className="navigation-search">
                            <div className="search-input">
                                <span className="input-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                        <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} />
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" />
                                    </svg>
                                </span>
                                <form action="" className='input-content'>
                                    <input type="text" id="search-input" placeholder="Buscar" />
                                </form>
                            </div>
                        </div>
                        <div className="navigation-menu">
                            <ul className="menu-item">
                                <div className="title-menu" >
                                    <span className={`title ${isSidebarClose ? 'title' : 'title-close'}`}>Navegacion</span>
                                    <span className={`line ${isSidebarClose ? 'line' : 'text-line'}`}></span>
                                </div>  
                                <li className="item">
                                    <Link to={"start"}className="link">
                                        <div className="link-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                                <rect x="48" y="48" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                                <rect x="288" y="48" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                                <rect x="48" y="288" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                                <rect x="288" y="288" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                            </svg>
                                        </div>
                                        <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`}>Dashboard</span>
                                    </Link>
                                </li>
                                <li className="item">
                                    <Link to={"reservations"}className="link">
                                        <div className="link-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                                <rect fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" x="48" y="80" width="416" height="384" rx="48" />
                                                <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" strokeLinecap="round" d="M128 48v32M384 48v32" />
                                                <rect fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" strokeLinecap="round" x="112" y="224" width="96" height="96" rx="13" />
                                                <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" strokeLinecap="round" d="M464 160H48" />
                                            </svg>
                                        </div>
                                        <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`}>Reserva</span>
                                    </Link>
                                </li>
                                <li className="item ">
                                    <Link to={'package'} className="link">
                                        <div className="link-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                                <rect x="64" y="176" width="384" height="256" rx="28.87" ry="28.87" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" />
                                                <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M144 80h224M112 128h288" />
                                            </svg>
                                        </div>
                                        <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`}>Paquetes</span>
                                    </Link>
                                </li>
                                {/* dropdoen */}
                                <li className="item " >
                                    <a className="link" onClick={toggleDropdown}>
                                        <div className="link-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                                <rect x="48" y="96" width="416" height="320" rx="56" ry="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                                <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="60" d="M48 192h416M128 300h48v20h-48z" />
                                            </svg>
                                        </div>
                                        <div className="text-icon-rotate" >
                                            <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`}>Pago</span>
                                            <i className={`bx bx-chevron-right dropdown-open ${isDropdownOpen? 'rotate-icon' : ''}`}></i>
                                        </div>
                                    </a>
                                    <div className={`dropdown ${isDropdownOpen ? 'active-dropdown' : ''} ${isSidebarClose ? 'dropdown ' : 'remov-margin'}`}>
                                        <ul className={`dropdown-option ${isDropdownOpen ? 'visible-dropdown' : ''}`}>
                                            <Link to={'accounts'} className="option">
                                                <div className="option-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                                        <ellipse cx="256" cy="128" rx="192" ry="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
                                                        <path d="M448 214c0 44.18-86 80-192 80S64 258.18 64 214M448 300c0 44.18-86 80-192 80S64 344.18 64 300" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
                                                        <path d="M64 127.24v257.52C64 428.52 150 464 256 464s192-35.48 192-79.24V127.24" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
                                                    </svg>
                                                </div>
                                                <span className="text-option">Cuentas</span>
                                            </Link>
                                            <Link to={'paymentstate'} className="option">
                                                <div className="option-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                                        <path d="M434.8 137.65l-149.36-68.1c-16.19-7.4-42.69-7.4-58.88 0L77.3 137.65c-17.6 8-17.6 21.09 0 29.09l148 67.5c16.89 7.7 44.69 7.7 61.58 0l148-67.5c17.52-8 17.52-21.1-.08-29.09zM160 308.52l-82.7 37.11c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.89 7.69 44.69 7.69 61.58 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-79.94-38.47" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                                        <path d="M160 204.48l-82.8 37.16c-17.6 8-17.6 21.1 0 29.1l148 67.49c16.89 7.7 44.69 7.7 61.58 0l148-67.49c17.7-8 17.7-21.1.1-29.1L352 204.48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                                    </svg>
                                                </div>
                                                <span className="text-option">Estados</span>
                                            </Link>
                                        </ul>
                                    </div>
                                </li>
                                <li className="item ">
                                    <Link to={'package'} className="link">
                                        <div className="link-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                                <path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                                <path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" />
                                            </svg>
                                        </div>
                                        <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`}>Usuarios</span>
                                    </Link>
                                </li>
                                {/* dropdoen */}
                                <li className="item " >
                                    <a className="link" onClick={toggleDropdowntwo}>
                                        <div className="link-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                                <path d="M256.05 80.65Q263.94 80 272 80c106 0 192 86 192 192s-86 192-192 192A192.09 192.09 0 0189.12 330.65" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
                                                <path d="M256 48C141.12 48 48 141.12 48 256a207.29 207.29 0 0018.09 85L256 256z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                            </svg>
                                        </div>
                                        <div className="text-icon-rotate" >
                                            <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`}>Reporte</span>
                                            <i className={`bx bx-chevron-right dropdown-open ${isDropdowntwoOpen? 'rotate-icon' : ''}`}></i>
                                        </div>
                                    </a>
                                    <div className={`dropdown ${isDropdowntwoOpen ? 'active-dropdown' : ''} ${isSidebarClose ? 'dropdown ' : 'remov-margin'}`}>
                                        <ul className={`dropdown-option ${isDropdowntwoOpen ? 'visible-dropdown' : ''}`}>
                                            <li className="option">
                                                <div className="option-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                                        <path d="M32 32v432a16 16 0 0016 16h432" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                                                        <rect x="96" y="224" width="80" height="192" rx="20" ry="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                                                        <rect x="240" y="176" width="80" height="240" rx="20" ry="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                                                        <rect x="383.64" y="112" width="80" height="304" rx="20" ry="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                                                    </svg>
                                                </div>
                                                <span className="text-option">Tablero</span>
                                            </li>
                                            <li className="option">
                                                <div className="option-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                                        <rect fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" x="48" y="80" width="416" height="384" rx="48"/>
                                                        <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" strokeLinecap="round" d="M128 48v32M384 48v32M464 160H48"/>
                                                    </svg>
                                                </div>
                                                <span className="text-option">Reservas</span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navigation-bottom" >

                        <div className="navigation-accout">
                            <ul className="account-item">
                                <div className="title-account" >
                                <span className={`title ${isSidebarClose ? 'title' : 'title-close'}`}>Cuenta</span>
                                    <span className={`line ${isSidebarClose ? 'line' : 'text-line'}`}></span>
                                </div>   
                                <li className="item">
                                    <a href="#" className="link">
                                        <div className="link-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009-12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"/>
                                            </svg>
                                        </div>
                                        <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`}>Ajustes</span>
                                    </a>
                                </li> 
                                <li className="item"> 
                                    <a href="#" className="link">
                                        <div className="link-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M320 176v-40a40 40 0 00-40-40H88a40 40 0 00-40 40v240a40 40 0 0040 40h192a40 40 0 0040-40v-40M384 176l80 80-80 80M191 256h273"/>
                                            </svg>
                                        </div>
                                        <span className={`link-text ${isSidebarClose ? 'link-text' : 'text-item-close'}`} >Cerrar secion</span>
                                    </a>
                                </li>        
                            </ul>
                        </div>
                        <div className="navigation-theme">
                            <div className="theme-state">
                                <div className={`theme-items ${isSidebarClose ? 'theme-items' : 'theme-close'}`}>
                                    <div className="sun" id="sun"></div>
                                    <div className="moon" id="moon"></div>
                                </div>
                                <div className={`btn-togle ${isSidebarClose ? 'btn-togle' : 'open-togle'}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default sidebar