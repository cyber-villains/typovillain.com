import React from 'react';
import Link from '@docusaurus/Link';

export default function EnterpriseCallout() {
    return (
        <div className="container pt-10 mb-10 p-2">
            <div className="row">
                <div className="col col--8">
                    <h2>Three API's. One Production-Ready Solution.</h2>
                    <p>
                        Your organization's brand identity is one of its most important assets.<br/>
                        Protect it with the one of the most advanced Domain Monitoring tools available.
                    </p>
                    <p>
                    <Link to="/about/enterprise/harpoon-enterprise">Harpoon</Link> combines the functionality of
                         Villain's three API services into one user-friendly web application that provides powerful, transparent, 
                        and custom domain monitoring capabilities. Simply import your organization's domain names, logo, and web assets
                        and then sit back and let Harpoon monitor the internet for imposters. 
                    </p>
                    <Link
                        className="button button--primary button--md"
                        to="/about/enterprise/harpoon-enterprise"
                    >
                        Learn More
                    </Link>
                    <Link
                        className="ml-5 button button--secondary button--md"
                        to="/about/enterprise/harpoon-enterprise"
                    >
                        Schedule Demo
                    </Link>
                </div>
                <div className="col col--4 text--center">
                    <img width="196" src={require('@site/static/img/infrastructure.png').default}/>
                </div>
            </div>
        </div>
    );
}