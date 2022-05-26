import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import WorkExperience from "../components/experience/work-experience";
import Project from "../components/project/project";

const Index: React.FC<PageProps<any>> = () => {
    return (
        <Layout>
            <section className="flex flex-col mt-12">
                <h2>Experience & Work</h2>
                <WorkExperience />
            </section>
            <section className="mt-12">
                <h2>Project</h2>
                <Project />
            </section>
        </Layout>
    )
}

export default Index