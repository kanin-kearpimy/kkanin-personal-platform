import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import WorkExperience from "../components/experience/work-experience";

const Index: React.FC<PageProps<any>> = () => {
    return (
        <Layout>
            <section className="flex flex-col">
                <h2>Experience & Work</h2>
                <WorkExperience />
            </section>
            <section>
                <h2>Project</h2>
            </section>
            <section>
                <h2>Connect</h2>
            </section>
        </Layout>
    )
}

export default Index