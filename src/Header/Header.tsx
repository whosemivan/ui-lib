import React, { FC, useState, useEffect, useRef } from 'react';
import "./Header.css";
import Input from "../Input/Input";

export interface HeaderProps {
    menu?: { name: string, link: string, isActive: boolean }[];
    logo?: { path?: string, altText: string, imgWidth?: string };
    isSearch?: boolean;
};

const Header: FC<HeaderProps> = ({ menu, logo, isSearch, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='header' {...props}>
            <div className="header__wrapper">
                <div className='header__top-panel'>
                    {
                        logo && (
                            <a className="logo">
                                {
                                    logo.path ? (<img src={logo.path} alt={logo.altText} width={logo.imgWidth} />) : <p className='logo__text'>{logo.altText}</p>
                                }
                            </a>
                        )
                    }

                    {
                        menu && (

                            <button onClick={() => setIsOpen(!isOpen)} className={isOpen ? "header__ham-box header__ham-box--open" : "header__ham-box"}>
                                <span className={isOpen ? "header__line-top spin" : "header__line-top"}></span>
                                <span className={isOpen ? "header__line-bottom spin" : "header__line-bottom"}></span>
                            </button>
                        )
                    }

                </div>
                {
                    menu && (
                        <>
                            <nav className={isOpen ? "nav" : "nav nav--hidden"}>
                                <ul className="nav__list">
                                    {
                                        menu.map((item, index) => {
                                            return (
                                                <li key={index} className="nav__item">
                                                    <a className={item.isActive ? "nav__link nav__link--active" : "nav__link"} href={item.isActive ? item.link : "#"} >{item.name}</a>
                                                </li>
                                            );
                                        })
                                    }
                                    {
                                        isSearch && (
                                            <li className='nav__item nav__item--search'>
                                                <Input placeholder='Search...' />
                                            </li>
                                        )
                                    }
                                </ul>
                            </nav>
                        </>
                    )
                }
            </div>
        </header>
    );
};

export default Header;