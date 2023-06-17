import React from 'react';
import clsx from 'clsx';
import styles from "./HomepageProjects.module.css";
import Link from '@docusaurus/Link';

const ProjectsList = [
  {
    title: 'Certificate Transparency',
    png: require('@site/static/img/log.png').default,
    description: (
      <>
        Closely audit the Certificate Transparency Logs with <a href='/'>certificate.stream</a> — An easy-to-use API for extracting cert information.
        <Link to='/docs/introduction-1' className="mt-5 d-block button button--outline button--primary button--md" style={{cursor: "pointer"}}>
          Read more
        </Link>
      </>
    ),
  },
  {
    title: 'Domain Monitoring',
    png: require('@site/static/img/harpoon.png').default,
    description: (
      <>
      Stay on top of domain squatting with <a href='/'>harpoon.domains</a> — A notification-based API for domain monitoring workflows.
      <Link to='/docs/introduction-2' className="mt-5 d-block button button--outline button--primary button--md" style={{cursor: "pointer"}}>
        Read more
      </Link>
      </>
    ),
  },
  {
    title: 'Webpage Scraping',
    png: require('@site/static/img/swordfish.png').default,
    description: (
      <>
      Instantly scrape any suspicious URLs with <a href='/'>swordphish.io</a> — A web scraper with phish detection and AI search capabilities.
      <Link to='/docs/introduction-3' className="mt-5 d-block button button--outline button--primary button--md" style={{cursor: "pointer"}}>
        Read more
      </Link>
      </>
    ),
  }
];

function Project({png, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={png} width="64" className="img-responsive" role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageProjects() {
  return (
    <section className={styles.features}>
      <div className="container mt-5">
        <div className="row">
          {ProjectsList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
