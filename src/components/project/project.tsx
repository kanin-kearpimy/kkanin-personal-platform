import * as React from 'react'
import {useEffect, useState} from "react";

// @ts-ignore
import HackTHLogo from '../../images/project/hackTH.png'
// @ts-ignore
import BeachHackLogo from '../../images/project/beach-hack-logo.png'
// @ts-ignore
import TUSAALogo from '../../images/project/tusaa-logo.png'

type projectDataType = {
    name: string
    image: string
    tags: string[]
    link: string
}

type projectType = {
    topic: string
    data: projectDataType[]
}

const projects: projectType[] = [
    {
        topic: 'Technical',
        data: [
            {
                name: 'Beach Hack Platform',
                image: BeachHackLogo,
                tags: ['vercel', 'nuxt', 'vuejs'],
                link: 'https://beachhack.hackathonthailand.com/'
            },
            {
                name: 'TUSAA Platform',
                image: TUSAALogo,
                tags: ['vercel', 'nuxt', 'vuejs'],
                link: 'https://www.tusaa.org/'
            },
            {
                name: 'Web Development for None-Technical People',
                image: 'https://miro.medium.com/max/1400/1*JMPm-62al5Mf7k9gPRb9bw.jpeg',
                tags: ['instructor', 'career change', 'web development'],
                link: 'https://medium.com/@kaninkearpimy/short-course-web-development-for-none-technical-people-b1a3131002eb'
            },
            // {
            //     name: 'Young Good governance',
            //     image: '',
            //     tags: ['php', 'laravel', 'vue', 'Amazon RDS'],
            //     link: ''
            // },
        ]
    },
    {
        topic: 'Social Impact',
        data: [
            {
                name: 'Hackathon Thailand',
                image: HackTHLogo,
                tags: ['social-impact', 'incubator', 'technology'],
                link: 'https://hackathonthailand.com/'
            }
        ]
    },
    {
        topic: 'Blog',
        data: [
            {
                name: 'Microfrontend — Build simple e-commerce with Piral Framework',
                image: 'https://miro.medium.com/max/1400/1*gsPqu9gvhYVSSujaeRBdyw.png',
                tags: ['microfrontend'],
                link: 'https://medium.com/@kaninkearpimy/microfrontend-build-simple-e-commerce-with-piral-framework-3fb111437cf0'
            }
        ]
    }
]

const Project = () => {

    const [project, setProject] = useState<projectDataType[]>(projects[0].data)
    const [topic, setTopic] = useState<string>('ALL')

    useEffect(() => {
        projectSelectHandler('ALL')
    }, [])

    function projectSelectHandler(topic: string) {
        let item: projectDataType[] = []
        switch (topic) {
            case 'ALL':
                for (const itemData of projects) {
                    item.push(...itemData.data)
                }
                setProject(item)
            break
            default:
                let filterProject = projects.filter(item => item.topic === topic)
                let popItem = filterProject[0]
                let data = popItem.data
                setProject(data)
            break
        }
        setTopic(topic)
    }

    return (
        <div className="flex flex-col w-3/4 mx-auto mt-2 mb-4 ">
            <div className="flex flex-col md:flex-row gap-8 justify-center">
                <span
                    onClick={() => projectSelectHandler('ALL')}
                    className={ topic === 'ALL' ? "bg-[#CCCCCC] p-4 cursor-pointer" : "p-4 hover:bg-[#CCCCCC] cursor-pointer" }

                >ALL</span>
                { projects.map(project => {
                    return (
                        <span
                            onClick={() => projectSelectHandler(project.topic)}
                            className={ topic === project.topic ? "bg-[#CCCCCC] p-4 cursor-pointer" : "p-4 hover:bg-[#CCCCCC] cursor-pointer" }>{ project.topic }</span>
                    )
                }) }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                {project.map(projectItem => {
                    return (
                        <div className="flex flex-col bg-white p-2 rounded-md shadow-md">
                            <h5 className="min-h-[70px] p-2">{projectItem.name}</h5>
                            <img className="h-[120px]" src={projectItem.image} />
                            <a
                                href={projectItem.link}
                                className="w-[80px] text-center rounded-md py-1 px-2 border border-[#EB5353]"
                            >Go</a>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Project