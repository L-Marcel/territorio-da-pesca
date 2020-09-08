import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Map, TileLayer, Popup, Marker  } from 'react-leaflet';
import { FaAnchor, FaGlobe, FaCompass, FaHome, FaSearch } from 'react-icons/fa';
import Footer from '../../components/Footer';

import Header from '../../components/Header';
import ptBrLang from '../../config/language/pt-br';

import getRouteParamOfPath from '../../util/getRouteParamOfPath';
import convertUTMToDecimalPosition from '../../util/convertUTMToDecimalPosition';

import LangFileProps from '../../config/language/interface';
import getLeafletIcon from '../../config/icons';

import points from '../../config/json/pontos.json';
import { url } from 'inspector';

interface TypeProps {
    name: string;
    isActive: boolean;
}

const PointsMap = () => {
    //Carregar pacote de linguagem
    const [content, setContent] = useState<LangFileProps>(ptBrLang);

    //Constantes de rota
    const path = useLocation().pathname;
    const lang = getRouteParamOfPath(path, 0);

    //Estados
    const [filterList, setFilterList] = useState(points);
    const [filterButtons, setFilterButtons] = useState<TypeProps[]>(content.completeMap);
    const [query, setQuery] = useState("");

    //Funções
    function updateFilterButton(index: number){
        let _filterButtons = filterButtons;

        //Inverte o valor do botão apertado, como no useEffect o index é definido pelo
        //tipo, aqui não tem problema se basear apenas no index
        _filterButtons[index].isActive = !_filterButtons[index].isActive

        setFilterButtons(_filterButtons);
        updateFilter();
    }

    function updateFilter(){
        const filterItens = points.filter(function(item){
            //So vai retornar os itens que atenderem as exigências no nome e 
            //que o botão com index realacionado ao tipo esteja ativo

            //Exemplo: Tipo 1 está ativo e os demais desativados, o código irá 
            //procurar saber se o butão com index 1 - 1 (index: 0) está ativado
            if((item.Nome.toUpperCase()).includes(query.toUpperCase()) && filterButtons[item.Tipo - 1].isActive){
                return item;
            }

            //Tem sempre que retornar algo
            return false;
        });
        setFilterList(filterItens);
    }
    
    //O useEffect nem sempre atualizar perfeitamente, nesse caso, como eu usei
    //um estado com atributos (FilterButtons) e só o isActive atualiza, ele não
    //chamava o useEffect. Então, eu criei uma função que o useEffect chama quando o
    //query muda e quando a função updateFilterButton é chamada
    useEffect(updateFilter, [query]);
    
    return(
        <> 
            <Header language={lang} onChangeLanguage={(json) => {setContent(json)}}/>
            <div id="page" className="within-scroll">
                <div className="leaflet-map-container">
                    <Map center={convertUTMToDecimalPosition(["780335.79", "9438070.15"], "24M")} zoom={13} className="leaflet-map">
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            filterList.map(function(item, index){
                                return(
                                    <Marker 
                                        key={index} 
                                        position={convertUTMToDecimalPosition([item.Latitude, item.Longitude], item.Zona)} 
                                        icon={getLeafletIcon(item.Tipo)} //Da uma olhada nessa função
                                    >
                                        <Popup>{item.Nome}</Popup>
                                    </Marker>
                                ); 
                            })
                        }
                    </Map>
                    <nav className="leaflet-map-menu">
                        <div className="wrapper">
                            <FaSearch size={25}/>
                            <input
                                value={query} 
                                onChange={(e) => {setQuery(String(e.currentTarget.value))}}
                                placeholder="Buscar por nome"
                            />
                        </div>
                        <div className="filter-button-container">
                        {
                            filterButtons.map(function(item, index){
                                let ButtonIcon = FaAnchor;

                                switch(index + 1){
                                    case(1):
                                        ButtonIcon = FaAnchor;
                                        break;
                                    case(2):
                                        ButtonIcon = FaGlobe;
                                        break;
                                    case(3):
                                        ButtonIcon = FaCompass;
                                        break;
                                    default:
                                        ButtonIcon = FaHome;
                                        break;
                                }

                                return(
                                    <button 
                                        className={!item.isActive? `filter-button button-type-${index + 1}`:`filter-button button-type-${index + 1}-active`}
                                        key={index} 
                                        onClick={() => { updateFilterButton(index) }}
                                    >
                                        <ButtonIcon size={25}/>
                                        <div>
                                            {item.name}
                                        </div>
                                    </button>
                                );
                            })
                        }
                        </div>
                    </nav>
                </div>
                <Footer needResume/>
            </div>
        </>
    );
}

export default PointsMap ;