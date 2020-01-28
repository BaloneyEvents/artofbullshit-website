import React from "react"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <p className="highlight">&ldquo;An insane combination of speaker training and improv comedy, the Art of Bullshit sets the bar so low that failure is the baseline.&rdquo;</p>
    <p>We&lsquo;ve been away for a bit. But we&lsquo;re back! Come join us on February 19th at the Highlander Bar.</p>
  </Layout>
)

export default IndexPage
