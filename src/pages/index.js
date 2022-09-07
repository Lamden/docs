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
        Create an Account in the Lamden Vault specific to your Application. Customize the Account to help engage your users. 
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


const toolsBackend = [
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
    title: <>Lamden Vault API</>,
    imageUrl: 'img/tools-walletapi.svg',
    description: (
      <>
        Connect your app to the Lamden Vault via a simple event driven API. 
        Once your app is connected to a user's Lamden Vault you can sign transactions to your smart contract on their behalf. 
        Automatic transactions supercharge the user experience by getting rid of popups.
      </>
    ),
    link: 'https://tools.lamden.io/wallet_api/overview'
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
    link: 'https://tools.lamden.io/unity_3d/unity_3d'
  },
]

const toolsFonted = [
  {
    title: <>Lamden-js</>,
    imageUrl: 'img/tools-lamdenjs.svg',
    description: (
      <>
        Lamden-js is a NodeJS package which allows you to easily create transactions and query state on the Lamden Blockchain.  
        Integreate Lamden in to your webapp using lamden-js's simple event driven API.
      </>
    ),
    link: 'https://tools.lamden.io/lamden_js/overview'
  },
  {
    title: <>Lamden Vault Controller</>,
    imageUrl: 'img/tools-walletcontroller.svg',
    description: (
      <>
        A javascript package for connecting and communicating with the Lamden Vault.  
        This package facilitates the Wallet connection process and streamlines the flow of communication.
      </>
    ),
    link: 'https://tools.lamden.io/wallet_controller/wallet_controller_quickstart'
  }
]

const startedRes = [
  {
    title: "Learn through tutorials",
    description: "Learn Ethereum development step-by-step from builders who have already done it",
    btnName: "View Tutorials",
    imgurl: "https://twemoji.maxcdn.com/v/latest/svg/1f469-200d-1f4bb.svg",
    link: "/mytutorials"
  },
  {
    title: "Learn Lamden development",
    description: "Read up on core concepts with our docs",
    btnName: "Read the docs",
    imgurl: "https://twemoji.maxcdn.com/v/latest/svg/1f9d1-200d-1f52c.svg",
    link: "https://tools.lamden.io/"
  },
  {
    title: "Set up local environment",
    description: "Get ready for building by configuring a development environment.",
    btnName: "View Tutorials",
    imgurl: "https://twemoji.maxcdn.com/v/latest/svg/1f9d1-200d-1f3a8.svg",
    link: "/tutorials/basic/basic-docker"
  },
]

function Tools({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('row', styles.tool)}>
      <div class="col col--4">
          <Link
            className={classnames('button button--secondary button--lg',  styles.tool_button)}
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


function StartCard({title, description, btnName, link, imgurl}) {
  return (
    <div>
    <div className={classnames("card shadow--lw", styles["start_card"])}>
      <div class="card__header">
        <img src={imgurl} width="36px"/>
        <h3 style={{marginTop: 0}}>{title}</h3>
      </div>
      <div class="card__body">
        <p>{description}</p>
      </div>
      <div class="card__footer">
        <Link
          className={classnames(
            'button button--primary button--block'  
          )}
          to={useBaseUrl(link)}>
          {btnName}
        </Link>
      </div>
    </div>
  </div>
  )
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
            
            <div className={styles.buttons}>
              </div>
              <Link
                  className={classnames(
                    'button button--secondary button--lg',
                     
                  )}
                  to={useBaseUrl('/docs/develop/wallet_api/overview')}>
                  Documentation
                </Link>
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
        <section>
          <div className="container">
              <h2>Get Started</h2> 
              <div className="row">
              {startedRes.map((props, index) => (
                <div className="col">
                  <StartCard key={index} {...props} />
                </div>
                ))}
              </div>
          </div>
        </section>

        <section className={styles.tools}>
            <div className="container">
            <h2>Backend Development Tools</h2>
              {toolsBackend.map((props, idx) => (
                  <Tools key={idx} {...props} />
                ))}
            </div>
            <div className="container">
            <h2>Fronted Development Tools</h2>
              {toolsFonted.map((props, idx) => (
                  <Tools key={idx} {...props} />
                ))}
            </div>
          </section>
      </main>
    </Layout>
  );
}

export default Home;
