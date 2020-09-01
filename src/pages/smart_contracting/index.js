import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import SyntaxHighlighter from 'react-syntax-highlighter';

const features = [
  {
    title: <>Native Python</>,
    imageUrl: 'img/smartcontracts-1.svg',
    description: (
      <>
        Develop smart contracts in your favorite Python IDE and testing suite.
      </>
    ),
  },
  {
    title: <>Get Empowerd</>,
    imageUrl: 'img/smartcontracts-2.svg',
    description: (
      <>
        Translate your ideas to the blockchain without worrying about abstract coding paradigms. 
      </>
    ),
  },
  {
    title: <>Save Time</>,
    imageUrl: 'img/smartcontracts-3.svg',
    description: (
      <>
        Spend time focusing on your product and not complex smart contract languages.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
     <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames('col col--5 col--offset-1')}>
          <h1 className="hero__title">Contracting</h1>
          <p className="hero__subtitle">Python Powered Smart Contracts</p>
              <div className={styles.buttons}>
              <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted, 
              )}
              to={useBaseUrl('https://contracting.lamden.io')}>
            Documentations
            </Link>

            &nbsp;  &nbsp;

            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted, 
              )}
              to={useBaseUrl('https://github.com/Lamden/contracting')}>
              GitHub
            </Link>
              </div>
            </div>
            <div className={classnames('col col--5')}>
              <img className={styles.heroImg} src="img/undraw_process_e90d.svg" />
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.quickstart}>
            <div className="container">
              <h2>Quickstart</h2>
                <h3>Install</h3>
                <code> pip3 install contracting</code>

                <h3>Your First Smart Contract</h3>
                <p>my_token.py</p>
                <SyntaxHighlighter language="python">
                  { 
                    '#create some state \n' +
                    'balances = Hash(default_value=0) \n' +
                    ' \n'  +
                    '#seed initial balances \n' +
                    '@construct \n' +
                    'def seed(): \n' +
                    '    balances["me"] = 1000000 \n' +
                    ' \n' +
                    '#transfer funds \n' +
                    '@export \n' +
                    'def transfer(to, from, amount): \n' +
                    '    assert balances[from] >= amount, "Insufficient Funds" \n' +
                    '    balances[to] += amount \n' +
                    '    balances[from] -= amount'
                  }
                </SyntaxHighlighter>
            </div>
          </section>
          <section className={styles.tutorials}>
            <div className="container">
              <h2>Tutorials</h2>
              <div class="row" >
                <div class="col col--4">
                  <a href="https://github.com/JeffWScott/my_token_lamden_tutorial" >
                    <img  src="img/smartcontracts-tutorial-mytoken.png" className={styles.tutorials_image}/>
                  </a>
                </div>
                <div class="col col--8" >
                  <div className={styles.tutorials_text}>
                    <h3>"My Token" Tutorial Series</h3>
                    <p>Create a token smart contract from scratch using Python's Contracting package. The simple smart contract will mint an initial supply to a user of our choice and then define a tansfer method for our users to use. To finish it off we create unit test to validate our new smart contact does exactly what we want it to do.</p>
                  </div>
                </div>
              </div>
                

                
                
            </div>
          </section>
      </main>
    </Layout>
  );
}

export default Home;
