import L from 'leaflet';
import 'leaflet.awesome-markers'; //Demorou pra eu descobrir como usar isso

type MakeColor = "red" | "darkred" | "orange" | "green" | "darkgreen" | "blue" | "purple" | "darkpurple" | "cadetblue" | undefined;

//Fica mais fácil assim
export default function getLeafletIcon(tipo: number){

    let icon = "home";
    let color: MakeColor = "red";

    switch(tipo){
        case(1):
            icon = "anchor";
            color = "blue";
            break;
        case(2):
            icon = "globe";
            color = "red";
            break;
        case(3):
            icon = "compass";
            color = "green";
            break;
        default:
            icon = "home";
            color = "orange";
            break;
    }
    
    //Se a variavel tiver o mesmo nome do atributo, 
    //não é nescessário usar os dois pontos
    return L.AwesomeMarkers.icon({
        icon,
        markerColor: color,
        prefix: 'fa',
    });
};