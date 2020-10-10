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
        },
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
    },
    historyPage: {
        title: "HISTÓRIA",
        subtitle: "DA RESERVA DE DESENVOLVIMENTO SUSTENTÁVEL PONTA DO TUBARÃO (RDSPT)",
        button: [
            {
                text: "O que é a RDSPT?",
                route: "#rdspt"
            },
            {
                text: "Sua origem",
                route: "#origem"
            },
            {
                text: "Como era antes?",
                route: "#antes"
            },
            {
                text: "Conflitos",
                route: "#conflitos"
            },
            {
                text: "Lendas",
                route: "#lendas"
            }
        ],
        content: [
            {
                idName: "rdspt",
                type: "Text",
                title: "O que é a RDSPT?",
                subtitle: "\tA Reserva de Desenlvolvimento Sustentável Ponta do Tubarão é um espaço geográfico que tem como objetivo preservar diferentes espécies animais e vegetais da intervenção de indivíduos com finalidades destrutivas. Porém, isso não significa que não há lugar para a vida humana, afinal, esse ambiente grande e rico de belezas naturais irá te acolher de braços abertos, contanto que respeite as regras do convivio com a natureza.",
            },
            {
                idName: "origem",
                type: "Text",
                title: "Origem",
                subtitle: "\tLocalizada na praia de Diogo Lopes, essa reserva foi criada pela lei estadual nº 8.349 de 18 de julho de 2003 e compreende um território de 12.960 hectares, abrangendo áreas dos municípios de Macau e Guamaré. Sua formação decorreu da iniciativa das comunidades locais, que desejavam a área como forma de preservar a cultura da pesca artesanal, o manguezal e a restinga sem interferir nas condições e os meios necessários para a melhoria e a manutenção da qualidade de vida das populações tradicionais.",
            },
            {
                idName: "antes",
                type: "Text",
                title: "Como era antes?",
                subtitle: "\tAntes mesmo da criação de uma RDS, a população de Diogo Lopes sempre foi muito apegada ao seu chão, mas não havia ganância pelas terras. A população entendia que tudo era de todos e que todos deviam zelar pelo que tinham. A “restinga”, como era chamada pela população, sempre foi utilizada pelos próprios moradores, pescadores do lugar e de fora, e reconhecida como um lugar de pesca e de lazer, utilizando os mares para banhos, para se passar o dia ou até mesmo para desembarques de pescadores na safra da atividade pesqueira. \n\n\tPor volta da década de 50, famílias passavam a época da safra morando na restinga ou na Ilha do Tubarão. Dona Izabel (Bebê), que viveu na comunidade até os 102 anos, quando criança morou nesta ilha. Na década de 90, o pescador João Maria Figueiredo construiu um rancho na restinga e foi morar lá com sua família. Em 95, esse mesmo pescador falou para a comunidade que a restinga tinha dono e ele era o vigia. Os ranchos ali construídos eram utilizados por todos, não importava quem realmente era o dono. Porém, nesse mesmo ano, o rancho de Dona Lelé e Ribinha foi queimado. Após o acontecido, os moradores descobriram que, no dia anterior a esse acontecimento, pessoas desconhecidas haviam passado pela cidade. Desconfiou-se de italianos porque, no local do incêndio havia marcas de pneus de carro. Esse fato revoltou a população que, com isso, resolveu colocar ordem na cidade, garantindo suas áreas. Após revoltas em virtude dos novos habitantes chegados em sua cidade, os moradores resolveram criar a APA (Área de Preservação Ambiental) através do acionamento de alguns conhecimentos. O SNUC, no entanto, mostrou que mais adequado para essa realidade seria a criação de uma Reserva de Desenvolvimento Sustentável e não uma APA. Assim, a população decidiu por uma RDS. \n\n\tA minuta do decreto da criação da Reserva foi encaminhada ao Conselho Estadual do Meio Ambiente - CONEMA para ser apreciado e votado no dia 30 de abril de 2003. Nesse momento, as comunidades estavam presentes em peso, contando com mais de 120 pessoas. De forma inédita, o CONEMA aprovou um decreto posto em pauta no mesmo dia e por unanimidade. No dia 05 de junho de 2003, durante um terceiro encontro, a governadora Wilma de Farias assinou o Projeto de Lei da Criação da Reserva e o encaminhou à Assembleia Legislativa. Em 18 de julho, o Projeto de Lei foi posto para aprovação pela Assembleia Legislativa, ocasião na qual mais uma vez as populações estavam presentes. Sensíveis à presença de cerca de 150 pessoas que vieram solicitar aos deputados que estes fizessem sua parte, os parlamentares, através de suas lideranças, também por unanimidade aprovaram o Projeto de Lei, sendo então criada a Reserva de Desenvolvimento Sustentável Estadual Ponta do Tubarão, a primeira do Rio Grande do Norte e a terceira do Brasil. Atualmente, a área da reserva abrange os municípios de Macau e Guamaré. As maiores comunidades constituídas são Diogo Lopes, Barreiras e Sertãozinho, pertencentes a Macau, e Lagoa Doce, Mangue Seco I e Mangue Seco II, pertencentes a Guamaré.",
            },
            {
                idName: "conflitos",
                type: "Text",
                title: "Conflitos",
                subtitle: "\tOs ataques à região sempre tiveram a participação de empresários, pois estes estavam visando utilizar os recursos da área. Empresários estrangeiros tentaram se instalar na região, com o risco de provocar degradação ambiental em virtude do uso inadequado dos recursos naturais. Entre essas ameaças, um grupo de empresários italianos planejava construir um hotel no estuário da reserva, ameaçando assim o estilo já existente de vida dos habitantes e a pesca artesanal realizada na área. Outros empresários também tentaram utilizar de forma incorreta a reserva, como foi o caso de uma empresária que no final do ano de 1999 desgastou 4 hectares de manguezal para a criação de viveiros de camarão, afetando a fauna e a flora que predominam na região."
            },
            {
                idName: "lendas",
                type: "Text",
                title: "Lendas",
                subtitle: "\tMesmo com os vários conflitos pelos quais passou o território, ele não escapou das famosas lendas, que estavam sempre presentes em virtude de se tratar de comunidades pequenas com grande interação entre as gerações. Uma característica muito interessante do folclore das comunidades da RDS são os causos, que tratam de um acontecimento fantástico, cheio de mistério. Esses causos costumam contar histórias que além de terem como objetivo enriquecer a cultura local, também servem para transmitir ideias e principalmente ensinamentos.  Segundo os antigos, um dos causos mais populares que amedrontam o povo da Ponta do Tubarão era “O Homem da Barra”. Segundo o sr. Ribeiro, quando os pescadores vinham do mar e entravam na barra, viam aquele homem de pé, em cima das dunas, com a “mão estirada” para quem por ali passasse. Certo dia, ao pôr-do-sol, o pescador Chico Amaro vendo o homem acenando para eles, disse: “Deus te salve”. Na mesma hora ele desapareceu e em seu lugar surgiram dois cachorros enormes. Nunca mais os pescadores viram o homem da barra."
            },
            {
                idName: "eventos",
                type: "Text",
                title: "Eventos populares",
                subtitle: "\tAs lendas fizeram e fazem parte da cultura do local. No Rio Grande do Norte, a diversidade folclórica se faz presente nos eventos populares como, por exemplo, vaquejadas, procissões, forró, quadrilha, boi de reis. Nas comunidades da RDSPT, o centro dos eventos fica por conta do carnaval, São João e festas de padroeira, nos quais converge a maior parte dos folguedos populares. Os festejos tradicionais eram mais presentes na comunidade. Essa perda de tradicionalidade passa por um processo de perda de identidade, segundo os moradores do local. De acordo com eles, existia na região um carnaval saudável e animado organizado por pessoas de ambos os sexos, formado por blocos contendo fantasias e músicas. A apresentação era feita durante o dia e durante a noite havia outro momento nos clubes de Diogo Lopes como, por exemplo, o bar de Zé Ribeiro, onde se dançava o baile à luz de lamparinas.\n\n\tOs blocos de Carnaval mais populares do lugar, hoje já extintos, eram o bloco centenário, o Funil, o Carcará, o Bloco do Barrigudo, o Bode, a Ema, o Leurso e o Sabiá. Dona Marlete lembra bem do bloco do bode e da Ema, dos quais é eterna foliã. Cada bloco de rua tinha sua melodia característica e seus seguidores fiéis. Essa tradição foi bravamente defendida pelos antigos que, mesmo depois de casados, permaneciam brincando nos blocos. No entanto, as próximas gerações já estavam mais interessadas nas bandas trazidas pela prefeitura de Macau e os blocos de rua não resistiram. Ainda no Carnaval, as moças costumavam dançar trajadas de Caboclinhas, as quais são sinônimo popular dos indígenas, segundo Cascudo (1967). Já o São João, como em todo Rio Grande do Norte, é festejado com comidas típicas com milho, fogueiras e quadrilhas. No entanto, uma dança típica marcava o São João das comunidades, principalmente Diogo Lopes: a capelinha.\n\n\tDurante os meses de abril a junho, bem como nas proximidades do Natal, também se dançava o pastoril. Esse, denominado “Flor das ondas”, surgiu em 1955 em Diogo Lopes, influenciado pelos pastoris de Macau, que naquela época era difundido na região. Outra festa incorporada recentemente ao calendário das comunidades é o reisado, cujo elemento folclórico principal é o Boi de Reis, sendo o foco da dramatização a história da morte e ressurreição de um boi, o personagem principal da trama. Diante de todo o contexto da vasta cultura popular das comunidades de Diogo Lopes, Barreiras e Sertãozinho, novos projetos visam resgatar esses antigos costumes que acabaram por se extinguir por falta de adeptos das novas gerações. Um desses projetos é o “Jovens, Meio Ambiente e Cultura”."
            },
            {
                idName: "",
                type: "Images",
                title: "O que a RDSPT representa hoje em dia?",
                subtitle: "\tAtualmente a Reserva de Desenlvolvimento Sustentável Ponta do Tubarão representa não só uma região rica em cultura como também a prova viva de que é possivel viver em conjunto com a natureza. \n\n(Precisa de mais coisa aqui)",
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
    },
    notFound: {
        title: "ERRO 404",
        subtitle: "Desculpa, não encontramos a página que você está procurando.",
    }
}

export default ptBrLang;