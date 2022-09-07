import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


function TutoriaCard({title, level, author, readtime, desc, link}) {
    return (
        <div className={classnames(styles['tutorial-card'])}>
            <div className={classnames('card', styles['card-shadow', 'card-bg'])} style={{height: "100%"}}>
                <div className={classnames('card__header', styles['tutorial-card-header'])}>
                    <h3>
                        {title} 
                        <span class={`badge ${level === 'Beginner'?"badge--warning":"badge--info"}`} style={{float: "right"}}>{level}</span> 
                    </h3>
                    <div>
                        <span className="margin-right--sm">
                            <img alt="✏️" className={classnames('margin-right--xs', styles['emoji'])} src="https://twemoji.maxcdn.com/v/latest/svg/270f.svg"/>
                            <span className={classnames(styles['emoji-title'])}>{author}</span>
                        </span>
                        <span className="margin-right--sm">
                            <img alt="⏰" className={classnames('margin-right--xs', styles['emoji'])} src="https://twemoji.maxcdn.com/v/latest/svg/23f0.svg"/>
                            <span className={classnames(styles['emoji-title'])}>{readtime}</span>
                        </span>
                    </div>
                </div>
                <div className="card__body">
                    <p>
                    {desc}
                    </p>
                </div>
                <div className="card__footer">
                    <Link to={link} style={{textDecoration: "none"}}>
                        <button className="button button--primary button--block">Start Learning</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const tutorials = [
    {
        title: 'Contracting Tutorial', 
        level: 'Beginner', 
        author: 'Jeff', 
        readtime: '30min', 
        desc: 'This tutorial is produced for beginners who are interested in blockchain and love python.',
        link: 'https://blog.lamden.io/smart-contracting-with-python-2af233620dca',
    },
    {
        title: 'Build Lottery Dapp', 
        level: 'Mediate', 
        author: 'Dapiguabc', 
        readtime: '30min', 
        desc: 'By learning this tutorial, you will get into how to build a lottery dapp on Lamden Blockchain.',
        link: '/tutorials/lottery'
    },
    {
        title: 'Setup Local Enviroment', 
        level: 'Beginner', 
        author: 'Dapiguabc', 
        readtime: '3min', 
        desc: ' We have prepared a docker image for you. With this image, you can focus more on the development of smart contracts.',
        link: '/tutorials/basic/basic-docker',
    },
]

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
                {
                    tutorials.map((props)=> <TutoriaCard {...props} />)
                }
            </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
