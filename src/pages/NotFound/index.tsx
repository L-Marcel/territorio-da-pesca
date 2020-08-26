import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import ptBrLang from '../../json/language/pt-br';

import getRouteParamOfPath from '../../util/getRouteParamOfPath';

import LangFileProps from '../../json/language/interface';

const NotFound = () => {
    const [content, setContent] = useState<LangFileProps>(ptBrLang);

    const path = useLocation().pathname;
    const lang = getRouteParamOfPath(path, 0);

    return(
        <>  
            <Header language={lang} onChangeLanguage={(json) => { setContent(json) }}/>
            <div id="page">
                <Footer/>
            </div>
        </>
    );
}

export default NotFound;