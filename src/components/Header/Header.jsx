import "./Header.css";
export default function Header() {
    return (
        <header className="header">
            <div className="header__main">
                <div className="header__top">
                    <span className="header__icon"><span className="heart">❤️</span></span>
                </div>
                <div className="header__body">
                    <h2 className="header__title">Developer</h2>
                </div>
                <div className="header__footer">
                    <p className="header__desc">Transforming lines of code into something tangible that people can interact with is what fuels my passion for development.</p>
                </div>
            </div>
        </header>
    )
}

