import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import ptBrLang from '../../config/language/pt-br';

import getRouteParamOfPath from '../../util/getRouteParamOfPath';

import LangFileProps from '../../config/language/interface';
import Sections from '../../components/Sections';

const HistoryPage = () => {
    //Carregar pacote de linguagem
    const [content, setContent] = useState<LangFileProps>(ptBrLang);

    //Constantes de rota
    const path = useLocation().pathname;
    const lang = getRouteParamOfPath(path, 0);

    return(
        <>  
            <Header language={lang} onChangeLanguage={(json) => {setContent(json)}}/>
            <div id="page">
                <Sections content={content.home.content} withMarginTop={true}/>
                <Footer/>
            </div>
        </>
    );
}

export default HistoryPage;