import LangFileProps from './interface';

import imgExemplo from '../../assets/img/content/artesanato_1.jpg';

import imgProjeto1 from '../../assets/img/content/projeto_1.jpg';
import imgProjeto2 from '../../assets/img/content/projeto_2.jpg';
import imgProjeto3 from '../../assets/img/content/projeto_3.jpg';

import imgProjeto4 from '../../assets/img/content/projeto_4.jpg';
import imgProjeto5 from '../../assets/img/content/projeto_5.jpg';
import imgProjeto6 from '../../assets/img/content/projeto_6.jpg';

import imgProjeto7 from '../../assets/img/content/projeto_7.jpg';
import imgProjeto8 from '../../assets/img/content/projeto_8.jpg';
import imgProjeto9 from '../../assets/img/content/projeto_9.jpg';

import imgProjeto10 from '../../assets/img/content/projeto_10.jpg';
import imgProjeto11 from '../../assets/img/content/projeto_11.jpg';
import imgProjeto12 from '../../assets/img/content/projeto_12.jpg';

const ptBrLang: LangFileProps = {
    header: [
        {
            name: "Inicio",
            route: "/pt-br/home"
        },/*
        {
            name: "História",
            route: "/pt-br/history"
        },
        {
            name: "Economia",
            route: "/pt-br/economy"
        },
        {
            name: "Meio Ambiente",
            route: "/pt-br/environment"
        },
        {
            name: "Trilhas e Turismo",
            route: "/pt-br/routes"
        },*/
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
                text: "Cartografia Social",
                route: "#2"
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
                type: "Images",
                title: "ESTABELECIMENTO DE CANAIS DE DIÁLOGO COM PERIODICIDADE CONSTANTE: ENVOLVIMENTO INTERINSTITUCIONAL NAS ESFERAS MUNICIPAL, ESTADUAL E FEDERAL",
                subtitle: "\tPor conta desta reunião, foi possível entender o estado atual de rede, como ela opera e trabalha. E a partir disso, participar mais intensamente na colaboração das atividades e principalmente proposição e construção de iniciativas para a comunidade da RDS. A participação nesta Audiência Pública, juntamente com os pescadores locais da RDS Ponta de Tubarão, de Macau e Guamaré, permitiu uma maior integração com a comunidade pesqueira da área atendida pelo IFRN - Campus Macau.\n\n\tAlém disso, o debate com presença de comunidades pesqueiras de todo o Estado, foi realizado em parceria com a Rede Mangue Mar e apontou desde como os problemas do meio ambiente que prejudicam o trabalho dos pescadores, a desvalorização da pesca artesanal e mariscagem, de como a falta de dados oficiais camuflam a importância econômica e de subsistência da pesca artesanal, e questões relativas a tradicionalidade e necessidade de resgate histórico e conservação de algumas comunidades pesqueiras.",
                images: [
                    {
                        src: imgProjeto10,
                        filter: "Reunião com representantes de várias instituições atuantes na RDS Ponta de Tubarão.",
                        title: "Reunião com representantes"
                    },
                    {
                        src: imgProjeto11,
                        filter: "\"A pesca artesanal no RN\” realizada na Assembleia Legislativa.",
                        title: "Audiência Pública"
                    },
                    {
                        src: imgProjeto12,
                        filter: "Audiência Pública “A pesca artesanal no RN” realizada na Assembleia Legislativa.",
                        title: "Ouvintes"
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
        content: [/*
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
            },*/
        ]
    },
    economyPage: {
        title: "ECONOMIA",
        subtitle: "DA RESERVA DE DESENVOLVIMENTO SUSTENTÁVEL PONTA DO TUBARÃO (RDSPT)",
        button: [
            {   
                text: "Principais eixos",
                route: "#rdspt"
            },
            {   
                text: "Pesca artesanal",
                route: "#pesca"
            },
            {   
                text: "Artesanato",
                route: "#artesanato"
            },
            {
                text: "Relatos",
                route: "#relatos"
            },
            {
                text: "Importância da RDSPT",
                route: "#importancia"
            }
        ],
        content: [/*
            {
                idName: "rdspt",
                type: "Text",
                title: "Principais eixos",
                subtitle: "\tDiogo Lopes fica localizado entre as comunidades de Barreiras e Sertãozinho, que fazem parte de uma reserva ambiental chamada Reserva de Desenvolvimento Sustentável Estadual Ponta do Tubarão com 12.960 ha. de extensão. Seu trabalho e economia consistem basicamente em dois eixos principais: o primeiro eixo é a pesca artesanal, que é a principal atividade econômica, e o segundo a produção de artesanatos. Ambas são de extrema importância econômica para a Reserva e para o estado, uma vez que o local é o que mais produz pescados se comparado às cidades vizinhas.\n\n\tToda a produção é destinada para o comércio local e para a capital do estado.",
            },{
                idName: "pesca",
                type: "Text",
                title: "Pesca artesanal",
                subtitle: "\tNesse tipo de pesca encontramos apenas barcos de pequeno porte, ou, em alguns casos, nenhum, pois sua principal característica é o uso de praticas manuais. Em síntese, esse tipo de pesca é uma das principais rendas de muitas famílias que vivem da pesca hoje em dia no Brasil.\n\n\tDiferente da pesca industrial, as ferramentas utilizadas são bastante limitadas."
            },
            {
                idName: "artesanato",
                type: "Images",
                title: "Artesanato",
                subtitle: "\tA produção dos objetos artesanais é feita a partir de materiais vindos da própria natureza, como pedaços de madeira e até mesmo folhas de coqueiros. Essa prática se torna um meio de renda extra para os moradores, pois esses objetos são vendidos para visitantes que querem levar uma “lembrancinha” da reserva.",
                images: [
                    {
                        src: imgArtesanato1,
                        filter: "Produtos artesanais",
                        title: "Artesanato"
                    },
                    {
                        src: imgArtesanato2,
                        filter: "Produtos artesanais",
                        title: "Artesanato"
                    },
                    {
                        src: imgArtesanato3,
                        filter: "Produtos artesanais",
                        title: "Artesanato"
                    },
                    {
                        src: imgArtesanato4,
                        filter: "Produtos artesanais",
                        title: "Artesanato"
                    },
                    {
                        src: imgArtesanato5,
                        filter: "Produtos artesanais",
                        title: "Artesanato"
                    },
                    {
                        src: imgArtesanato6,
                        filter: "Produtos artesanais",
                        title: "Artesanato"
                    }
                ]
            },
            {
                idName: "relatos",
                type: "TextWithReports",
                title: "Relatos",
                subtitle: "\tCom base no surgimento da RDS, moradores do distrito relataram quais impactos positivos e negativos foram e são causados até hoje na economia, no espaço ambiental, cultural e na organização social.",
                content: [
                    {
                        title: "Primeiro morador",
                        subtitle: "\tPontos positivos: Houve um grande crescimento populacional e territorial na região, com melhorias nas estruturas físicas do distrito, mantendo intacta a essência e importância histórica das construções e, além disso, com o mínimo de agressão à natureza. Houve também implantação de projetos sociais, econômicos e culturais, os quais são promovidos por empresas que têm interesses ou deveres na reserva. Esses projetos ajudam a manter os costumes culturais da região, a alavancar a economia e a facilitar a vida dos moradores, em especial dos pescadores.\n\n\tPontos negativos: O distrito sofre com a falta de segurança, porém não é um dos maiores problemas que se enfrenta. Por ser um distrito pequeno no litoral, a região depende muito da pesca e de um possível turismo. Porém, nem sempre a pesca traz bons lucros e o turismo não é tão explorado na região. Isso pode ser pelo fato de o distrito depender muito das condições políticas de sua cidade, Macau, que quando não está em boas condições abandona o distrito e o deixa caindo aos pedaços, o que leva ao desinteresse de turistas na região.\n\n\tImportância local: Não só Diogo Lopes, mas toda a área que abrange a reserva tem grande importância pois é uma das poucas regiões que garante a preservação de várias áreas da natureza, da fauna à flora e do manguezal à caatinga. Sem contar a sua participação na economia, já que a região está entre os maiores produtores de pescado do estado."
                    },
                    {
                        title: "Segundo morador",
                        subtitle: "\tPontos positivos: Houve melhorias na saúde e na educação e na estrutura física da cidade, além de expansão territorial e aumento populacional, sem contar os projetos sociais com foco em privilegiar os pescadores de empresas atraídas pela reserva. \n\n\tPontos negativos: Com o tempo, houve uma queda na segurança pública local e sucateamento de alguns pontos físicos da cidade, seguido de uma alta no desemprego.\n\n\tImportância local: Mesmo com a queda na segurança pública, é um lugar calmo e tranquilo para morar, sem contar a ajuda na renda e as oportunidades oferecidas pela natureza no local."
                    },
                    {
                        title: "Terceiro morador",
                        subtitle: "\tPontos positivos: As ruas do local melhoraram com o tempo, houve uma melhoria na pesca, com materiais para facilitar a captura e incentivos sociais por parte dos órgãos públicos.\n\n\tPontos negativos: A quantidade de empregos diminuiu, o que obrigou alguns moradores a saírem da região em busca de emprego.\n\n\tImportância local: Conservação dos costumes festeiros da região."
                    }
                ],
            },
            {
                idName: "importancia",
                type: "Text",
                title: "Importância da RDSPT",
                subtitle: "\tÉ notória a importância da Reserva Ponta do Tubarão de desenvolvimento sustentável, que busca manter, principalmente, a biodiversidade do local, além de conseguir assegurar as condições e os meios necessários para a melhoria da qualidade de vida da população que ali residem, considerando que a principal fonte de renda vem da pesca e os lugares de extração são os mangues, o estuário e o próprio mar. Logo, a principal importância cultural para o estado é a preservação do meio ambiente e o modo de vida simples que mantém a atividade pesqueira local como uma cultura levada a sério até os dias atuais. O hábito e o entendimento local da comunidade mudaram, interferindo diretamente em sua cultura e economia."
            }*/
        ]
    },
    environmentPage: {
        title: "MEIO AMBIENTE",
        subtitle: "DA RESERVA DE DESENVOLVIMENTO SUSTENTÁVEL PONTA DO TUBARÃO (RDSPT)",
        button: [
            {
                text: "Fauna",
                route: "#fauna"
            },
            {
                text: "Flora",
                route: "#flora"
            }, 
            {
                text: "Notas adicionais",
                route: "#notes"
            }
        ],
        content: [/*
            {
                idName: "fauna",
                type: "Text",
                title: "Fauna",
                subtitle: "\tA fauna da reserva é constituída por abelhas, bico-torto, canário do mangue, cavalo marinho, entre outros. Os peixes constituem uma grande riqueza de diversidade e abundância tanto para a produção como para a reprodução nesse ecossistema. A fauna da reserva é rica por ter vários animais: nos mangues, por exemplo, pode-se encontrar o caranguejo sapateiro, no estuário entre as espécies de peixes pode-se encontrar carapicu, moreia, vermelho, tainha e o cavalo marinho. Nesse estuário, muitas espécies vêm se reproduzir, como a cioba, o dentão e até mesmo a tainha, entre outros. Da beira mar da restinga até dois mil metros da costa está situada a parte de mar da reserva da ponta do tubarão, que fica perto da Beira do mar e abriga espécies como o xaréu, o pescado, a serra, a pururuca e a corvina. Já próximo ao fim da reserva existem outras espécies como a guarajuba, a cioba e o dentão. Esse pedaço de mar é uma riqueza natural para pesquisadores e estudiosos e, com isso, sua preservação deve ser garantida. O estuário é responsável por garantir o sustento de centenas de famílias de baixa renda que retiram sua sobrevivência desses recursos naturais. Além dos peixes, existem muitos mariscos, como o búzio, a ostra, o sururu e a unha de velho, e os crustáceos, a exemplo do caranguejo branco e roxo, camarão, siri entre outros.",
            },
            {
                idName: "flora",
                type: "Text",
                title: "Flora",
                subtitle: "\tSua vegetação é formada pelas espécies sapateiro (onde está a produção do caranguejo vermelho e aratu), canoé (onde se produz o caranguejo branco), mangue manso e ratinho. A flora é bastante diversificada, pois a unidade apresenta áreas de manguezal tabuleiros costeiros e fragmentos de Mata Atlântica.\n\n\tAs principais espécies encontradas Ponta do Tubarão são: Opisthonema oglinum (Sardinha), Cheilopogon melanurus (Peixe Voador), Calidris minutilla (Maçariquinho), Tringa semipalmata (Maçarico de asa branca), Molothrus bonarienses (Chupim), Caranx hippos (Xaréu amarelo), Lutjanus analis (Cioba), Diapterus auratus (Carapeba), Lutjanus jocu (Dentão), Scomberomorus brasiliensis (Serra) e Lutjanus alexandrei (Baúna).\n\n\tOs principais problemas ambientais apresentados no local são: esgoto (37,4%), lixo a céu aberto (52,5%) e poluição do rio Tubarão, que é consequência do descarte das vísceras dos peixes pelos pescadores (10,1%).",
            }, 
            {
                idName: "notes",
                type: "Text",
                title: "Notas adicionais",
                subtitle: "\tApesar de 37,4% da poluição ser de origem sanitária, pedimos carecidamente que cada turista contribua com a preservação, não só de Diogo Lopes, como também da reserva como um todo. Para isso, basta jogar o lixo em seu devido lugar e respeitar ao máximo a bela paisagem que este lugar tem a te oferecer."   
            }*/
        ]
    },
    routesPage: {
        title: "TRILHAS E TURISMO",
        subtitle: "DA RESERVA DE DESENVOLVIMENTO SUSTENTÁVEL PONTA DO TUBARÃO (RDSPT)",
        button: [
            {
                text: "Potencialidades turísticas",
                route: "#potencialidades"
            },
            {
                text: "Trilhas disponíveis",
                route: "#pontos"
            },
            {
                text: "Festivais",
                route: "#festivais"
            },
            {
                text: "Culinária",
                route: "#culinaria"
            },
            {
                text: "Atividades de pesca",
                route: "#pesca"
            },
            {
                text: "História do turismo na RDSPT",
                route: "#historia"
            }
        ],
        content: [/*
            {
                idName: "potencialidades",
                type: "Text",
                title: "Potencialidades turísticas",
                subtitle: "As principais potencialidades do turismo na Reserva estão ligadas à fauna e à flora da região. As dunas de areia são um ponto muito importante e utilizado para o turismo, os passeios de “buggy” são bem explorados no local e há, ainda, a realização de trilhas que muitas vezes tem como objetivo estudos e projetos. O estuário, braço de mar, por mais que seja algo muito preservado, também é considerado um ponto turístico, além de ser utilizado como lugar para realizar esportes na água. A caatinga também é um ponto turístico da reserva, geralmente usado para observar a natureza, bem como funciona como fonte para estudos."
            },
            {
                idName: "routes",
                type: "TextWithReports",
                title: "Trilhas disponíveis",
                content: [
                    {
                        title: "Trilha nas dunas",
                        subtitle: "\tNessa trilha é possível visualizar algumas espécies da caatinga. Recomenda-se que o percurso seja feito durante o fim da tarde para se contemplar um lindo pôr-do-sol."
                    },
                    {
                        title: "Trilha das falésias",
                        subtitle: "\tA trilha tem seu início no Chico Martins e vai até a Soledade. Nela, é possível observar os sedimentos e tipos de solos que formam as falésias. Os olheiros de água, a caatinga e o manguezal também são os principais pontos dessa trilha."
                    },
                    {
                        title: "Trilhas aquáticas",
                        subtitle: "\tSão feitas em barcos de uma rede cidadã solidária da Reserva de Desenvolvimento Sustentável (RSD), que foi criada com o intuito de trazer benefício para comerciantes, marisqueiros e pecadores. Ao fazer as trilhas, os aventureiros contribuem para o \"Turismo Ecológico\" uma vez que elas são feitas em ambientes naturais e preservados. Durante a trilha é possível observar o cotidiano das marisqueiras, a diversidade de mangues e o mar. Para os amantes da tranquilidade, a RDS também possui uma trilha aquática mais tranquila, com a quantidade máxima de 3 pessoas. Essa trilha é realizada nas Gamboas e é feita em uma embarcação de pequeno porte (canoa). Nela, é possível observar e ouvir os barulhos dos animais já que a embarcação não tem barulho de motor. O diferencial fica por conta da vara de remar, que é utilizada durante todo o percurso."
                    }
                ],
            },
            {
                idName: "pontos",
                type: "TextWithReports",
                title: "Trilhas disponíveis",
                subtitle: "O turismo é bastante presente em Diogo Lopes, local caracterizado pelas riquezas ambientais, muitas delas até então inexploradas. Lá, o que chama a atenção dos turistas é a beleza de seus pontos turísticos, além de seu povo hospitaleiro. Os pontos turísticos mais frequentados são a praia, a igreja, as dunas, o mangue, o balneário e rancho da Petrobrás.",
                content: [
                    {
                        title: "Igreja",
                        subtitle: "\tA igreja não atrai apenas religiosos. Sua arquitetura antiga chama atenção de turistas em geral."
                    },
                    {
                        title: "Praia",
                        subtitle: "\tA praia de Diogo Lopes encanta seus turistas com a sua beleza exuberante, tornando-se um dos pontos turísticos mais visitados."
                    },
                    {
                        title: "Dunas e mangues",
                        subtitle: "\tAs duas atraem os turistas pela sua beleza natural e os mangues pela oportunidade de conhecer o cultivo de caranguejos."
                    },
                    {
                        title: "Balneário",
                        subtitle: "\tÉ um local privado onde geralmente as famílias vão aos finais de semana em virtude do lazer disponibilizado para as crianças."
                    },
                    {
                        title: "Rancho da Petrobras",
                        subtitle: "\tÉ um espaço cultural disponibilizado pela Petrobras para a comunidade promover eventos."
                    }
                ],
            },
            {
                idName: "festivais",
                type: "Text",
                title: "Festivais",
                subtitle: "\tOs festivais culturais que acontecem em Diogo Lopes são tradições antigas voltadas inicialmente para a crença religiosa da população, a exemplo da festa das flores, um festejo católico em devoção à padroeira do distrito. Durante desses festejos ocorrem também festivais esportivos que são atrativos para o turismo da região. Nesses festivais esportivos são realizados esportes como a corrida de barcos, nas categorias “a”, “b” e “c”, sendo esses, respectivamente, barco de enfeite, canoas e embarcações pesqueiras; os campeonatos de blocos; e jogos esportivos como, futevôlei, futsal e futebol de areia.\n\n\tOutra tradição cultural do distrito é a famosa balada da regata, referência para o turismo e para a economia. A balada da regata é um evento patrocinado pelo Petrobras em parceria com a prefeitura de Macau e já completou sua 20ª edição. Ela é realizada nos finais de semanas e tem uma programação variada que inclui esportes, competição, apresentações e até premiações para os vencedores.",
            },
            {
                idName: "culinaria",
                type: "Text",
                title: "Culinária",
                subtitle: "\tA culinária de Diogo Lopes é bastante variada quando se trata da pesca em função da variedade dos peixes capturados no local, tais como sardinha, tainha e tilápia. A sardinha, anos atrás, passou a predominar na culinária local por ser considerada, na época, o pescado mais abundante da região. Na ocasião, serviam-se torta de sardinha, pizza de macarrão com sardinha, patê de sardinha, entre outros. Mas, atualmente, a grande quantidade de peixes encontrados em Diogo Lopes aumentou a variedade do cardápio, fazendo com que ova de voador, por exemplo, tenha se tornado um prato típico bastante servido.",
            },
            {
                idName: "pesca",
                type: "Text",
                title: "Atividades de pesca",
                subtitle: "\tOs tipos de pesca predominantes na região são a de subsistência (que visa ao sustento e à sobrevivência familiar local) e a comercial. As atividades de pesca esportiva e recreativa quase não são praticadas em Diogo Lopes.",
            },
            {
                idName: "historia",
                type: "Text",
                title: "História do turismo na RDSPT",
                subtitle: "\tA Reserva de Desenvolvimento Sustentável Ponta do Tubarão (RDSPT), no Rio Grande Norte, está mais fortalecida para o Turismo. Isso é resultado do projeto “Turismo de Base Comunitária na Ponta do Tubarão”, realizado pela Comissão de Justiça e Paz, proposta apoiada pelo 7° edital Costa Atlântica, da Fundação SOS Mata Atlântica. Durante cerca de um ano, o projeto desenvolveu ações para ampliar a capacidade do Grupo de Trabalho de Turismo do Conselho da RDS, articulando o setor hoteleiro, restaurantes e agências de turismo locais, além de ter realizado eventos com artesões da região e ampliado a divulgação da reserva nos roteiros turísticos do Rio Grande do Norte.\n\n\tNo 1° trimestre de 2016, concluiu-se a instalação das placas de sinalização da reserva e, no último mês do mesmo ano, a RDS ganhou um festival com gastronomia, esportes e outras atividades, além de um videoclipe promocional. \n\n\tSegundo o Sistema Nacional de Unidades de Conservação (SNUC), a RDS tem como objetivos proteger o modo de vida das populações tradicionais e assegurar atividades baseadas em um sistema sustentável de exploração de recursos naturais, estas desenvolvidas ao longo de gerações e adaptadas às condições ecológicas locais, desempenhando papel fundamental na proteção da natureza e na manutenção da diversidade biológica.\n\n\tA fauna e a flora da reserva são muito diversificadas, pois estão inseridas em um mosaico de paisagens naturais, tais como manguezal, tabuleiros costeiros, fragmentos de Mata Atlântica, além de praias, rios e lagoas. É possível conhecer todas essas riquezas naturais através de inúmeras trilhas terrestres e aquáticas, com auxílio de guias turísticos nativos.",
            },*/
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