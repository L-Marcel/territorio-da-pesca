import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import LangFileProps from '../../config/language/interface';

import getLanguageFile, { langOptions } from '../../util/getLanguageFile';

import ptBrLang from '../../config/language/pt-br';

import logoWhiteImg from '../../assets/img/logo-white.png';

export interface LangProps {
    type: "Lang",
    name: string,
    endName?: string;
    param: string,
    json: LangFileProps
}

export interface LangGroupProps {
    type: "Group",
    name: string;
    options: LangProps[]
}

interface HeaderProps {
    language: string;
    scrolled?: boolean;
    onChangeLanguage: (json: LangFileProps) => void;
}

const Header: React.FC<HeaderProps> = ({ language, scrolled, onChangeLanguage }) => {
    const [lang, setLang] = useState<LangProps>({
        type: "Lang",
        name: "Brasil",
        endName: "Português - Brasil",
        param: "pt-br",
        json: ptBrLang
    });

    const history = useHistory();
    const path = history.location.pathname.split('/');

    const startScrolled = scrolled? scrolled:false;

    useEffect(() => {
        const value = getLanguageFile(language);
        setLang(value);

        onChangeLanguage(value.json);
    }, [language, onChangeLanguage]);

    return(
        <header id="header" className={!startScrolled? `fixed-top`:`fixed-top header-scrolled`}>
            <div className="container d-flex align-items-center justify-space-between">
                <h1 className="logo mr-auto">
                    <a href="http://localhost:3000/pt-br/home">
                        <img src={logoWhiteImg}></img>
                    </a>
                </h1>
                <div className="nav-menu-container">
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            { lang.json.header.map(function(item, index){
                                return(
                                    <li key={index} className={item.route === history.location.pathname.split('#')[0]? "active":""}>
                                        <Link to={item.route} onClick={() => {
                                            window.scrollTo(0, 0);
                                        }}>
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            }) }
                            <li className="drop-down"><Link to={history.location.pathname}>{lang.endName? lang.endName:lang.name}</Link>
                                <ul>
                                    { langOptions.map(function(item, index){
                                        if(item.type === "Lang"){
                                            const value = getLanguageFile(item.param);

                                            let newRoute = `/${value.param}`;
                                            for(let x = 2; x < path.length; x++){
                                                newRoute = newRoute + "/" + path[x] 
                                            }

                                            return(
                                                <li key={index}>
                                                    <Link
                                                        className="dropdown-buttons"
                                                        to={newRoute} 
                                                        onClick={() => { setLang(value) }}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            );
                                        }else{
                                            const value = getLanguageFile(item.options[0].param);

                                            let newRoute = `/${value.param}`;
                                            for(let x = 2; x < path.length; x++){
                                                newRoute = newRoute + "/" + path[x] 
                                            }
                                            
                                            return(
                                                <li key={index} className="drop-down"><Link className="dropdown-buttons" to={newRoute}>{item.name}</Link>
                                                    <ul>
                                                        { item.options.map(function(item, index){
                                                            const value = getLanguageFile(item.param);

                                                            let newRoute = `/${value.param}`;
                                                            for(let x = 2; x < path.length; x++){
                                                                newRoute = newRoute + "/" + path[x] 
                                                            }

                                                            return(
                                                                <li key={index}>
                                                                    <Link 
                                                                        className="dropdown-buttons"
                                                                        to={newRoute}
                                                                        onClick={() => { setLang(value) }}
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                </li>
                                                            );
                                                        }) }
                                                    </ul>
                                                </li>
                                            );
                                        }
                                    }) }
                                </ul>
                            </li>
                            <li className={lang.json.headerButton.route === history.location.pathname? "active":""}>
                                <Link to={lang.json.headerButton.route}>
                                    {lang.json.headerButton.name}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;