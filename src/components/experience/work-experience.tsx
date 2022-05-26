import * as React from "react"
import {useState} from "react";

const experiences: experienceType[] = [
    {
        index: 0,
        title: 'Developer Consultant',
        place: 'Thoughtworks',
        duration: 'July 2021 - Present',
        description: [
            "Developed an online bike e-commerce platform by React and Java (sprint framework).",
            "Facilitated Event-Storming (domain-driven design) workshop for 30 participants of the tech-agriculture company.",
            "Involving in the working team to transform Monoliths codebase into Microservice by applying domain-driven design with NextJS and NestJS.",
            "Initiated Frontend testing by Jest and React Testing Library with an agricultural data company.",
            "Implemented Outbox pattern by recurring serverless (AMS Lambda)."
        ]
    },
    {
        index: 1,
        title: 'Full-Stack Developer (Intern)',
        place: 'APPPI',
        duration: 'May 2020 - April 2021',
        description: [
            "Developed Back-end API by PHP (Laravel) for online internet registration of Telecommunication website which gained over 100,000 users daily.",
            "Developed Frontend system, VueJS, integrated with LINE Message & LIFF API of Samsung Thailand, gained over 1,000 users daily.",
            "Developed Front-end & Back-end for privilege-checking feature of E-Commercial website, named Wemall, by utilised PHP (Laravel and Phoenix)"
        ]
    },
    {
        index: 2,
        title: 'Technical Evangelist (Student Program)',
        place: 'Microsoft Learn Student Ambassador',
        duration: 'October 2018 - March 2020',
        description: [
            "Launched Data Analytic with Power BI workshop reached 2000+ people and acquired 40 attendances. coordinated with Microsoft Speaker and designed teaching material on dataset and outline.",
            "Assisted in Hour of Code workshop, accommodated network connection and Q&A , gained 100+ attendances.",
            "Assisted in DigiGirl workshop, managed Paint 3D station, conducted Paint 3D teaching material and shared knowledge on applied 3D model in real life, 80+ attendances (Focus on women)"]
    },
    {
        index: 3,
        title: 'Full Stack Developer',
        place: 'AltoTech',
        duration: 'March 2019 - November 2019',
        description: [
            "Developed chatbot for hotel management system. Reduced 30% of time process per day. 1 hotel has already been adopted and other 3 hotel on going process.",
            "Designed ETL (Extract, Transform, Load) Process of pipeline for energy data extraction. System can automatically crawl data from website then transforming them to be proper form for data scientist.",
            "In charged of Front-End Developer for hotel management system. Re-design dashboard from scratch by using pure html, css, javascript.",
            "Initiate Azure Cloud platform [Web service with database (noSQL, CosmosDB)]"]
    }
]

type experienceType = {
    index: number
    title: string
    place: string
    duration: string
    description: string[]
}

const WorkExperience = () => {
    const [selectedExperience, setExperience] = useState<experienceType>(experiences[0])

    return (
        <div className="grid grid-cols-3 w-3/4 mx-auto mt-8 min-h-[320px]">
            <ul className="border-[#000000] border-r pr-4 mr-4">
                {experiences.map(exp => {
                    return (
                        <li className="cursor-pointer hover:underline" onClick={() => setExperience(exp)}>{ exp.title }</li>
                    )
                })}
            </ul>
            <div className="col-span-2">
                <h4>{selectedExperience.title} <b>@{selectedExperience.place}</b></h4>
                <h5>{selectedExperience.duration}</h5>
                <ul>
                    {selectedExperience.description.map(item => {
                        return (
                            <li>{item}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default WorkExperience