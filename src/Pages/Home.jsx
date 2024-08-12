import React, { useState } from "react";
import './Home.css'
import './responsive.css'
import './responsiveTablets.css'
import './responsiveWebScreens.css'
import netflix from '../assets/pngwing.com.png'
import disney from '../assets/disney.png'
import hbo from '../assets/hbo.png'
import prime from '../assets/prime.png'
import cnn from '../assets/cnn.png'
import globo from '../assets/globo.png'
import paramount from '../assets/paramount.png'
import espn from '../assets/espn.png'
import play from '../assets/play.png'
import apple from '../assets/apple.png'
import nba from '../assets/nba.png'
import f1 from '../assets/f1.png'
import sportv from '../assets/sportv.png'
import smartv from '../assets/icons/smartv.png'
import laptop from '../assets/icons/laptop.png'
import android from '../assets/icons/android.png'
import ios from '../assets/icons/apple.png'
import windows from '../assets/icons/windows.png'
import check from '../assets/check.png'
import FAQList from "../components/faqs/faqsList";
import Footer from "../components/Footer/Footer";
import hamburguer from "../assets/icons/hamburguer-branco.png"
import close from '../assets/icons/close.png'


function Home() {
    const [isAnual, setIsAnual] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (plan) => {
        setIsAnual(plan === 'anual');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (name) => {
        const element = document.getElementsByClassName(name)[0];
        if(element){
            element.scrollIntoView({behavior: "smooth"});
            setMenuOpen(false);
        }

    }


    const scrollToSectionId = (id) => {
        const element = document.getElementById(id)
        if(element){
            element.scrollIntoView({behavior: "smooth"})
            setMenuOpen(false);
        }
    }

    return (
        <div className="app">
            <section className="Main">
                <header className="header">
                    <div className="skyStreamLogo">
                         
                    </div>
                    
                    <div className="links">
                        <p onClick={() => scrollToSection('intro')}>Home</p>
                        <p onClick={() => scrollToSection('planos')}>Planos</p>
                        <p onClick={() => scrollToSectionId('perguntas-frequentes-container')}>Duvidas</p>
                        <p>Suporte 24/7</p>
                    </div>
                    <button className="free-trial">TESTE</button>
                    <button className="button-menu" onClick={toggleMenu}>
                        <img src={hamburguer} alt="hamburguer-branco" width={35} className="hamburguer"/>
                    </button>
                </header>


                {menuOpen && (
                    <div className="full-screen-menu">
                        <ul>
                            <li onClick={() => scrollToSection('intro')}>Home</li>
                            <li onClick={() => scrollToSection('planos')}>Planos</li>
                            <li onClick={() => scrollToSectionId('perguntas-frequentes-container')}>Dúvidas</li>
                            <li>Suporte 24/7</li>
                            <li>
                                <button id="free-trial-mobile">TESTE GRATIS</button>
                            </li>
                        </ul>
                        <button className="close-menu" onClick={toggleMenu}>
                            <img src={close} alt="close" width={50}/>
                        </button>
                    </div>
                )}

                <section className="intro">
                    <div className="left-content-container">
                        <div className="left-content">
                            <h1>SkyStream: Eleva a tua <br />Experiencia de entretenimento</h1>
                        </div>
                        <div className="left-content-1">
                            <p>Bem-vindo à SkyStream! Desfrute de canais de TV em direto, jogos das principais ligas e uma experiência de streaming incrível. Eleve o seu entretenimento com SkyStream hoje!
                            </p>
                        </div>
                        <div className="left-content-2">
                            <button className="free-trial">
                                TESTE GRATIS
                            </button>

                            <button className="free-trial-2">
                                TESTE GRATIS
                            </button>

                            <div className="play-button">
                                <img src={play} width={25} style={{ paddingLeft: 4 }} alt="play"/>
                            </div>
                        </div>
                        <div className="platforms">
                            <div className="position-platforms">
                                <img src={smartv} alt="icon1" />
                                <p>Smart TV</p>
                            </div>
                            <div className="position-platforms">
                                <img src={laptop} alt="icon1" />
                                <p>Laptop/Pc</p>
                            </div>
                            <div className="position-platforms">
                                <img src={android} alt="icon1"/>
                                <p>Android</p>
                            </div>
                            <div className="position-platforms">
                                <img src={ios} alt="icon1" />
                                <p>iOS/iPadOS</p>
                            </div>
                            <div className="position-platforms">
                                <img src={windows} alt="icon1" />
                                <p>Windows</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-content-container">
                    </div>
                </section>
            </section>

            <section className="channels">
                <div className="channels-logo">
                    <div className="channels-logo-position">
                        <img src={netflix} width={120} className="logo" alt="streaming"></img>
                        <img src={hbo} width={150} className="logo"alt="streaming"></img>
                        <img src={prime} width={120} className="logo"alt="streaming"></img>
                        <img src={disney} width={110} className="logo"alt="streaming"></img>
                        <img src={apple} width={110} className="logo"alt="streaming"></img>
                        <img src={paramount} width={100} className="logo"alt="streaming"></img>
                    </div>
                    <div className="channels-logo-position">
                        <img src={espn} width={120} className="logo" alt="streaming"></img>
                        <img src={nba} width={70} className="logo" alt="streaming"></img>
                        <img src={f1} width={100} className="logo" alt="streaming"></img>
                        <img src={sportv} width={130} className="logo" alt="streaming"></img>
                        <img src={cnn} width={60} className="logo" alt="streaming"></img>
                        <img src={globo} width={130} className="logo"alt="streaming"></img>
                        
                    </div>
                </div>
            </section>

            <section className="planos">
                <div className="plans-intro">
                    <div className="pick-the-plan">
                        <h1>Escolha o plano perfeito</h1>
                        <p>Veja novos conteudos, filmes de sucesso, series, canais de destaque e todos os jogos das principais ligas desportivas</p>
                    </div>
                </div>

                <div className="toggle-container">
                    <div className="toggle">
                        <button
                            className={`plan-button ${!isAnual ? 'active' : ''}`}
                            onClick={() => handleClick('mensal')}
                        >
                            <p>MENSAL</p>
                        </button>
                        <button
                            className={`plan-button ${isAnual ? 'active' : ''}`}
                            onClick={() => handleClick('anual')}
                        >
                            <p>ANUAL </p>
                        </button>
                    </div>
                </div>

                <div className="plan-details">
                    {isAnual ? (
                        <div key="anual" className="plan-content">
                            <div className="boxes">
                                <div className="Sky-stream-sports-box-up">
                                    <div className="sky-stream-intro">
                                        <h4>Sky Stream Sports / <strong>POUPE 10%</strong></h4>
                                    </div>
                                    
                                </div>

                                <div className="Sky-stream-sports-box-middle">
                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p>Cobertura exclusiva de todas as ligas</p>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p><strong>+200 canais desportivos</strong></p>
                                        </div>
                                    </div>
                                    


                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <b>SD/HD/FHD/4K</b>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p>Sem publicidade</p>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p>Suporte 24/7</p>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="Sky-stream-sports-box-bottom">
                                    <div className="price-box">
                                        <div className="price-box-box">
                                            
                                            <h3>86,29 €/ano</h3>
                                                
                                            <button className="plan-button-2">
                                                <p>SELECIONAR PLANO</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="boxes">
                            <div className="Sky-stream-sports-box-up">
                                    <div className="sky-stream-intro">
                                        <h4>Sky Stream All-in-One / <strong>POUPE 10%</strong></h4>
                                    </div>
                                    
                                </div>

                                <div className="Sky-stream-sports-box-middle">
                                    
                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p><strong>Acesso a 500+ canais em direto</strong></p>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <b>Qualidade HD/4K</b>
                                        </div>
                                    </div>


                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p><strong>8.000+ Filmes e Séries On-Demand</strong></p>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p><strong>Actualizações Semanais</strong></p>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p>Suporte 24/7</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="Sky-stream-sports-box-bottom">
                                    <div className="price-box">
                                        <div className="price-box-box">
                                            
                                            <h3>151,99 €/ano</h3>
                                                
                                            <button className="plan-button-2">
                                                <p>SELECIONAR PLANO</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                    ) : (
                        <div key="mensal" className="plan-content">
                            <div className="boxes">
                                <div className="Sky-stream-sports-box-up">
                                    <div className="sky-stream-intro">
                                        <h4>Sky Vision Sports</h4>
                                    </div>
                                    
                                </div>

                                <div className="Sky-stream-sports-box-middle">
                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p>Cobertura exclusiva de todas as ligas</p>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p><strong>+200 canais desportivos</strong></p>
                                        </div>
                                    </div>
                                    


                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <b>SD/HD/FHD/4K</b>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p>Sem publicidade</p>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p>Suporte 24/7</p>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="Sky-stream-sports-box-bottom">
                                    <div className="price-box">
                                        <div className="price-box-box">
                                            
                                            <h3>7,99 €/mês</h3>
                                                
                                            <button className="plan-button-2">
                                                <a href="https://buy.stripe.com/eVa8z11IK3d46Vq3ce">SELECIONAR PLANO</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="boxes">
                            <div className="Sky-stream-sports-box-up">
                                    <div className="sky-stream-intro">
                                        <h4>Sky Vision All-in-One</h4>
                                    </div>
                                    
                                    
                                </div>


                                <div className="Sky-stream-sports-box-middle">
                                    
                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p><strong>Acesso a 500+ canais em direto</strong></p>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <b>Qualidade HD/4K</b>
                                        </div>
                                    </div>


                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p><strong>+8 000 Filmes e Seríes on demand</strong></p>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p><strong>Actualizações semanais</strong></p>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p>Suporte 24/7</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="Sky-stream-sports-box-bottom">
                                    <div className="price-box">
                                        <div className="price-box-box">
                                            
                                            <h3>13,99 €/mês</h3>
                                                
                                            <button className="plan-button-2">
                                                <a href="https://buy.stripe.com/eVacPhfzA8xoenS003">SELECIONAR PLANO</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    )}

                </div>
                
                <div className="obs">

                    <div className="obs-encurt">
                        <p>O cliente tem também a opção de ativar o debito directo no ato da compra sem compromisso e pode cancelar quando quiser.Os canais e conteúdos exibidos não possuem anúncios. *Poupança anual em relação ao preço anual vs. preço mensal em 12 meses.</p>
                    </div>
                </div>
            </section>

            <section className="movies-series-section">

                    <div className="movies-series-intro">
                        <h1>
                            Tudo num unico pacote <br />
                            Filmes, Series, Noticias, novelas e Desporto
                        </h1>
                    </div>

                    <div className="poster-positioner">
                        <div className="posters">
                            <div className="poster-1">

                            </div>

                            <div className="poster-2">
                            
                            </div>

                            <div className="poster-3">
                            
                            </div>

                            <div className="poster-4">
                            
                            </div>

                            <div className="poster-5">
                            
                            </div>

                            <div className="poster-6">
                            
                            </div>

                            <div className="poster-7">
                            
                            </div>

                            <div className="poster-8">
                            
                            </div>
                        </div>
                    </div>

                    <div className="view-more">
                        <div className="shadow">
                            <button className="see-more">
                                Veja Mais
                            </button>
                        </div>
                    </div>

            </section>

            <section className="explanations">
                    <div className="topic-container">

                        <div className="topic-1">

                            <h1>🌎</h1>
                            <strong>Canais televisivos do Brasil e de Portugal</strong>
                            <p>Explore o entretenimento mundial com a seleção de canais portugueses e brasileiros selecionados pela SkyStream.
                                Faça uma lista de favoritos com os seus canais internacionais e locais favoritos, e tenha uma experiencia de TV Global como nunca antes teve.
                            </p>

                        </div>

                        <div className="topic-2">

                            <h1>💰</h1>
                            <strong>7 dias de garantia de reembolso</strong>
                            <p>Teste a SkyStream com a nossa garantia de reembolso de até 7 dias. Se não estiver satisfeito com o nosso serviço,
                                dê-nos a conhecer em até no maximo 7 dias e receba o seu dinheiro de volta. A sua satisfação é uma prioridade.
                            </p>
                        </div>

                        <div className="topic-3">
                            <h1>🤩</h1>
                            <strong>Qualidade premium HD/FHD/4K</strong>
                            <p>Disfrute de streaming com as resoluções premium da SkyStream. Assita com clareza HD,FHD,4K.
                                Eleve a sua experiencia com o nosso sistema anti-travagem. VELOCODIADE MINIMA DE INTERNET: 5Mb.
                            </p>
                        </div>
                    </div>
            </section>

            <section id="perguntas-frequentes-container">

                <div className="perguntas-frequentes-up-container">
                    
                </div>

                <div className="perguntas-frequentes-middle-container">
                    
                    <div className="perguntas-frequentes-middle-container-up">
                        <div className="bubble-1">
                            1
                        </div>

                        <h1>O que é a SkyVision TV ?(FAQ)</h1>
                    </div>

                    <p className="description">A SkyVision TV é um serviço de televisão por internet que oferece acesso a uma vasta seleção <br />
                    canais de TV ao vivo, filmes, séries e eventos desportivos, tudo em alta qualidade e disponivel <br />
                    em qualquer dispositivo com conexão a internet
                    </p>

                </div>

                <div className="perguntas-frequentes-middle-container">
                    
                    <div className="perguntas-frequentes-middle-container-up">
                        <div className="bubble-1">
                            2
                        </div>

                        <h1>A SkyVision é diferente ?</h1>
                    </div>

                    <p className="description">A SkyVision TV é diferente porque oferece um vasto conteudo de streaming desde as novelas <br />
                    da GloboPlay até as series e filmes de plataformas como a netflix, HBO, Apple +, Paramount +,<br />
                    Prime Video e Disney+. Não perca nenhum evento desportivo, partida ou competição.
                    </p>

                </div>
            </section>

            <section className="perguntas-frequentes-container-2">
                    <FAQList/>
            </section>

            <Footer/>

        </div>
    );
}

export default Home;