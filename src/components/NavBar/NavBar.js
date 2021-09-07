<<<<<<< HEAD
import React from 'react';
import {Link} from 'react-router-dom';
import "./NavBar.scss"

//COMPONENTS
import CartWidget from "./../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <header>
            <nav className="nav">
                <div className="nav__head">
                    <div className="nav__head__logo">
                        {/* <img src="" alt="LOGO"/> */}
                        <Link to = '/'>Vinyl Record Store</Link>
                    </div>
                    <form className="nav__head__srchBar">
                        <input type="seach" placeholder="Que andas buscando"/>
                        <div className="nav__head__srchBar__btn">
                        <button type="submit">Buscar</button>
                        </div>
                    </form>
                </div>
                <div className="nav__menu">
                    <ul className="nav__menu__main">
                        <li className="nav__menu__main__li"><Link to = '/' className="nav__menu__main__li--borde">Inicio</Link></li>
                        <li className="nav__menu__main__li nav__menu__main__li--subDisp"><Link to = '/'>Vinilos</Link>
                            <ul className="nav__menu__main__submenu">
                                <li><Link to = '/category/Rock'>Rock/Pop</Link></li>
                                <li><Link to = '/category/Nacional'>Nacional</Link></li>
                                <li><Link to = '/category/Jazz'>Jazz</Link></li>                            
                            </ul>
                        </li>
                        <li className="nav__menu__main__li"><a href="..">Boxsets</a></li>
                        <li className="nav__menu__main__li"><a href="..">Mi cuenta</a></li>                        
                    </ul>
                    <CartWidget />
                </div>            
            </nav>
        </header>
    )
}

export default NavBar;
=======
import React from 'react';
import {Link} from 'react-router-dom';
import "./NavBar.scss"

//COMPONENTS
import CartWidget from "./../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <header>
            <nav className="nav">
                <div className="nav__head">
                    <div className="nav__head__logo">
                        {/* <img src="" alt="LOGO"/> */}
                        <Link to = '/'>Vinyl Record Store</Link>
                    </div>
                    <form className="nav__head__srchBar">
                        <input type="seach" placeholder="Que andas buscando"/>
                        <div className="nav__head__srchBar__btn">
                        <button type="submit">Buscar</button>
                        </div>
                    </form>
                </div>
                <div className="nav__menu">
                    <ul className="nav__menu__main">
                        <li className="nav__menu__main__li"><Link to = '/' className="nav__menu__main__li--borde">Inicio</Link></li>
                        <li className="nav__menu__main__li nav__menu__main__li--subDisp"><Link to = '/'>Vinilos</Link>
                            <ul className="nav__menu__main__submenu">
                                <li><Link to = '/category/Rock'>Rock/Pop</Link></li>
                                <li><Link to = '/category/Nacional'>Nacional</Link></li>
                                <li><Link to = '/category/Jazz'>Jazz</Link></li>                            
                            </ul>
                        </li>
                        <li className="nav__menu__main__li"><a href="..">Boxsets</a></li>
                        <li className="nav__menu__main__li"><a href="..">Mi cuenta</a></li>                        
                    </ul>
                    <CartWidget />
                </div>            
            </nav>
        </header>
    )
}

export default NavBar;
>>>>>>> c56e865766192ede4de5dcd15a5176cbcfb8c715
