import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="GigEconomy.How"
                    meta={[
                        { name: 'description', content: 'Find out the best gig economy jobs that suit your lifestyle' },
                        { name: 'keywords', content: 'gig, economy, jobs' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Handy</h3>
                                <p>Make up to $22/hour/job as a cleaner or $45/hour/job as a handyman</p>
                            </header>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Airbnb</h3>
                                <p>Make up to 5000$ per Month</p>
                            </header>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Glovo</h3>
                                <p>Make up to 10€/h with flexible hours</p>
                            </header>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Uber Eats</h3>
                                <p>Make up to 2000$ per Month</p>
                            </header>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>And many others!</h2>
                            </header>
                            <p>To access the full list and receive updates about the jobs sign up to our mailing list</p>
                            <ul className="actions">
                                <li><a href="https://tiagomartinho2.typeform.com/to/EwQ1CR" className="button">Get Started</a></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
