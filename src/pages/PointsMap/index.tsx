import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';
import { Map, TileLayer, Popup } from 'react-leaflet';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import ptBrLang from '../../json/language/pt-br';

import getRouteParamOfPath from '../../util/getRouteParamOfPath';

import LangFileProps from '../../json/language/interface';
import Sections from '../../components/Sections';


const PointsMap = () => {
    const [content, setContent] = useState<LangFileProps>(ptBrLang);
    const path = useLocation().pathname;
    const lang = getRouteParamOfPath(path, 0);

    const position = [51.505, -0.09, 13];

    //O espaço em branco do lado do mapa pode ser usado depois

    return(
        <>  
            <Header language={lang} onChangeLanguage={(json) => {setContent(json)}}/>
            <div id="page">
                <Sections content={[{ type: "Text", title: "PRIMEIRO NOS DIGA O QUE PROCURA", subtitle: "Colocamos os filtros aqui depois" }]}/>
                <div className="leaflet-map-container">
                    <Map center={[position[0], position[1]]} zoom={position[2]} className="leaflet-map">
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </Map>
                    <div className="leaflet-map-menu">
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default PointsMap ;