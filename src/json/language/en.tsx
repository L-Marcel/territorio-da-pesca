import LangFileProps from './interface';

const enLang: LangFileProps = {
    header: [
        {
            name: "Home",
            route: "/en/home"
        },
        {
            name: "History",
            route: "/en/history"
        },
        {
            name: "Projects",
            route: "/en/projects"
        },
        {
            name: "Trails and Tourism",
            route: "/en/routes"
        }
    ],
    headerButton: {
        name: "Map",
        route: "/en/map"
    },
    home: {
        title: "WELLCOME",
        subtitle: "AO TERRITÓRIO DA PESCA",
        button: [
            {
                text: "Nosso objetivo",
                route: "#objective"
            },
            {
                text: "Parcerias",
                route: "#partnerships"
            }
        ],
        content: [
            {
                type: "Text",
                title: "NOSSO OBJETIVO",
                subtitle: " Projeto Rede Cidadã no Barco Solidário tem o objetivo de dinamizar a " + 
                "cadeia produtiva das comunidades pesqueiras da Reserva de Desenvolvimento Sustentável" +
                " Estadual Ponta do Tubarão/RN em possibilidades vivenciadas de geração de renda e oportunidade  " +
                " de trabalho.",
            }
        ]
    }
}

export default enLang;