import "./Card.css";
export default function Card() {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card__header">
                    <div className="card__imgc">
                        <img src="https://i.ibb.co/w4mh9Kk/Screenshot-from-2021-10-17-10-03-57.png" alt="" className="card__img" />
                    </div>
                    <div className="card__body">
                        <h3 className="card__title">Cosmic.css</h3>
                        <p className="card__desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, nisi neque! Omnis?</p>
                    </div>
                    <div className="card__footer">
                        <div className="card__live">
                            <a className="card__btn card__githubbtn" href="#">Github</a>
                            <a className="card__btn card__livebtn" href="#">Live</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}