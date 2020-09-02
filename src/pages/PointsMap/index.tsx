import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Map, TileLayer, Popup, Marker  } from 'react-leaflet';
import Footer from '../../components/Footer';

import Header from '../../components/Header';
import ptBrLang from '../../config/language/pt-br';

import getRouteParamOfPath from '../../util/getRouteParamOfPath';

import LangFileProps from '../../config/language/interface';
import Sections from '../../components/Sections';
import getLeafletIcon from '../../config/icons';

const PointsMap = () => {
    const [content, setContent] = useState<LangFileProps>(ptBrLang);
    const path = useLocation().pathname;
    const lang = getRouteParamOfPath(path, 0);
    const position = [-5.11127, -36.6261, 15];

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
                        
                        <Marker position={[-5.110568, -36.626979]} icon={getLeafletIcon("home", "blue")}>
                            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                        </Marker>
                        <Marker position={[-5.110568, -36.625959]} icon={getLeafletIcon("coffee", "red")}>
                            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                        </Marker>
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