import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageProjects from "../components/HomepageProjects";
import EnterpriseCallout from "../components/EnterpriseCallout";
import { TypeAnimation } from 'react-type-animation';

const TypewriterComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'gtihub.com',
        500, // wait 1s before replacing "Mice" with "Hamsters"
        'coinnbase.com',
        500,
        'Stop Scams with TpyoVill',
        100,
        'Stop Scams with TypoVillain.',
        15000
      ]}
      wrapper="span"
      speed={200}
      repeat={Infinity}
    />
  );
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const png = require('@site/static/img/cap.png').default
  return (
    <header className={clsx("hero hero--primary img-responsive", styles.heroBanner)}>
      <div className="container">
        <img src={png} width="64" className="img-responsive" role="img" />
        <h1 className="hero__title"><TypewriterComponent/></h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/about/intro"
          >
            Learn More
          </Link>
          <Link
            className="ms-2 button button--outline button--lg"
            to="/docs"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Cybersecurity Solutions`}
      description="Cybersecurity APIs for Certificate Transparency, Domain Monitoring, and URL Scanning"
    >
      <HomepageHeader />
      <main className="bt-1">
        <HomepageProjects />
        <EnterpriseCallout />
      </main>
    </Layout>
  );
}
