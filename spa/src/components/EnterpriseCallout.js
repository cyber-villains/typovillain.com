import React from 'react';
import Link from '@docusaurus/Link';

export default function EnterpriseCallout() {
    return (
        <div className="bg-dark pt-10 pb-10">
            <div className="container p-2">
                <div className="row">
                    <div className="col col--7">
                        <h2>Three API's. One Production-Ready Solution.</h2>
                        <p>
                            Your organization's brand identity is one of its most important assets.<br/>
                            Protect it with the one of the most advanced Domain Monitoring tools available.
                        </p>
                        <p>
                        <Link to="/about/enterprise/harpoon-enterprise">Harpoon</Link> combines the functionality of
                            TypoVillain's three API services into one user-friendly web application that provides powerful, transparent 
                            domain monitoring capabilities. Simply import your organization's domains, logos, and web assets
                            and Harpoon will monitor the internet for imposters. 
                        </p>
                        <Link
                            className="button button--primary button--md"
                            to="/about/enterprise/harpoon-enterprise"
                        >
                            Demo & Walkthrough
                        </Link>
                    </div>
                    <div className="col col--5 mt-2 text--center">
                        <img src={require('@site/static/img/laptop.png').default}/>
                    </div>
                </div>
            </div>
        </div>
    );
}