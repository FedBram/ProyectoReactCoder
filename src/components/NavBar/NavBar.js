import React from 'react';
import "./NavBar.scss"
import CartWidget from "./../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <header>
            <nav className="nav">
                <div className="nav__head">
                    <div className="nav__head__logo">
                        {/* <img src="" alt="LOGO"/> */}
                        <h2>Vinyl Record Store</h2>
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
                        <li className="nav__menu__main__li"><a href=".." className="nav__menu__main__li--borde">Inicio</a></li>
                        <li className="nav__menu__main__li nav__menu__main__li--subDisp"><a href="..">Vinilos</a>
                            <ul className="nav__menu__main__submenu">
                                <li><a href="..">Rock/Pop</a></li>
                                <li><a href="..">Nacional</a></li>
                                <li><a href="..">Jazz</a></li>                            
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
