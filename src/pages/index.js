import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={['gatsby', 'ecommerce', 'react', 'expressionengine', 'wordpress', 'niagara', 'web design']} />
        <main className="page-content" aria-label="Content">
            <div className="home">
                <section className="intro">
                    <div className="intro_Block">
                        <p className="intro_Block_Para">
                            Hi there <span className="emoji" role="img">👋</span>
                        </p>
                        <p className="intro_Block_Para">I'm Joshua Hanson - I work with the team <a href="http://formandaffect.com" target="_blank" rel="noopener noreferrer">@Form &amp; Affect</a> building brands, online stores, web apps, and digital gems <span className="emoji" role="img">💎</span></p>
                        <p className="intro_Block_Para">My background includes working as a UX and App Designer <a href="http://ncinnovation.ca" target="_blank" rel="noopener noreferrer">@Niagara College</a>, and an eCommerce Developer <a href="http://www.northern.co/" target="_blank" rel="noopener noreferrer">@Northern Commerce</a></p>
                    </div>
                </section>
            </div>
        </main>
    </Layout>
)

export default IndexPage
