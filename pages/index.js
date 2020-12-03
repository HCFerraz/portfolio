import Head from 'next/head'
import home from '../styles/home.module.css'
import about from '../styles/about.module.css'
import tech from '../styles/tech.module.css'
import portfolio from '../styles/portfolio.module.css'

import { Image } from '../components/UI/Image'

import { useState, useEffect } from 'react'
import { Player, ControlBar } from 'video-react'
import '../node_modules/video-react/dist/video-react.css'

export default function Home() {
    const size = useWindowSize()
    return (
        <div>
            <Head>
                <title>Henrique Cabral - Portfólio</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Sansita+Swashed&display=swap" rel="homeheet" />
                <meta property="og:image" content="/images/about_me.svg"></meta>
                <link rel="stylesheet" href="/css/video-react.css" />
            </Head>
            <div className={home.content_container}>
                <div className={home.header_container}>
                    <img src="/images/code.svg" alt="Coding..." width="120px" />
                    <nav>
                        <ul className={home.navigation_list_container}>
                            <li><a href="#">Início</a></li>
                            <li><a href="#">Sobre mim</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={home.presentation_container}>
                    <div className={home.information_container}>
                        <h1>Henrique Cabral Ferraz</h1>
                        <h2>Front-End Developer & Back End Enthusiastic</h2>
                        <p>Desenvolvimento de páginas estáticas, SPA, criação e consumo de APIs, e muito mais... </p>
                        <div className={home.buttons_container}>
                            <a href="#">Portfolio</a>
                            <a href="https://github.com/HCFerraz" target="_blank">Github</a>
                        </div>
                    </div>
                    {size.width && size.width > '1024' ? <img src="/images/web_developer.svg" alt="Web Developer" /> : <img src="/images/web_devices.svg" alt="Web Devices" />}
                </div>
            </div>
            <div className={about.content_container}>
                {size.width && size.width > '1160' ? <img src="/images/profile.svg" alt="About me" /> : null}
                <div className={about.information}>
                    <h1>Sobre</h1>
                    <p>Olá, me chamo Henrique e atualmente curso Análise e Desenvolvimento de Sistemas no IFSP. Adoro saber como as coisas funcionam e amo criar coisas novas, a partir disso, descobri na programação o meu espaço.</p>
                    <p>Me especializando em desenvolvimento Front End e sempre com um olhar para o Back End, tenho como objetivo desenvolver sistemas web completos e intuitivos, trabalhar em equipes proativas e com a sede por aprendizado.</p>
                    <p>O que sei é uma gota d'água no oceano de informações e inovações que o mundo de hoje proporciona a cada momento. Quero fazer parte dessas inovações, trazendo melhorias contínuas às nossas vidas através da tecnologia.</p>
                </div>
            </div>
            <div className={tech.content_container}>
                <h1>Focando minhas energias em aprender mais sobre os seguintes frameworks:</h1>
                <div>
                    <img src="/images/next_js.svg" />
                    <img src="/images/react_js.svg" />
                </div>
            </div>

            <div className={portfolio.content_container}>
                <h1>Portfolio</h1>
                <div className={portfolio.tech_icons}>
                    <div>
                        <img src="/images/html_icon.svg" />
                        <p>HTML5</p>
                    </div>
                    <div>
                        <img src="/images/css_icon.svg" />
                        <p>CSS3</p>
                    </div>
                    <div>
                        <img src="/images/javascript_icon.svg" />
                        <p>Javascript</p>
                    </div>
                    <div>
                        <img src="/images/react_icon.svg" />
                        <p>React</p>
                    </div>
                    <div>
                        <img src="/images/nextjs_icon.svg" />
                        <p>Next JS</p>
                    </div>
                    <div>
                        <img src="/images/nodejs_icon.svg" />
                        <p>Node js</p>
                    </div>
                    <div>
                        <img src="/images/mongodb_icon.svg" />
                        <p>MongoDB</p>
                    </div>
                    <div>
                        <img src="/images/github_icon.svg" />
                        <p>Github</p>
                    </div>
                </div>
                <div className={portfolio.projects}>
                    <div>
                        <div>
                            <Player src="/videos/Netflix_Video.mp4" muted autoPlay loop fluid>
                                <ControlBar disableCompletely />
                            </Player>
                            <div className={portfolio.description_wrapper}>
                                <h2>Netflix - Landing Page</h2>
                                <p>Clone da página de apresentação da Netflix feito com React JS</p>
                                <div className={portfolio.button_wrapper}>
                                    <a href="#">Live Demo</a>
                                    <a href="#">Github Repo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Player src="/videos/Pokedex_Video.mp4" muted autoPlay loop fluid>
                                <ControlBar disableCompletely />
                            </Player>
                            <div className={portfolio.description_wrapper}>
                                <h2>PokeSearch - Consulte seus pokes favoritos</h2>
                                <p>Clone em React JS de um site de busca de Pokémon feito em HTML, CSS e Javascript durante o curso de Desenvolvimento Front End na Arbyte.</p>
                                <div className={portfolio.button_wrapper}>
                                    <a href="#">Live Demo</a>
                                    <a href="#">Github Repo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            }
            window.addEventListener("resize", handleResize)

            handleResize()

            return () => window.removeEventListener("resize", handleResize)
        }

    }, [])
    return windowSize
}