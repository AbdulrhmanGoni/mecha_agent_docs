import { FC } from "react";
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Link from "@docusaurus/Link";

const steps = [
  {
    title: 'Create your Agent',
    description: 'Define the name, description, and other attributes of your AI agent chatbot.',
  },
  {
    title: 'Create a Dataset',
    description: 'Provide the knowledge base for your agent by creating a dataset of instructions and information.',
  },
  {
    title: 'Publish your Agent',
    description: 'Make your agent available to the world by publishing it and setting up a chat interface for it.',
  },
];

const HowToUse: FC = () => {
  return (
    <section className="container">
      <Heading as="h1" className="text--center">
        How to use our platform?
      </Heading>
      <div className='cards'>
        {steps.map(({ title, description }, i) => (
          <div key={String(i + 1)} className='card'>
            <div className={styles.stepIcon}>{i + 1}</div>
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        ))}
      </div>
      <div className={styles.startOnboardingButtonParant}>
        <Link
          className={`button button--secondary button--lg ${styles.startOnboardingButton}`}
          to="/docs/get-started/onboarding">
          Start Onboarding 🚀
        </Link>
      </div>
    </section>
  );
};

export default HowToUse;
