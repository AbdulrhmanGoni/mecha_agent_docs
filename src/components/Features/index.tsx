import type { ReactNode } from 'react';
import Heading from '@theme/Heading';

type FeatureItem = {
  icon: string;
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    icon: '🤖',
    title: 'Agents',
    description: (
      <>
        Create and publish AI agent chatbots with unique traits and behaviors and let people online chat with them.
      </>
    ),
  },
  {
    icon: '🗃️',
    title: 'Datasets',
    description: (
      <>
        Guide your agents how to answer prompts by providing them with dataset of instructions and information.
      </>
    ),
  },
  {
    icon: '🔑',
    title: 'API Keys',
    description: (
      <>
        Create API Keys with specific permissions and use them to access your account from outside
        <strong>Mecha Agent</strong> platform via HTTP.
      </>
    ),
  },
];

function Feature({ icon, title, description }: FeatureItem) {
  return (
    <div className="card">
      <div className="text--center">
        <Heading as="h1">{icon}</Heading>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Features(): ReactNode {
  return (
    <section className="container">
      <Heading as="h1" className="text--center">Features</Heading>
      <div className="cards">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
