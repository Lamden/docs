import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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

let contractRes = {
	"con_my_first_contract": {
		"__code__": "__balances = Hash(default_value=0, contract='con_my_first_contract', name=\n    'balances')......",
		"__compiled__": {
			"__bytes__": "e3000000000000000000000......"
		},
		"__developer__": "b17eabddbd474bdaebfca71f654ab7dc1195510062e3cdbbdc442a028b050e41",
		"__owner__": null,
		"__submitted__": {
			"__time__": [2022, 6, 9, 16, 26, 34, 0]
		},
		"balances": {
			"me": 1000000
		}
	}
}

let resStr = JSON.stringify(contractRes, undefined, 3)

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
              <img className={styles.heroImg} src="/img/undraw_process_e90d.svg" />
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
                <code> pip3 install contracting</code>

                <h3>2. Create Your First Smart Contract</h3>
                <SyntaxHighlighter language="python" style={docco}>
                  { `
#create some state 
balances = Hash(default_value=0) 

#seed initial balances 
@construct 
def seed(): 
  balances['me'] = 1000000 

#transfer the caller's funds to another account
@export
def transfer(amount: float, to: str):
  assert amount > 0, 'Cannot send negative balances!'
  assert balances[ctx.caller] >= amount, 'Insufficient Funds to send!'

  # remove amount from senders account
  balances[ctx.caller] -= amount
  # add amount to receivers account
  balances[to] += amount

# give permission to the spender to spend your funds
@export
def approve(amount: float, to: str):
  assert amount > 0, 'Cannot send negative balances!'

  # Add the amount to the callers
  balances[ctx.caller, to] += amount

# transfer someone's funds to another account
@export
def transfer_from(amount: float, to: str, main_account: str):
  assert amount > 0, 'Cannot send negative balances!'

  assert balances[main_account, ctx.caller] >= amount, 'Not enough coins approved to send! You have {} and are trying to spend {}'\\
      .format(balances[main_account, ctx.caller], amount)
  assert balances[main_account] >= amount, 'Not enough coins to send!'

  # reduce the approval amount by the amount being spent
  balances[main_account, ctx.caller] -= amount

  # remove amount spent from the main account
  balances[main_account] -= amount
  # add the amount spent to the receivers account
  balances[to] += amount
                  `}
                </SyntaxHighlighter>

                <h3>3. Upload Your First Contact To The Blockchain</h3>
                <p>Open your lamden wallet and select the 'Smart Contract' section</p>
                <img src='/img/contract_ide.png' style={{marginBottom: '0.5rem'}} />

                <p>Click on the button 'Submit to Network'</p>
                <img src='/img/submit_contract.png' style={{marginBottom: '0.5rem'}} width='500px' />

                <p>Simply press button 'Confirm Transaction'</p>
                <img src='/img/submit_contract_result.png' style={{marginBottom: '0.5rem'}} width='500px'/>
                
                <h3>4. Interact With The Block Service To Access Your Contract Data</h3>
                <p>Open shell and then run the following command:</p>
                <SyntaxHighlighter language="shell" style={docco}>curl http://165.22.47.195:3535/contracts/con_my_first_contract</SyntaxHighlighter>
                <p>Then you will get the source code of your contract and other relevant information</p>
                <SyntaxHighlighter language="json" style={docco}>{resStr}</SyntaxHighlighter>
            </div>
          </section>
          <section className={styles.tutorials}>
            <div className="container">
              <h2>Tutorials</h2>
              <div class="row" className={classnames('row', styles.tutorials)}>
                <div class="col col--4">
                  <Link
                      className={classnames('button button--secondary button--lg', styles.getStarted, styles.tutorials_button)}
                      to={useBaseUrl('https://github.com/JeffWScott/my_token_lamden_tutorial')}>
                        <img src="/img/tutorials-mytoken.png" className={classnames(styles.tutorials_image)}/>
                  </Link>
                </div>
                <div class="col col--8" >
                  <div className={styles.tutorials_text}>
                    <h3>"My Token" Tutorial Series</h3>
                    <p>Create a token smart contract from scratch using Python's Contracting package. The simple smart contract will mint an initial supply to a user of our choice and then define a tansfer method for our users to use. To finish it off we create unit test to validate our new smart contact does exactly what we want it to do.</p>
                  </div>
                </div>
              </div>
              <div class="row" className={classnames('row', styles.tutorials)}>
                <div class="col col--4">
                  <Link
                    className={classnames('button button--secondary button--lg', styles.getStarted, styles.tutorials_button)}
                    to={useBaseUrl('https://contracting.lamden.io/quickstart/import-submit/')}>
                      <img src="/img/tutorials-jupyter.svg" className={classnames(styles.tutorials_image_jupyter)}/>
                  </Link>
                </div>
                <div class="col col--8" >
                  <div className={styles.tutorials_text}>
                    <h3>Juypter Notebook Quickstart</h3>
                    <p>
                        Jupyter is a great tool for Python programmers to develop and explore in as they combine the high feedback of a REPL with the presentation and saving of a program.
                        If you are a Python programmer, chances are you already have Jupyter installed. If not, follow this guide to get started.
                    </p>
                  </div>
                </div>
              </div>
              <div class="row"  className={classnames('row', styles.tutorials)}>
                <div class="col col--4">
                  <Link
                    className={classnames('button button--secondary button--lg', styles.getStarted, styles.tutorials_button)}
                    to={useBaseUrl('https://github.com/Lamden-Standards/')}>
                      <img src="/img/tutorials-standards.png" className={classnames(styles.tutorials_image_jupyter)}/>
                  </Link>
                </div>
                <div class="col col--8" >
                  <div className={styles.tutorials_text}>
                    <h3>Lamden Standards</h3>
                    <p>
                        There are three standards in Lamden, LST001, LST002 and LST003. LST001 is a basic Token Interface. For LST002,  it's used for adding/changing metadata on smart contracts. LST003 is a basic NFT
                        Interface. They are both great example of smart contacts on Lamden Blockchain.
                    </p>
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
