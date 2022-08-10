import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main className={classnames(styles['main'])}>
        <div className={classnames('container')}>
            <h2 style={{margin: "3rem 0 2rem"}}>Tutorials</h2>
            <div className={classnames(styles['tutorials'])}>
                <div className={classnames(styles['tutorial-card'])}>
                    <div className={classnames('card', styles['card-shadow', 'card-bg'])} style={{height: "100%"}}>
                        <div className={classnames('card__header', styles['tutorial-card-header'])}>
                            <h3>
                                Contracting Tutorial
                                <span class="badge badge--warning" style={{float: "right"}}>Beginner</span> 
                            </h3>
                            <div>
                                <span className="margin-right--sm">
                                    <img alt="✏️" className={classnames('margin-right--xs', styles['emoji'])} src="https://twemoji.maxcdn.com/v/latest/svg/270f.svg"/>
                                    <span className={classnames(styles['emoji-title'])}>Jeff</span>
                                </span>
                                <span className="margin-right--sm">
                                    <img alt="🗓️" className={classnames('margin-right--xs', styles['emoji'])} src="https://twemoji.maxcdn.com/v/latest/svg/1f5d3.svg"/>
                                    <span className={classnames(styles['emoji-title'])}>May 29, 2020</span>
                                </span>
                                <span className="margin-right--sm">
                                    <img alt="⏰" className={classnames('margin-right--xs', styles['emoji'])} src="https://twemoji.maxcdn.com/v/latest/svg/23f0.svg"/>
                                    <span className={classnames(styles['emoji-title'])}>30min</span>
                                </span>
                            </div>
                        </div>
                        <div className="card__body">
                            <p>
                               This tutorial is produced for beginners who are interested in blockchain and love python.
                            </p>
                        </div>
                        <div className="card__footer">
                            <Link to="https://blog.lamden.io/smart-contracting-with-python-2af233620dca" style={{textDecoration: "none"}}>
                                <button className="button button--primary button--block">Start Learning</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={classnames(styles['tutorial-card'])}>
                    <div className={classnames('card', styles['card-shadow', 'card-bg'])} style={{height: "100%"}}>
                        <div className={classnames('card__header', styles['tutorial-card-header'])}>
                            <h3>
                                Build Lottery Dapp 
                                <span class="badge badge--info" style={{float: "right"}}>Mediate</span> 
                            </h3>
                            <div>
                                <span className="margin-right--sm">
                                    <img alt="✏️" className={classnames('margin-right--xs', styles['emoji'])} src="https://twemoji.maxcdn.com/v/latest/svg/270f.svg"/>
                                    <span className={classnames(styles['emoji-title'])}>Dapiguabc</span>
                                </span>
                                <span className="margin-right--sm">
                                    <img alt="🗓️" className={classnames('margin-right--xs', styles['emoji'])} src="https://twemoji.maxcdn.com/v/latest/svg/1f5d3.svg"/>
                                    <span className={classnames(styles['emoji-title'])}>Aug 10, 2022</span>
                                </span>
                                <span className="margin-right--sm">
                                    <img alt="⏰" className={classnames('margin-right--xs', styles['emoji'])} src="https://twemoji.maxcdn.com/v/latest/svg/23f0.svg"/>
                                    <span className={classnames(styles['emoji-title'])}>30min</span>
                                </span>
                            </div>
                        </div>
                        <div className="card__body">
                            <p>
                                By learning this tutorial, you will get into how to build a lottery dapp on Lamden Blockchain.
                            </p>
                        </div>
                        <div className="card__footer">
                            <Link to="/tutorials/lottery" style={{textDecoration: "none"}}>
                                <button className="button button--primary button--block">Start Learning</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
