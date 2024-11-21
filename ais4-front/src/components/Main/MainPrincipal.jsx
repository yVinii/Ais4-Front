import React from 'react'
import ButtonCreateProject from './ButtonCreateProject';
import './MainStyles/main_style.css';
const MainPrincipal = () => {
  return (
    <>
      <section>
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
    </>
  )
}

export default MainPrincipal;