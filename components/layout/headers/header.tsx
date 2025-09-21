"use client"
import Link from 'next/link';  
import NavMenu from './nav-menu';
import { useState } from 'react';
import SlideBar from './slide-bar';
import MobileMenus from './mobile-menus';
import Logo from "../../../public/assets/img/logo/logo.png";
import Image from 'next/image';

const HeaderOne = () => { 
    const [sidebarOppen, setSidebarOppen] = useState(false)
    const [searchOppen, setSearchOppen] = useState(false)
    return (
        <>
            <header>
            <div className={`header-area header-transparent header-space pt-45 pb-45`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-5 d-flex align-items-lg-center">
                            <div className="logo">
                                <Link href="/"> <Image src={Logo } alt="theme-pure" /> </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                            <div className="main-menu text-center">
                                <nav id="mobile-menu">
                                    <NavMenu />
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-7 d-flex flex-row-reverse align-items-center justify-content-xl-end">
                            <div className="bar d-none d-xl-block">
                                <button className="info-bar" onClick={() => setSidebarOppen(true)}><i className="far fa-bars"></i></button>
                            </div>
                            <div className="search d-none d-xl-block">
                                <button className={`nav-search search-trigger ${searchOppen && "open"}`}><i className="far fa-search" onClick={() => setSearchOppen(true)}></i></button>
                            </div>
                            {searchOppen && 
                                <div className={`search-wrap ${searchOppen && "d-block"}`}>
                                    <div className="search-inner">
                                        <i className={`fas fa-times search-close ${searchOppen && "open"}`} onClick={() => setSearchOppen(false)} id="search-close"></i>
                                        <div className="search-cell">
                                            <form onSubmit={(e) => e.preventDefault()}>
                                                <div className="search-field-holder">
                                                    <input type="search" className="main-search-input" placeholder="Search Your Keyword..." />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div> 
                            }                            
                            <div className="header-btn d-none d-md-block">
                                <a className="btn" href="#"><i className="far fa-key"></i> WHMCS</a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile-menu mean-container d-lg-none"> 
                                <div className="mean-bar">
                                <MobileMenus />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <SlideBar sidebarOppen={sidebarOppen} setSidebarOppen={setSidebarOppen} />
        </>
    );
};

export default HeaderOne;