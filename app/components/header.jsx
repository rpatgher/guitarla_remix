import { Link } from "@remix-run/react";

import logo from '../../public/img/logo.svg'

import Nav from "./nav";

const Header = () => {
    return (
        <header className="header">
            <div className="container bar">
                <Link to="/" className="logo">
                    <img src={logo} alt="GuitarLA" className="logo" />
                </Link>
                <Nav />
            </div>
        </header>
    )
}

export default Header
