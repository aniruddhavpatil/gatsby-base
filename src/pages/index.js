import React, {useEffect} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.scss"
import anime from 'animejs'



const IndexPage = () => {
  useEffect(() => {
    anime({
      targets: '.para',
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 8000
    });
    return () => {
    }
  }, [])
  return (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p class="para">Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)
  }

export default IndexPage