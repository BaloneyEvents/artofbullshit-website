import React from "react"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <p className="highlight">&ldquo;An insane combination of speaker training and improv comedy, the Art of Bullshit sets the bar so low that failure is the baseline.&rdquo;</p>
    <p>We&rsquo;ve been away for a bit. But we&rsquo;re back! Come join us on February 19th at the Highlander Bar.</p>
    <div id="eventbrite-widget"></div>
  </Layout>
)

export default IndexPage
