import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Features from '@site/src/components/Features';
import HowToUse from '@site/src/components/HowToUse';

function HomepageHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.heroBanner}>
      <div className="container">
        <img src='img/mecha_agent_logo-300x300.webp' height={300} width={300} />
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started 🚀
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={
        `${siteConfig.title} is where you create your own AI agent chatbots, ` +
        "Give them custom knowledge and instructions, " +
        "And publish them for the world to interact and chat with."
      }>
      <HomepageHero />
      <main className="details-sections">
        <Features />
        <HowToUse />
      </main>
    </Layout>
  );
}
