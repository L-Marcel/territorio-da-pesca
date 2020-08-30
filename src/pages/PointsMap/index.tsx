import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Map, TileLayer, Popup, Marker  } from 'react-leaflet';
import Footer from '../../components/Footer';

import Header from '../../components/Header';
import ptBrLang from '../../json/language/pt-br';

import getRouteParamOfPath from '../../util/getRouteParamOfPath';

import LangFileProps from '../../json/language/interface';
import Sections from '../../components/Sections';

import { FaBeer } from 'react-icons/fa';
import L from 'leaflet';


const PointsMap = () => {
    const [content, setContent] = useState<LangFileProps>(ptBrLang);
    const path = useLocation().pathname;
    const lang = getRouteParamOfPath(path, 0);
    const position = [-5.11127, -36.6261, 15];
    const icon = L.icon({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
   })

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
                        
                        <Marker position={[-5.110568, -36.626979]} icon={icon} >
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