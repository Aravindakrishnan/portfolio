import "./Skills.css";
export default function Skills() {

    const skills = ["html5", "css3-alt", "square-js", "react", "node", "python", "figma", "aws", "github"]

    return (
        <div className="container">
            <div className="skills">
                {
                    skills.map(skill => {
                        return (
                            <div key={skill} className="skill">
                                <div className="skill__chip">
                                    <i className={"icon fa-brands fa-" + skill}></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}