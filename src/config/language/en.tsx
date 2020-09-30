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
        name: "Complete Map",
        route: "/en/map"
    },
    completeMap: [
        {  
            name: "Pesca Artesanal",
            isActive: true
        },
        {  
            name: "Serviços Urbanos",
            isActive: true
        },
        {  
            name: "Turismo",
            isActive: true
        },
    ],
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
    },
    historyPage: [
        {
            type: "Text",
            title: "NOSSO OBJETIVO",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            type: "Text",
            title: "NOSSO OBJETIVO",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ],
    notFound: {
        title: "PÁGINA NÃO EXISTE - ERRO 404",
        subtitle: "Desculpa, não encontramos a página que você está procurando.",

    }
}

export default enLang;