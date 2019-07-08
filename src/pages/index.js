import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={['gatsby', 'ecommerce', 'react', 'expressionengine', 'wordpress', 'hamilton', 'niagara', 'web design']} />
        <main className="page-content" aria-label="Content">
            <div className="home">
                <section className="intro">
                    <div className="intro_Block">
                        <p className="intro_Block_Para">
                            Hi there <span className="emoji" aria-label="waving hand emoji" role="img">👋</span>
                        </p>

                        <p className="intro_Block_Para">
                            I'm Joshua Hanson - I work with the team <a href="https://hifyreretail.com/" rel="noopener noreferrer" target="_blank">@Hifyre</a> building
                            eCommerce and web products for the cannabis industry
                        </p>
                        <p className="intro_Block_Para">
                            Previously I've worked for <a href="http://formandaffect.com" rel="noopener noreferrer" target="_blank">@Form &amp; Affect</a>, 
                            <a href="http://ncinnovation.ca" target="_blank" rel="noopener noreferrer">@Niagara College</a>,
                            and <a href="http://www.northern.co/" target="_blank" rel="noopener noreferrer">@Northern Commerce</a>.
                        </p>

                        <p>Things I’m currently learning/interested in: </p>

                        <ul>
                            <li>CSS Grid</li>
                            <li>SVG Animations</li>
                            <li>Fullstack Advanced React and GraphQl course <a href="https://advancedreact.com"> <small> (https://advancedreact.com/)</small></a> </li>
                        </ul>

                        <br/>

                        <p>Projects I’m proud of: </p>
                        <ul>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://artintheopen.ca">
                                    https://artintheopen.ca
                                </a> <small> (React PWA)</small>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://theunleashed.ca">
                                    https://theunleashed.ca
                                </a> <small> (Gatsby)</small>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://kooybros.com">
                                    https://kooybros.com
                                </a>  <small> (Magento 2)</small>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="http://www.cbc.ca/olympics/vr">
                                    http://www.cbc.ca/olympics/vr
                                </a> <small> (ExpressionEngine)</small>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://ravinevineyard.com">
                                    https://ravinevineyard.com
                                </a> <small> (ExpressionEngine & Ecommerce)</small>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://ontariocraftwineries.ca">
                                    https://ontariocraftwineries.ca
                                </a> <small> (First WordPress site from scratch while in school)</small>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="http://heartofniagara.ca">
                                    http://heartofniagara.ca
                                </a> <small> (My first client project from 2015)</small>
                            </li>
                        </ul>

                    </div>
                </section>
            </div>
        </main>
    </Layout>
)

export default IndexPage
