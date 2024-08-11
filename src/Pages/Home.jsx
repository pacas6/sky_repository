import React, { useState } from "react";
import './Home.css'
import './responsive.css'
import SkyLogo from '../assets/SkyStream-2.PNG'
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


function Home() {
    const [isAnual, setIsAnual] = useState(false);

    const handleClick = (plan) => {
        setIsAnual(plan === 'anual');
    };

    return (
        <div className="app">
            <section className="Main">
                <header className="header">
                    <div className="skyStreamLogo">
                         
                    </div>
                    
                    <div className="links">
                        <p>Home</p>
                        <p>Planos</p>
                        <p>Duvidas</p>
                    </div>
                    <button className="free-trial">TESTE</button>
                    <button className="button-menu">
                        <img src={hamburguer} alt="hamburguer-branco" width={35} className="hamburguer"/>
                    </button>
                </header>

                <section className="intro">
                    <div className="left-content-container">
                        <div className="left-content">
                            <h1>SkyStream: Eleva a tua <br />Experiencia de entretenimento</h1>
                        </div>
                        <div className="left-content-1">
                            <p>Bem-vindo a SkyStream - o teu caminho ilimitado para o entretenimento. Com o <br />
                                nosso serviço desfrute de canais de TV ao vivo, todos os jogos das principais ligas <br />
                                de desporto e tenha uma experiencia de streaming incrivel. Eleve a sua jornada <br />
                                de entretenimento com SkyStream hoje mesmo!
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
                                            <p>Apenas canais<b>desportivos</b></p>
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
                                            <p>Mais económico</p>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p>1 conexão em simultâneo</p>
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
                                            <p><strong>+2 000 Canais ao vivo (Acesso a todos os canais televisos)</strong></p>
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
                                            <p><strong>+15 000 Filmes (Acesso a novos lançamentos)</strong></p>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p><strong>+4 000 Series (Acesso a novos lançamentos)</strong></p>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p>1 conexão em simultâneo</p>
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
                                            <p>Apenas canais<b>desportivos</b></p>
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
                                            <p>Mais económico</p>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p>1 conexão em simultâneo</p>
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
                                            <p><strong>+2 000 Canais ao vivo (Acesso a todos os canais televisos)</strong></p>
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
                                            <p><strong>+15 000 Filmes (Acesso a novos lançamentos)</strong></p>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p><strong>+4 000 Series (Acesso a novos lançamentos)</strong></p>
                                        </div>
                                    </div>

                                    <div className="benefits-box">
                                        <div className="benefits">
                                            <img src={check} alt="check" width={20} />
                                            <p>1 conexão em simultâneo</p>
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

            <section className="perguntas-frequentes-container">

                <div className="perguntas-frequentes-up-container">
                    <img src={SkyLogo} alt="Sky Stream Logo" style={{ height: 400}} />
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

                        <h1>A SkyVision TV é diferente ?</h1>
                    </div>

                    <p className="description">A SkyVision TV é diferente porque oferece um vasto conteudo de streaming desde as novelas <br />
                    da GloboPlay até as series e filmes de plataformas como a netflix, HBO, Apple +, Paramount +,<br />
                    Prime Video e Disney+. Não perca nenhum evento disportivo, partida ou competição.
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