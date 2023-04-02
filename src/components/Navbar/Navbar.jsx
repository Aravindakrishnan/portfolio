import { useState } from "react"
import "./Navbar.css"
export default function Navbar() {

    const [toggle, setToggle] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar__header">
                <h3 className="navbar__title">Aravinda~krishnan</h3>
            </div>
            <ul className="navbar__nav">
                <div className="nav__division">
                    <li className="nav__item"><a href="#" className="nav__link">Projects</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Research</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Blogs</a></li>
                </div>
                <div onClick={() => { setToggle(!toggle) }} className={"icon__btn"}><i class="fa-solid fa-bars"></i> </div>
            </ul>
        </nav >
    )
}