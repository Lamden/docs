import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Safe and Secure</>,
    imageUrl: 'img/wallet-1.svg',
    description: (
      <>
        Keep all your Lamden TAU tokens safe in one place.  Backup and Restore to keystore files all from one unified interface.
      </>
    ),
  },
  {
    title: <>Built-In Python IDE</>,
    imageUrl: 'img/wallet-2.svg',
    description: (
      <>
        Build, Test and Upload smart contracts directly from the wallet. Open and view smart contracts that already exist on the Lamden blockchain.
      </>
    ),
  },
  {
    title: <>Linked Accounts</>,
    imageUrl: 'img/wallet-3.svg',
    description: (
      <>
        Link your accounts to website to allow for powerful blockchain interactions. Enable automatic transactiosn to super charge app and game experiences.
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
            <h1 className="hero__title">Lamden Vault</h1>
          <p className="hero__subtitle">Safe TAU Storage and MUCH More</p>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    'button button--primary button--lg',
                     
                  )}
                  to={useBaseUrl('https://chrome.google.com/webstore/detail/lamden-wallet-browser-ext/fhfffofbcgbjjojdnpcfompojdjjhdim')}>
                  Install
                </Link>
                &nbsp;  &nbsp;
                <Link
                  className={classnames(
                    'button button--secondary button--lg',
                     
                  )}
                  to={useBaseUrl('https://tools.lamden.io/wallet/overview')}>
                  Documentation
                </Link>
              </div>
            </div>
            <div className={classnames('col col--5')}>
              <img className={styles.heroImg} src="img/undraw_secure_login_pdn4.svg" />
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
                <h3>1. Install</h3>
                Lamden Vault is a browser plugin. You can search and install it in&nbsp;
                <Link 
                  style={{textDecoration: 'underline'}}
                  to={useBaseUrl('https://chrome.google.com/webstore/detail/lamden-wallet-browser-ext/fhfffofbcgbjjojdnpcfompojdjjhdim')}>
                chrome store
                </Link>
                .

                <h3>2. Set Up Your Vault</h3>
                <p>Open the Vault</p>
                <img src='/img/wallet_setup.png' style={{marginBottom: '0.5rem'}} />
                <p>Then You can create/restore your Lamden Vault.</p>
                <img src='/img/wallet/first_run_main.png' style={{marginBottom: '0.5rem', width: '50%'}} />
                <p>Now you can use your vault!</p>
                <img src='/img/wallet_home.png' style={{marginBottom: '2rem', width: '50%'}} />
            </div>
          </section>
      </main>
    </Layout>
  );
}

export default Home;
