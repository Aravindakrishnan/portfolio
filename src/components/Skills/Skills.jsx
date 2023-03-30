import "./Skills.css";
export default function Skills() {

    const skills = [
        {
            id: 1,
            name: "html5"
        },
        {
            id: 2,
            name: "css3-alt"
        },
        {
            id: 3,
            name: "square-js"
        },
        {
            id: 4,
            name: "react fa-spin"
        },
        {
            id: 5,
            name: "python"
        },
        {
            id: 6,
            name: "figma"
        },
        {
            id: 7,
            name: "aws"
        },
        {
            id: 8,
            name: "github"
        },
        {
            id: 9,
            name: "AZ"
        }
    ]

    return (
        <div className="container">
            <div className="skills">
                {
                    skills.map(skill => {
                        return (
                            <div key={skill.id} className="skill">
                                <div className="skill__chip">
                                    <i className={"icon fa-brands fa-" + skill.name}></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}