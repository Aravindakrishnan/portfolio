import "./Projects.css";

import Card from "./../Card/Card";
export default function Projects() {

    const projects = [
        {
            name: "Cryptobot : For Slack and Telegram",
            desc: "Cryptobot is here to help you with getting info about the cryptocurrencies 💰 It supports for telegram and slack.",
            github_url: "https://github.com/Aravindakrishnan/cryptobot-slack-telegram",
            is_hosted: true,
            hosted_url: "https://cryptobotdocs.netlify.app/",
            img_url: "https://i.ibb.co/mvbsJKY/image.png"
        },
        {
            name: "Cosmic.css : A CSS Framework",
            desc: "Cosmic is a CSS Framework ☄️. It has More Unique Component Designs eg: Bouncing Button, Neumorphism, Responsive Cards, Rainbow Spinner, etc.,",
            github_url: "https://github.com/Aravindakrishnan/Cosmic",
            is_hosted: true,
            hosted_url: "npmjs.com/package/cosmiccss",
            img_url: "https://i.ibb.co/w4mh9Kk/Screenshot-from-2021-10-17-10-03-57.png"
        }
    ]

    return (
        <div className="project-container">
            {
                projects.map((project, index) => {
                    return (<Card key={index} project={project}></Card>)
                })
            }
        </div>
    )
}