import L from 'leaflet';
import 'leaflet.awesome-markers'; //Demorou pra eu descobrir como usar isso

type MakeColor = "red" | "darkred" | "orange" | "green" | "darkgreen" | "blue" | "purple" | "darkpurple" | "cadetblue" | undefined;

export default function getLeafletIcon(name: string, color: MakeColor){
    return L.AwesomeMarkers.icon({
        icon: name,
        markerColor: color,
        prefix: 'fa',
    });
};