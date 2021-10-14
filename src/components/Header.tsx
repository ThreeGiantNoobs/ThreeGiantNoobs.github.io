import React from "react";

export interface NavLinkInterface {
    link: string,
    heading: string,
    active: boolean
}

const NavLink: React.FC<NavLinkInterface> = ({link, heading, active}) => {
    return (
        <li><a className={`nav-link scrollto${active ? " active" : ""}`}
               href={link}>{heading}</a></li>
    )
}

const Header: React.FC<{ title: string, navLinks: NavLinkInterface[] }> = ({title, navLinks}) => {
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">
                <a href="/" className="logo">
                    <h1 className="logo">
                        <img className="tgnlogo" src={"/android-chrome-192x192.png"}/>
                        {" " + title}
                    </h1>
                </a>

                <nav id="navbar" className="navbar">
                    <ul>
                        {navLinks.map((navLink) => {
                            return <NavLink {...navLink} />
                        })}
                        {/*todo: add dropdowns*/}
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"/>
                </nav>
            </div>
        </header>
    )
}

export default Header;