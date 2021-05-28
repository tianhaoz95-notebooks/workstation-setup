import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'For Developers + Creators',
    description: (
      <>
        The setup is mainly for developers and creators.
        I will try my best to cover "gaming on Linux", but
        it will be pretty minimal since I am not really 
        a gamer.
      </>
    ),
  },
  {
    title: 'Stable',
    description: (
      <>
        For the developer stuff that can easily mess up
        the system, I will use containers as much as possilbe
        to isolate the vulnerabilities.
      </>
    ),
  },
  {
    title: 'Up to Date',
    description: (
      <>
        I will try my best to update the content here, but
        feel free to send pull requests if anything seem
        outdated.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
