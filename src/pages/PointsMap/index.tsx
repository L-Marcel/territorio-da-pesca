import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Map, TileLayer, Popup, Marker  } from 'react-leaflet';
import Footer from '../../components/Footer';

import Header from '../../components/Header';
import ptBrLang from '../../config/language/pt-br';

import getRouteParamOfPath from '../../util/getRouteParamOfPath';
import convertUTMToDecimalPosition from '../../util/convertUTMToDecimalPosition';

import LangFileProps from '../../config/language/interface';
import Sections from '../../components/Sections';
import getLeafletIcon from '../../config/icons';

import points from '../../config/json/pontos.json'; 
import Filter from '../../util/filter';


const PointsMap = () => {
    const [content, setContent] = useState<LangFileProps>(ptBrLang);
    const path = useLocation().pathname;
    const lang = getRouteParamOfPath(path, 0);
    const [list, setList] = useState(points);
    const [filterList, setFilterList] = useState(list);
    const [query, setQuery] = useState("");
    const type1 = list.filter(function(item){
        if(item.Tipo===1){
            return item;
        }
    });
    const type2 = list.filter(function(item){
        if(item.Tipo===2){
            return item;
        }
    });
    const type3 = list.filter(function(item){
        if(item.Tipo===3){
            return item;
        }
    });
    
    useEffect (() =>{
        
        const filterItens = list.filter(function(item){
            if((item.Nome.toUpperCase()).includes(query.toUpperCase())){
                return item;
            }
        }
)
        setFilterList(filterItens);
    }, [query]);
    
    return(
        <> 
            <Header language={lang} onChangeLanguage={(json) => {setContent(json)}}/>
            <div id="page">
                <div className="leaflet-map-container">
                    <div className="leaflet-map-menu">
                        <nav>
                            <Filter onChangeQuery={(value : string) => {setQuery(value)}}/>
                            <br/>    
                            <ul>
                                <li><a href="#" onClick={() => setFilterList(list)}>Tipo</a>
                                    <ul>
                                        <li><a href="#1"  onClick={() => setFilterList(type1)}>Turismo</a></li>
                                        <li><a href="#2" onClick={() => setFilterList(type2)}>Pesca artesanal</a></li>
                                        <li><a href="#3" onClick={() => setFilterList(type3)}>Serviços urbanos</a></li>
                                    </ul>
                                </li>
                                <li><a>Ordenar de A a Z</a></li>
                            </ul>
                        </nav>
                    </div>
                    <Map center={convertUTMToDecimalPosition(["780335.79", "9438070.15"], "24M")} zoom={13} className="leaflet-map">
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        
                        {
                            filterList.map(function(item, index){
                                if(item.Tipo===1){
                                    return(
                                        <Marker key={index} position={convertUTMToDecimalPosition([item.Latitude, item.Longitude], item.Zona)} icon={getLeafletIcon("home", "red")}>
                                            <Popup>{item.Nome}</Popup>
                                        </Marker>
                                    
                                    ); 
                                }
                                if(item.Tipo===2){
                                    return(
                                        <Marker key={index} position={convertUTMToDecimalPosition([item.Latitude, item.Longitude], item.Zona)} icon={getLeafletIcon("home", "blue")}>
                                            <Popup>{item.Nome}</Popup>
                                        </Marker>
                                    
                                    ); 
                                }
                                if(item.Tipo===3){
                                    return(
                                        <Marker key={index} position={convertUTMToDecimalPosition([item.Latitude, item.Longitude], item.Zona)} icon={getLeafletIcon("home", "green")}>
                                            <Popup>{item.Nome}</Popup>
                                        </Marker>
                                    
                                    ); 
                                }
                                
                            })
                        }
                    </Map>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default PointsMap ;