import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import ptBrLang from '../../config/language/pt-br';

import getRouteParamOfPath from '../../util/getRouteParamOfPath';

import LangFileProps from '../../config/language/interface';
import Sections from '../../components/Sections';

const RoutesPage = () => {
    //Carregar pacote de linguagem
    const [content, setContent] = useState<LangFileProps>(ptBrLang);

    //Constantes de rota
    const path = useLocation().pathname;
    const lang = getRouteParamOfPath(path, 0);

    return(
        <>  
            <Header language={lang} onChangeLanguage={(json) => {setContent(json)}}/>
            <div id="page">
                <section id="hero" className="d-flex align-items-center section-half">

                    <div className="container" data-aos="zoom-out" data-aos-delay="100">
                    <div className="row">
                        <div className="col-xl-6">
                            <h1>{content.routesPage.title}</h1>
                            <h2 className="margin-bottom">{content.routesPage.subtitle}</h2>
                            { content.routesPage.button.map(function(item, index){
                                return(
                                    <Link key={index} to={item.route} className="btn-get-started alt-bg-color button-home scrollto">{item.text}</Link>
                                );
                            }) }
                        </div>
                    </div>
                    </div>

                </section>
                <Sections content={content.routesPage.content} withMarginTop={false}/>
                <Footer/>
            </div>
        </>
    );
}

export default RoutesPage;