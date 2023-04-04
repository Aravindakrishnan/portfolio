import "./Card.css";
export default function Card({ project }) {


    return (
        <div className="card">
            < div className="card__header" >
                <div className="card__imgc">
                    <img src={project.img_url} alt="" className="card__img" />
                </div>
                <div className="card__body">
                    <h3 className="card__title">{project.name}</h3>
                    <p className="card__desc">{project.desc}</p>
                </div>
                <div className="card__footer">
                    <div className="card__live">
                        <a className="card__btn card__githubbtn" href={project.github_url} target="_blank">Github</a>
                        {project.is_hosted ? <a className="card__btn card__livebtn" href={project.hosted_url} target="_blank">Live</a> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}