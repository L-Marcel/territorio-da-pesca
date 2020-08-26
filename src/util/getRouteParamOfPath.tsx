export default function getRouteParamOfPath(path: string, index: number){
    const param = path.split('/');
    return param[index + 1];
}