import { LatLngExpression } from "leaflet";

interface Position { 
    [0]: string;
    [1]: string;
}

//Recebe vetor de string e retorna vetor de numeros
export default function convertUTMToDecimalPosition(position: Position, zone: string): LatLngExpression {
    //Não é compativel com import
    const utm = require('utm');

    try {
        let zoneNumber = Number(zone.substr(0, 2));
        let zoneLetter= zone.substr(2, 1);
        let lat = parseFloat(position[0]);
        let lon = parseFloat(position[1]);

        
        let result = utm.toLatLon(lat, lon, zoneNumber, zoneLetter);
        return [result.latitude, result.longitude];
    } catch(err) {
        return [0, 0];
    }
}