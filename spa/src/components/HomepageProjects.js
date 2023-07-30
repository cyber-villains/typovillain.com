import React from 'react';
import clsx from 'clsx';
import styles from "./HomepageProjects.module.css";
import Link from '@docusaurus/Link';
import { BinocularsFill, FileLock2Fill, UpcScan } from "react-bootstrap-icons";

const ProjectsList = [
  {
    title: 'Certificate Transparency',
    png: <FileLock2Fill/>,
    description: (
      <>
        Closely audit the Certificate Transparency Logs with <a href='/docs/introduction-1'>certificate.stream</a> — A near-real-time API for parsing X509 cert information.
        <Link to='/docs/introduction-1' className="mt-5 d-block button button--outline button--primary button--md" style={{cursor: "pointer"}}>
          Read more
        </Link>
      </>
    ),
  },
  {
    title: 'Domain Monitoring',
    png: <BinocularsFill/>,
    description: (
      <>
      Stay on top of domain squatting with <a href='/docs/introduction-2'>harpoon.domains</a> — A notification-based API for domain monitoring workflows.
      <Link to='/docs/introduction-2' className="mt-5 d-block button button--outline button--primary button--md" style={{cursor: "pointer"}}>
        Read more
      </Link>
      </>
    ),
  },
  {
    title: 'URL Scanning',
    png: <UpcScan/>,
    description: (
      <>
      Instantly scan any suspicious URLs with <a href='/docs/introduction-3'>swordphish.io</a> — A web scraping API with phish detection and AI search capabilities.
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
      <div className="text--primary text--center">
        <span className='fs-20'>{png}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className='fw-normal'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageProjects() {
  return (
    <section className={styles.features}>
      <div className="container mt-2">
        <div className="row">
          {ProjectsList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
