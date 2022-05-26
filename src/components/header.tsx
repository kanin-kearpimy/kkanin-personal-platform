import * as React from "react"
// @ts-ignore
import ProfilePicture from "../images/profile-picture.jpeg"

const skillBadges = ['javascript', 'typescript', 'php', 'python', 'nodejs', 'html/css', 'system design', 'consulting', 'communication', 'facilitation']

const socials: socialType[] = [
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/kanin-kearpimy-48a2b2165/',
        css: 'bg-[#0072b1]'
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/home',
        css: 'bg-[#00acee]'
    },
    {
        name: 'Email',
        link: 'mailto:kanin.kearpimy@gmail.com',
        css: 'bg-[#CCCCCC]'
    }
]

type SkillBadgeProps = {
    skill: string
}

type socialType = {
    name: string
    link: string
    css: string
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
    return (
        <span className="rounded-md px-2 text-white bg-[#187498]">#{ skill }</span>
    )
}

const Header = () => {
    return (
        <header className="mx-auto p-4 md:w-3/5">
            <h5>Hi everyone, Nice to meet you!</h5>
            <span className="text-3xl md:text-7xl">Let call me James!</span>
            <h2 className="text-xl md:text-3xl">Kanin Kearpimy, Thailand</h2>
            <div className="flex flex-col md:flex-row gap-x-4 mt-8">
                <div className="md:w-1/4 flex flex-col gap-1">
                    <img className="rounded-md border-1-black" src={ProfilePicture} alt="profile-picture-james" />
                    {socials.map(social => {
                        return (
                            <a href={social.link}
                               className={`${social.css} p-2 text-center text-white rounded-md`}
                            >{social.name}</a>
                        )
                    })}
                </div>
                <div className="md:w-3/4">
                    <p className="text-lg">
                        I'm Software Engineer who passionate in building digital platform, data pipeline, and resolving social issue.
                        I spent most of time to develop web-platform with React | Vue for frontend and Python | PHP | Nodejs for backend.
                        I also interested in machine learning and AI, strong communication and presentation skills.
                        Social impact and community building are another addicted to me.
                    </p>
                    <div id="skill-badge" className="flex flex-row gap-2 flex-wrap">
                        {skillBadges.map(skill => {
                            return (
                                <SkillBadge
                                    skill={skill}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header