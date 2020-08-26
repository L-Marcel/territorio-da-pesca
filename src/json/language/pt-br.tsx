import LangFileProps from './interface';

import imgExemplo from '../../assets/img/portfolio/portfolio-1.jpg';

const ptBrLang: LangFileProps = {
    header: [
        {
            name: "Inicio",
            route: "/pt-br/home"
        },
        {
            name: "História",
            route: "/pt-br/history"
        },
        {
            name: "Projetos",
            route: "/pt-br/projects"
        },
        {
            name: "Trilhas e Turismo",
            route: "/pt-br/routes"
        }
    ],
    headerMapButtonName: "Mapa",
    home: {
        title: "BEM-VINDO",
        subtitle: "AO TERRITÓRIO DA PESCA",
        button: [
            {
                text: "Nosso objetivo",
                route: "#objective"
            },
            {
                text: "Parcerias",
                route: "#partnerships"
            },
            {
                text: "Parcerias",
                route: "#partnerships"
            },
            {
                text: "Parcerias",
                route: "#partnerships"
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
                subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
                type: "Text",
                title: "NOSSO OBJETIVO",
                subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
                type: "Images",
                title: "Exemplo de imanges",
                subtitle: "Exemple",
                images: [
                    {
                        src: imgExemplo,
                        filter: "Exemplo",
                        title: "Exemplo"
                    },
                    {
                        src: imgExemplo,
                        filter: "Exemplo",
                        title: "Exemplo"
                    },
                    {
                        src: imgExemplo,
                        filter: "Exemplo",
                        title: "Exemplo"
                    }
                ]
            },
        ]
    }
}

export default ptBrLang;