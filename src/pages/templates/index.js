import React, { useEffect, useMemo, useState } from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import FavorIcon from '../../../static/img/favourite-solid.svg'
import ForkIcon from '../../../static/img/fork.svg'
import EyeIcon from '../../../static/img/eye.svg'
import ArrowDownIcon from '../../../static/img/angle-down-solid.svg'
import ArrowUpIcon from '../../../static/img/angle-up-solid.svg'
import EmptyImage from '../../../static/img/undraw_no_data_re_kwbl.svg'

function TemplateCard({repo}) {

    const [meta, setMeta] = useState({})

    useEffect(() => {
        fetch(`https://api.github.com/repos/${repo}`)
        .then((res) => {
            if (res.ok) {
                res.json().then(data => {
                    setMeta({
                        name: data.name,
                        stared: data.stargazers_count,
                        watcher: data.watchers_count,
                        forks: data.forks_count,
                        desc: data.description
                    })
                })
            }
        })
        .catch((e)=>{
            console.log(e)
            setMeta({})
        })
    }, [])

    return Object.entries(meta).length === 0 ? null : (
            <div className="col col--4">
                <Link to={useBaseUrl(`https://github.com/${repo}`)} className={styles['link']}>
                    <div className={classnames('card', styles['tcard'])} style={{height: 164}}>
                        <div className="card__header">
                            <h4>{meta.name}</h4>
                        </div>
                        <div className={classnames('card__body')}>
                            <div className={styles['meta']}>
                                <div className={classnames('flex', styles['meta-item'])}><EyeIcon width={16} className={styles['mr2']} />Watch{'  ' + meta.watcher}</div>
                                <div className={classnames('flex', styles['meta-item'])}><ForkIcon width={16} className={styles['mr2']} />Fork{'  ' + meta.forks}</div>
                                <div className={classnames('flex', styles['meta-item'])}><FavorIcon width={16} className={styles['mr2']}/>Star{'  ' + meta.stared}</div>
                            </div>
                            <p className={styles['card-intro']}>
                                {meta.desc}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
    )
}

function Dropdown({data, onSelectionChanged}) {

    const [selection, setSelection] = useState({})
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        if (data && data.length > 0){
            setSelection(data[0])
            if (onSelectionChanged) onSelectionChanged(data[0])
        }
    }, [])

    const handleSelect = (id) => {
        let item = data.find(i => i.id === id)
        if (item) {
            setSelection(item)
            if (onSelectionChanged) onSelectionChanged(item)
        }
    }

    const handleMouseEnter = () => {
        setIsHover(true);
     };
     const handleMouseLeave = () => {
        setIsHover(false);
     };

    return (
        <div 
            className={classnames("dropdown dropdown--hoverable", styles['temp-dropdown'])}             
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={isHover ? styles["dropdown-main-active"]:''}>{selection.value} {isHover? <ArrowUpIcon width={10} fill='var(--ifm-color-primary-dark)' /> : <ArrowDownIcon width={10} />}</div>
            <ul className="dropdown__menu">
                {data.map(item => {
                    return (
                        <li key={item.id}>
                            <a className="dropdown__link" href="#url" onClick={handleSelect.bind(this, item.id)}>{item.value}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


function Empty({text}) {
    return (
        <div className={styles['empty']}>
            <EmptyImage width={100} height={100} />
            <p>{text}</p>
        </div>
    )
}

function Home() {

    const templateData = [{
        category: 'contracts',
        repo: 'Lamden-Standards/LST001',
        tags: ['Token', 'Lamden Standards']
    },{
        category: 'contracts',
        repo: 'Lamden-Standards/LST002',
        tags: ['Token', 'Lamden Standards']
    },{
        category: 'web',
        repo: 'Dapiguabc/lamden-svelte-template',
        tags: ['Svelte']
    },{
        category: 'examples',
        repo: 'Nebula-NEB/contracts',
        tags: ['Defi']
    }]

    const dropdownData = [
        {
            id: 'contracts',
            value: "Smart Contracts",
            navs: [{
                name: "ALL",
                selected: true,
            },{
                name: "Lamden Standards",
                selected: false,
            },{
                name: "Token",
                selected: false,
            },{
                name: "NFT",
                selected: false,
            }]
        },
        {
            id: 'web',
            value: "Fronted Boilerplate",
            navs: [{
                name: "ALL",
                selected: true,
            },{
                name: "Svelte",
                selected: false,
            },{
                name: "React",
                selected: false,
            }]
        },
        {
            id: 'examples',
            value: "Complex Examples",
            navs: [{
                name: "ALL",
                selected: true,
            },{
                name: "Defi",
                selected: false,
            },{
                name: "NFT",
                selected: false,
            }]
        }
    ]

    const [category, setCategory] = useState('')
    const [tag, setTag] = useState('ALL')
    const [navs, setNavs] = useState(dropdownData[0].navs)

    const tempList = useMemo(() => {
        let list = templateData.filter(i => i.category === category)
        console.log(list)
        return tag === 'ALL' ? list : list.filter(i => i.tags.findIndex(t => t === tag) !== -1)
    }, [category, tag])

    const itemClick = (name) => {
        let list = navs.slice(0)
        list.forEach(item => item.selected = false)
        let index = list.findIndex(i => i.name === name)
        list[index].selected = true
        setNavs(list)
        setTag(name)
    }

    const handleSelectionChanged = (item) => {
        if (item.id !== category) {
            setCategory(item.id)
            setNavs(item.navs)
            setTag('ALL')
        }
    }


    return (
        <Layout>
            <div className="container">
                <h2>Templates From Community</h2>
                <div className={styles['wrap']}>
                    <div className={styles['sidebar']}>
                        <Dropdown data={dropdownData} onSelectionChanged={handleSelectionChanged} />
                        {navs.map((item, index) => 
                            <div key={index} className={classnames(styles['side-item'], item.selected ? styles['side-item-active'] : '')} onClick={itemClick.bind(this, item.name)}>{item.name}</div>
                        )}
                    </div>
                    <div className={styles['temps']}>
                        {
                            tempList.length > 0 ?
                            <div className={classnames('row')} >
                                {tempList.map(item => <TemplateCard key={item.repo} repo={item.repo} />)}
                            </div>
                            :
                            <Empty text={'No Templates Found'} />
                        }  
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home;