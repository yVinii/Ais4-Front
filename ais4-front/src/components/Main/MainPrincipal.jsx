import React from 'react'
import ButtonCreateProject from './ButtonCreateProject';
import './MainStyles/main_style.css';
import './MainStyles/cardprice_style.css';
import Faq from "./FAQ";

const MainPrincipal = () => {
  return (
    <>
      <section className='main'>
        <div className="container-main">
            <div className="container-text">
                <div className="container-tittle">
                    <h1>Crie e <span className="span-tittle" >Inove</span> em</h1>
                    <h2>grandes projetos com nossa <span className="span-tittle">plataforma</span></h2>
                </div>
                <div className="sub-tittle">
                    <h2>
                        Somos uma rede de IAs semi-autonomas, <br/> capazes de perseguir objetivos proativamente, <br/> criando e conduzindo projetos para o sucesso.
                    </h2>
                    <div className='subtitle-div-button'>
                        <ButtonCreateProject />
                    </div>
                </div>
            </div>
            <div className="container-iframe">
                <iframe src="https://www.youtube.com/embed/ymuBowcODVU?si=cL-q_e3yiy0-IGa7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
      </section>
      <section className='form'>
      <div className="container-form">
            <div className="container-oval-txt">
                <h1>Vamos Começar?</h1>
                <h2>Apenas preencha o formulário e comece seu projeto junto com a <span className="span-tittle">Ais4.Life</span></h2>
            </div>
            <div className="container-panel-form">
              <form>
                <div className="form-group">
                  <label htmlFor="fullName">Nome Completo:</label>
                  <input type="text" id="fullName" name="fullName" className="input-form" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" className="input-form" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="idea">Qual sua ideia ou desafio:</label>
                  <textarea id="idea" name="idea" className="input-area-form"></textarea>
                </div>
                
                <div className="checkbox-group">
                  <input type="checkbox" id="terms" name="terms" className='checkbox-form'/>
                  <label htmlFor="terms">Concordo com os <a href="">termos de uso</a></label>
                </div>
                
                <div className="button-group">
                  <button type="button" className="btn-submit-form">Crie seu Primeiro Workspace</button>
                </div>
              </form>
            </div>
        </div>
      </section>
      <section className='planos'>
          <div className="container-planos">
            <div className="container-planos-tittle">
              <h1>- Nossos Planos -</h1>
            </div>
            <div className="container-card-planos">
                <div className="plan-card">
                  <h2>Free<span>Para uso pessoal gratuito</span></h2>
                  <div className="etiquet-price">
                    <p>xxx.xx</p>
                    <div />
                  </div>
                  <div className="etiquet-price anual">
                    <p>xxx.xx</p>
                    <div />
                  </div>
                  <div className="benefits-list">
                    <ul>
                      <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                        </svg><span>Analysis</span></li>
                      <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                        </svg><span>Consulting</span></li>
                        <li><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="3" fill="transparent" />
                            <line x1="30" y1="30" x2="70" y2="70" stroke="black" strokeWidth="5" />
                            <line x1="70" y1="30" x2="30" y2="70" stroke="black" strokeWidth="5" />
                          </svg><span>Facilitate</span></li>
                        <li><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="3" fill="transparent" />
                            <line x1="30" y1="30" x2="70" y2="70" stroke="black" strokeWidth="5" />
                            <line x1="70" y1="30" x2="30" y2="70" stroke="black" strokeWidth="5" />
                          </svg><span>Facilitate</span></li>
                        <li><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="3" fill="transparent" />
                            <line x1="30" y1="30" x2="70" y2="70" stroke="black" strokeWidth="5" />
                            <line x1="70" y1="30" x2="30" y2="70" stroke="black" strokeWidth="5" />
                          </svg><span>Facilitate</span></li>
                      <li><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="3" fill="transparent" />
                            <line x1="30" y1="30" x2="70" y2="70" stroke="black" strokeWidth="5" />
                            <line x1="70" y1="30" x2="30" y2="70" stroke="black" strokeWidth="5" />
                          </svg><span>Facilitate</span></li>
                    </ul>
                  </div>
                  <div className="button-get-plan">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-rocket">
                        <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z" />
                      </svg>
                      <span>SAIBA MAIS</span>
                    </a>
                  </div>
                </div>
                <div className="plan-card">
                  <h2>Pessoal<span>Para uso pessoal com vantagens</span></h2>
                  <div className="etiquet-price">
                    <p>xxx.xx</p>
                    <div />
                  </div>
                  <div className="etiquet-price anual">
                    <p>xxx.xx</p>
                    <div />
                  </div>
                  <div className="benefits-list">
                    <ul>
                      <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                        </svg><span>Analysis</span></li>
                      <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                        </svg><span>Consulting</span></li>
                      <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                        </svg><span>Facilitate</span></li>
                        <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                        </svg><span>Facilitate</span></li>
                        <li><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="3" fill="transparent" />
                            <line x1="30" y1="30" x2="70" y2="70" stroke="black" strokeWidth="5" />
                            <line x1="70" y1="30" x2="30" y2="70" stroke="black" strokeWidth="5" />
                          </svg><span>Facilitate</span></li>
                        <li><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="3" fill="transparent" />
                            <line x1="30" y1="30" x2="70" y2="70" stroke="black" strokeWidth="5" />
                            <line x1="70" y1="30" x2="30" y2="70" stroke="black" strokeWidth="5" />
                          </svg><span>Facilitate</span></li>
                    </ul>
                  </div>
                  <div className="button-get-plan">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-rocket">
                        <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z" />
                      </svg>
                      <span>SAIBA MAIS</span>
                    </a>
                  </div>
                </div>
                <div className="plan-card">
                  <h2>Empresa<span>Para serviços empresariais</span></h2>
                  <div className="etiquet-price">
                    <p>xxx.xx</p>
                    <div />
                  </div>
                  <div className="etiquet-price anual">
                    <p>xxx.xx</p>
                    <div />
                  </div>
                  <div className="benefits-list">
                    <ul>
                      <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                        </svg><span>Analysis</span></li>
                      <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                        </svg><span>Consulting</span></li>
                      <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                        </svg><span>Facilitate</span></li>
                      <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                        </svg><span>Facilitate</span></li>
                      <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                        </svg><span>Facilitate</span></li>
                      <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                        </svg><span>Facilitate</span></li>
                    </ul>
                  </div>
                  <div className="button-get-plan">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-rocket">
                        <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z" />
                      </svg>
                      <span>SAIBA MAIS</span>
                    </a>
                  </div>
                </div>
              </div>
          </div>
      </section>
      <Faq />
    </>
  )
}

export default MainPrincipal;