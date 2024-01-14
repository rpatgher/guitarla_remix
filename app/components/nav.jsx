import { Link, useLocation } from "@remix-run/react";
import cartImage from '../../public/img/carrito.png';

const Nav = () => {
    const location = useLocation();
    return (
        <nav className="nav">
            <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
            <Link className={location.pathname === '/about' ? 'active' : ''} to="/about">About us</Link>
            <Link className={location.pathname === '/guitars' ? 'active' : ''} to="/guitars">Store</Link>
            <Link className={location.pathname === '/posts' ? 'active' : ''} to="/posts">Blog</Link>
            <Link className={location.pathname === '/cart' ? 'active' : ''} to="/cart">
                <img src={cartImage} alt="cart" />
            </Link>
        </nav>
    )
}

export default Nav
