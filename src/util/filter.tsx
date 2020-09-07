import React, { useState, useEffect } from 'react';


interface filterInterface{
    onChangeQuery: (query: string) => void;
    
}
const Filter: React.FC<filterInterface>=({onChangeQuery}) => {
    const [query, setQuery] = useState<string>("");

    useEffect (() => {
        onChangeQuery(query);
    }, [query, onChangeQuery]);

    return(
        <input className="leaflet-map-container" placeholder="Filtrar por nome" value={query} onChange={(e) => {setQuery(String(e.currentTarget.value))}} ></input>
        )

}

export default Filter;