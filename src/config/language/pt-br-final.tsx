import LangFileProps from './interface';

import imgProjeto1 from '../../assets/img/content/projeto_1.jpg';
import imgProjeto2 from '../../assets/img/content/projeto_2.jpg';
import imgProjeto3 from '../../assets/img/content/projeto_3.jpg';

import imgProjeto4 from '../../assets/img/content/projeto_4.jpg';
import imgProjeto5 from '../../assets/img/content/projeto_5.jpg';
import imgProjeto6 from '../../assets/img/content/projeto_6.jpg';

import imgProjeto7 from '../../assets/img/content/projeto_7.jpg';
import imgProjeto8 from '../../assets/img/content/projeto_8.jpg';
import imgProjeto9 from '../../assets/img/content/projeto_9.jpg';

const ptBrLang = {
    header: [
        {
            name: "Inicio",
            route: "/pt-br/home"
        }
    ],
    headerButton: {
        name: "Mapa Completo",
        route: "/pt-br/map"
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
        title: "BEM-VINDO",
        subtitle: "AO PROJETO DE EXTENSÃO TERRITÓRIOS DA PESCA",
        button: [
            {
                text: "Sobre o projeto",
                route: "#1"
            },
            {
                text: "Cartografia social",
                route: "#2"
            },
            {
                text: "Curso",
                route: "#3"
            },
            {
                text: "Oficina: economia solidária",
                route: "#4"
            },
            {
                text: "Canais de dialogo",
                route: "#5"
            },
        ],
        content: [
            {
                idName: "1",
                type: "Text",
                title: "Sobre o projeto",
                subtitle: "\tO projeto, ao longo de seus meses de execução (Maio a Novembro do ano de 2019), pôs em prática com excelência todas as suas metas que visavam contribuir e favorecer a(s) comunidade(s) pesqueira(s) da Reserva de Desenvolvimento Sustentável Estadual Ponta do Tubarão – ‘’RDSEPT’’ em vários aspectos.\n\n\tNesse âmbito, realizou-se algumas atividades que contribuíram para o desenvolvimento da reserva. As principais atividades realizadas foram: a cartografia social, o curso de confecção de rede de pesca, mapeamento de trilhas, associativismo (por meio de reuniões havendo a mobilização da comunidade e de representantes de órgão importantes da ‘’RDSEPT’’), empreendedorismo (fornecido por meio da oficina de cooperativismo com artesãs) e os fortalecimentos de redes institucionais, como irá ser mostrado a seguir."
            },
            {
                idName: "2",
                type: "Images",
                title: "Cartografia Social",
                subtitle: "\tPrimeiro, houve uma mobilização da comunidade para participar da ação de cartografia social, fazendo o mapeamento dos locais de moradia, lazer, economia e subsistência. Em paralelo, identificou-se as práticas e/ou organizações coletivas já existentes no território, análise da capacidade técnica e associativa dessas práticas e identificação de práticas culinárias e gastronômicas que estavam associadas à pesca artesanal.",
                images: [
                    {
                        src: imgProjeto1,
                        filter: "Campus Macau com a comunidade da ‘’RDSEPT’’ para haver a mobilização da comunidade e realizar-se a Cartografia Social",
                        title: "Encontro de professores do IFRN"
                    },
                    {
                        src: imgProjeto2,
                        filter: "Mostra algumas explicações feitas por membros do projeto (Professores de história e geografia) para que em seguida, começasse a produção da Cartografia Social.  ",
                        title: "Auxilio dos professores"
                    },
                    {
                        src: imgProjeto3,
                        filter: "Mapeamento feito junto com a comunidade para a realização do mapa cartográfico explicativo que está presente no nosso site.",
                        title: "Interação com a comunidade"
                    }
                ]
            },
            {
                idName: "3",
                type: "Images",
                title: "CURSO DE CONFECÇÃO DE REDES DE PESCA",
                subtitle: "\tCada participante recebeu instruções e praticou a confecção tradicional de redes de pesca. Todavia, os primeiros itens produzidos foram peças de artesanato em linha de algodão, como bolsas e utensílios domésticos, evoluindo para apetrechos de pesca em linha de nylon como redes e tarrafa. Como se tratou de uma oficina, os participantes completaram carga horária variando de 24 a 68 horas.",
                images: [
                    {
                        src: imgProjeto4,
                        filter: "Mostra as participantes. Algumas já tinham conhecimento na área, mas mesmo assim, o curso serviu para aprimorar ainda mais seus conhecimentos.",
                        title: "Participantes"
                    },
                    {
                        src: imgProjeto5,
                        filter: "Desenvolvimento de apetrechos de pesca.",
                        title: "Produção"
                    },
                    {
                        src: imgProjeto6,
                        filter: "Obtenção de certificados no evento IFRN in LOCO (dezembro de 2019).",
                        title: "Resultado"
                    }
                ]
            },
            {
                idName: "4",
                type: "Images",
                title: "OFICINA DE COOPERATIVISMO FEITA COM ARTESÃS (ECONOMIA SOLIDÁRIA)",
                subtitle: "\tA Economia Solidária, fez com que o grupo criasse identidade no território da RDS Ponta do Tubarão, por meio de atividades de assessoramento e incubação. Todavia, o objetivo foi a consolidação e a reorganização de seu grupo, já que elas já eram um grupo com uma perícia no artesanato. Sendo assim, isso foi feito de forma que gerou-se um bem estar nas artesãs e uma renda. Contudo, também fez com que elas gerassem um desenvolvimento econômico, que foi construído de uma forma igualitária e econômica.",
                images: [
                    {
                        src: imgProjeto7,
                        filter: "Reunião na qual as artesãs aprenderam os fundamentos da Economia Solidária, onde também aprendeu-se sobre a autogestão.",
                        title: "Reunião de sensibilização"
                    },
                    {
                        src: imgProjeto8,
                        filter: "Produção de chapéus (nomeado como: ‘’fábrica de chapéus’’).",
                        title: "Produção"
                    },
                    {
                        src: imgProjeto9,
                        filter: "Realização da “fábrica de chapéus”, onde dividiu-se os grupos, e as artesãs formaram ficticiamente alguns empreendimentos.",
                        title: "Resultado"
                    }
                ]
            },
            {
                idName: "5",
                type: "Text",
                title: "ESTABELECIMENTO DE CANAIS DE DIÁLOGO COM PERIODICIDADE CONSTANTE: ENVOLVIMENTO INTERINSTITUCIONAL NAS ESFERAS MUNICIPAL, ESTADUAL E FEDERAL",
                subtitle: "\tPor conta desta reunião, foi possível entender o estado atual de rede, como ela opera e trabalha. E a partir disso, participar mais intensamente na colaboração das atividades e principalmente proposição e construção de iniciativas para a comunidade da RDS. A participação nesta Audiência Pública, juntamente com os pescadores locais da RDS Ponta de Tubarão, de Macau e Guamaré, permitiu uma maior integração com a comunidade pesqueira da área atendida pelo IFRN - Campus Macau.\n\n\tAlém disso, o debate com presença de comunidades pesqueiras de todo o Estado, foi realizado em parceria com a Rede Mangue Mar e apontou desde como os problemas do meio ambiente que prejudicam o trabalho dos pescadores, a desvalorização da pesca artesanal e mariscagem, de como a falta de dados oficiais camuflam a importância econômica e de subsistência da pesca artesanal, e questões relativas a tradicionalidade e necessidade de resgate histórico e conservação de algumas comunidades pesqueiras.",
            },
        ]
    },
    notFound: {
        title: "ERRO 404",
        subtitle: "Desculpa, não encontramos a página que você está procurando.",
        content: [
            {
                idName: "rdspt",
                type: "Text",
                title: "Que desastre!!!",
                subtitle: "\tPedimos desculpas pelo incoveniente, se o problema persistir, não exite em entrar em contato conosco atravez das redes sociais. Esperamos que isso não volte a acontecer!",
            },
        ]
    }
}

export default ptBrLang;