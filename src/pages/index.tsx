import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"

const Index: React.FC<PageProps<any>> = () => {
    return (
        <Layout>
            <div>
                Hello KKANIN.com
            </div>
        </Layout>
    )
}

export default Index