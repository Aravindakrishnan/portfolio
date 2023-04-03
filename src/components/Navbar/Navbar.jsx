import { useState } from "react"
// import { BrowserRouter as Link } from 'react-router-dom';

import "./Navbar.css"
export default function Navbar() {

    const [toggle, setToggle] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar__header">
                <a className="navbar__title" href={`/`}><h3 >Aravinda~krishnan</h3></a>
            </div>
            <ul className="navbar__nav">
                <div className="nav__division">
                    <li className="nav__item"><a href={`/projects`} className="nav__link">Projects</a></li>
                    <li className="nav__item"><a href={`/research`} className="nav__link">Research</a></li>
                    <li className="nav__item"><a href={`/blogs`} className="nav__link">Blogs</a></li>
                </div>
                <div onClick={() => { setToggle(!toggle) }} className={"icon__btn"}><i className="fa-solid fa-bars"></i> </div>
            </ul>
        </nav >
    )
}