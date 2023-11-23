import './header.css'
import React from "react";

function header({togleSidebar}){
    return (
        <>
            <section className='header-container'>
                <div className="content-left"> 
                    <button className='button-close-sidebar' onClick={togleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M18,5H1c-.55,0-1-.45-1-1s.45-1,1-1H18c.55,0,1,.45,1,1s-.45,1-1,1Zm1,15c0-.55-.45-1-1-1H1c-.55,0-1,.45-1,1s.45,1,1,1H18c.55,0,1-.45,1-1Zm5-8c0-.55-.45-1-1-1H6c-.55,0-1,.45-1,1s.45,1,1,1H23c.55,0,1-.45,1-1Z"/></svg>

                    </button>
                </div>
                <div className="content-right">
                    <div className="options-icons">
                        <div className="icon-help">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                            <path d="M256 80a176 176 0 10176 176A176 176 0 00256 80z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
                            <path d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="28"/>
                            <circle cx="250" cy="348" r="20"/>
                        </svg>

                        </div>
                        <div className="icon-notification">
                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                <path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                            </svg>
                        </div>
                    </div>
                    <div className="separator-content">
                        <span className="separator"></span>
                    </div>
                    <div className="user-info">
                        <div className="info-img">
                            <div className="img-user">
                                <img src="https://lh3.googleusercontent.com/-d0_mauFqK_Y/AAAAAAAAAAI/AAAAAAAAAAA/AML38-vw3b-2kTUv3uaLo-KiD256a1ltmg/photo.jpg?sz=46" alt="" />
                            </div>
                        </div>
                        <div className="info-text">
                            <p className="text-username">Christia Giovani</p>
                            <span className="text-rol">Administrador</span>
                        </div>
                    </div>
                    <div className="option-menu">
                        <div className='ico-menu'>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><circle cx="12" cy="2" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="22" r="2"/></svg>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default header;