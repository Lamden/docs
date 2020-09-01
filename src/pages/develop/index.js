import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Connect Easily</>,
    imageUrl: 'img/develop-1.svg',
    description: (
      <>
        Lamden's blockchain is a RESTFUL API which allows you to integrate into new or existing applications with ease.
      </>
    ),
  },
  {
    title: <>Linked Wallet Accounts</>,
    imageUrl: 'img/develop-2.svg',
    description: (
      <>
        Create an Account in the Lamden Wallet specific to your Application. Customize the Account to help engage your users. 
      </>
    ),
  },
  {
    title: <>The Tools you Need</>,
    imageUrl: 'img/develop-3.svg',
    description: (
      <>
        We have many tools and packages to help you integrate Lamden into your Application.
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


const tools = [
  {
    title: <>Contracting</>,
    imageUrl: 'img/tools-contracting.svg',
    description: (
      <>
        Develop Smart Contracts with ease using native Python. 
        Grab your favorite IDE to create and test robust smart contracts with advanced on-chain logic and storage options.
      </>
    ),
    link: 'https://contracting.lamden.io'
  },
  {
    title: <>Lamden</>,
    imageUrl: 'img/tools-lamden.svg',
    description: (
      <>
        Lamden is a Python package that allows you to create wallets, transactions and interact with the Lamden blockchain.  
        This package houses the masternode and delegate software for running nodes.  It's a one stop shop for all lamden tech on Python.
      </>
    ),
    link: '/docs/lamdenjs'
  },
  {
    title: <>Lamden-js</>,
    imageUrl: 'img/tools-lamdenjs.svg',
    description: (
      <>
        Lamden-js is a NodeJS package which allows you to easily create transactions and query state on the Lamden Blockchain.  
        Integreate Lamden in to your webapp using lamden-js's simple event driven API.
      </>
    ),
    link: '/docs/lamdenjs'
  },
  {
    title: <>Lamden Wallet API</>,
    imageUrl: 'img/tools-walletapi.svg',
    description: (
      <>
        Connect your app to the Lamden Wallet via a simple event driven API. 
        Once your app is connected to a user's Lamden Wallet you can sign transactions to your smart contract on their behalf. 
        Automatic transactions supercharge the user experience by getting rid of popups.
      </>
    ),
    link: '/docs/lamdenjs'
  },
  {
    title: <>Lamden Wallet Controller</>,
    imageUrl: 'img/tools-walletcontroller.svg',
    description: (
      <>
        A javascript package for connecting and communicating with the Lamden Wallet.  
        This package facilitates the Wallet connection process and streamlines the flow of communication.
      </>
    ),
    link: '/docs/lamdenjs'
  },
  {
    title: <>C# Unity Plugin</>,
    imageUrl: 'img/tools-unity.svg',
    description: (
      <>
        Download our Unity pluging in the Unity Asset store to connect the Lamden blockchain to your game. 
        The Lamden blockchain's speed and versitilty can connect your users to seemless item markets and real ownership over game objects.
      </>
    ),
    link: '/docs/lamdenjs'
  },
]

function Tools({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('row', styles.tool)}>
      <div class="col col--4">
          <Link
            className={classnames('button button--secondary button--lg', styles.getStarted, styles.tool_button)}
            to={useBaseUrl(link)}>
              <img src={imgUrl} className={styles.tool_image}/>
          </Link>
        </div>
        <div class="col col--8" >
          <div className={styles.tutorials_text}>
            <h3 className={styles.tool_heading}>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
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
            <h1 className="hero__title">Develop Apps</h1>
          <p className="hero__subtitle">Tap Into Success</p>
              <div className={styles.buttons}>
              <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted, 
              )}
              to={useBaseUrl('docs/lw_how_to_play')}>
            Documentation
            </Link>

            &nbsp;  &nbsp;

            <Link
              className={classnames(
                'button button--primary button--lg',
                styles.getStarted, 
              )}
              to={useBaseUrl('https://pixelframes.lamden.io')}>
              Demo
            </Link>

              </div>
            </div>
            <div className={classnames('col col--5')}>
              <img className={styles.heroImg} src="img/undraw_video_game_night_8h8m.svg" />
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
        <section className={styles.tools}>
            <div className="container">
            <h2>Developer Tools</h2>
              {tools.map((props, idx) => (
                  <Tools key={idx} {...props} />
                ))}
            </div>
          </section>
      </main>
    </Layout>
  );
}

export default Home;
