import React from "react"

const Menu = props => {
    return (
        <nav className="nav">
            <ul className="menu">
                <li><a href="#home" title="Strona główna">Strona główna</a></li>
                <li><a href="#container1" title="zad1">Procesy asynchroniczne</a></li>
                <li><a href="#container2" title="zad2">Równanie kwadratowe</a></li>
                <li><a href="#container3" title="zad3">Sortowanie i formatowanie</a></li>
                <li><a href="#container4" title="zad4">Animacje</a></li>
            </ul>
        </nav>
    )
}

export default Menu
