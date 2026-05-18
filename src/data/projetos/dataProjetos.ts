
import LifeBoardDashboard from "./images/lifeboard-dashboard.png";
import LifeBoardKanban from "./images/lifeboard-kanban.png";
import LifeBoardTransacoes from "./images/lifeboard-transacoes.png";
import NextStepDashboard from "./images/nextstep-dashboard.png";
import NextStepTrilhas from "./images/nextstep-trilhas.png";
import NextStepConteudos from "./images/nextstep-conteudos.png";
import MotoTrackMotos from "./images/mototrack-motos.png";
import MotoTrackMovimentacoes from "./images/mototrack-movimentacoes.png";
import MotoTrackAlertas from "./images/mototrack-alertas.png";
import TechMarketInicio from "./images/techmarket-inicio.jpeg";
import TechMarketProduto from "./images/techmarket-produto.jpeg";
import TechMarketCarrinho from "./images/techmarket-carrinho.jpeg";
import TechMarketDashboard from "./images/techmarket-dashboard.jpeg";
import ThumbnailTechMarket from "./images/thumbnail-techmarket.png";
import ThumbnailLifeBoard from "./images/thumbnail-lifeboard.png";
import ThumbnailNextStep from "./images/thumbnail-nextstep.png";
import ThumbnailMotoTrack from "./images/thumbnail-mototrack.png";
import type { Projeto } from "../../types/ProjetoTypes";

export const projetos: Projeto[] = [
    {
        id: 1,
        imagem: ThumbnailTechMarket,
        titulo: "TechMarket",
        descricaoPequena: "TechMarket é uma plataforma de e-commerce baseada em microsserviços, que centraliza o gerenciamento de produtos, carrinho e pedidos em um ambiente moderno, seguro e escalável, utilizando tecnologias como Java, Angular e múltiplos bancos de dados.",
        descricaoLonga: [
            "TechMarket é uma aplicação full stack de e-commerce desenvolvida com foco em escalabilidade, modularização e arquitetura distribuída. O sistema permite o gerenciamento completo de produtos, carrinho de compras e pedidos, oferecendo uma experiência moderna para o usuário.",
            "A aplicação é baseada em uma arquitetura de microsserviços, utilizando Java com Spring Boot para construção dos serviços, além de componentes como Spring Cloud Gateway para roteamento e Eureka Server para descoberta de serviços. A comunicação entre os serviços é realizada de forma eficiente, incluindo suporte à mensageria com RabbitMQ para processamento assíncrono e desacoplamento entre domínios.",
            "A segurança da aplicação é garantida com autenticação e autorização via JWT utilizando Spring Security. A persistência de dados utiliza tanto PostgreSQL quanto MongoDB, permitindo o uso de modelos relacionais e não relacionais conforme a necessidade de cada serviço.",
            "No frontend, a aplicação foi desenvolvida com Angular e TypeScript, com estilização utilizando Tailwind CSS, garantindo uma interface moderna, performática e responsiva.",
            "O projeto também utiliza Docker e Docker Compose para containerização dos serviços, além de integração contínua com GitHub Actions, assegurando padronização de ambiente, facilidade de deploy e qualidade no ciclo de desenvolvimento."
        ],
        linkCodigo: "https://github.com/felipesora/techmarket",
        linkVideo: "https://www.youtube.com/watch?v=RCs4tMAQMho",
        tecnologias: [
            {
                titulo: "Java"
            },
            {
                titulo: "Spring Boot"
            },
            {
                titulo: "Spring Security"
            },
            {
                titulo: "Spring Gateway"
            },
            {
                titulo: "Eureka Server"
            },
            {
                titulo: "JWT"
            },
            {
                titulo: "JPA"
            },
            {
                titulo: "Microsserviços"
            },
            {
                titulo: "RabbitMQ"
            },
            {
                titulo: "Angular"
            },
            {
                titulo: "TypeScript"
            },
            {
                titulo: "Tailwind"
            },
            {
                titulo: "Docker"
            },
            {
                titulo: "Docker Compose"
            },
            {
                titulo: "PostgreSQL"
            },
            {
                titulo: "MongoDB"
            },
            {
                titulo: "GitHub Actions"
            },
        ],
        galeria: [
            {
                imagem: TechMarketInicio
            },
            {
                imagem: TechMarketProduto
            },
            {
                imagem: TechMarketCarrinho
            },
            {
                imagem: TechMarketDashboard
            },
        ]
    },
    {
        id: 2,
        imagem: ThumbnailLifeBoard,
        titulo: "LifeBoard",
        descricaoPequena: "LifeBoard é uma plataforma integrada de gestão financeira e produtividade pessoal, que centraliza controle de finanças, metas e tarefas em um ambiente moderno e intuitivo, facilitando a organização do dia a dia e a tomada de decisões.",
        descricaoLonga: [
            "LifeBoard é uma plataforma full stack de gestão financeira e produtividade pessoal, projetada para centralizar o controle de finanças, metas e tarefas em um único ambiente intuitivo e eficiente. A aplicação permite ao usuário acompanhar transações financeiras, organizar atividades por meio de quadros estilo kanban e definir objetivos pessoais, facilitando a tomada de decisões no dia a dia.",
            "O backend foi desenvolvido com Java e Spring Boot, seguindo uma arquitetura em camadas bem definida, com uso de JPA para persistência de dados e integração com banco PostgreSQL. A autenticação é realizada via JWT, garantindo segurança no acesso e proteção dos dados do usuário.",
            "No frontend, a aplicação foi construída com React.js e TypeScript, proporcionando uma interface dinâmica e reativa. A estilização foi feita com Styled Components, permitindo maior modularização e reutilização de componentes visuais.",
            "O projeto também utiliza Docker e Docker Compose para padronização do ambiente de desenvolvimento e execução, refletindo boas práticas de organização, escalabilidade e manutenção de aplicações modernas."
        ],
        linkCodigo: "https://github.com/felipesora/LifeBoard",
        linkDeploy: "https://lifeboard-frontend.vercel.app/",
        linkVideo: "https://www.youtube.com/watch?v=hLPd2yK9jnE",
        tecnologias: [
            {
                titulo: "Java"
            },
            {
                titulo: "Spring Boot"
            },
            {
                titulo: "JWT"
            },
            {
                titulo: "JPA"
            },
            {
                titulo: "React.js"
            },
            {
                titulo: "TypeScript"
            },
            {
                titulo: "Styled-Components"
            },
            {
                titulo: "Docker"
            },
            {
                titulo: "Docker Compose"
            },
            {
                titulo: "PostgreSQL"
            },
        ],
        galeria: [
            {
                imagem: LifeBoardDashboard
            },
            {
                imagem: LifeBoardKanban
            },
            {
                imagem: LifeBoardTransacoes
            },
        ]
    },
    {
        id: 3,
        imagem: ThumbnailNextStep,
        titulo: "NextStep",
        descricaoPequena: "NextStep é uma plataforma educacional que oferece trilhas de aprendizado personalizadas em Backend, Frontend, Cloud e IA, integrando painel administrativo e aplicativo mobile em um ambiente moderno e inteligente.",
        descricaoLonga: [
            "NextStep é uma plataforma educacional desenvolvida para oferecer trilhas de aprendizado personalizadas nas áreas de Backend, Frontend, Cloud e Inteligência Artificial. O sistema integra diferentes ambientes, incluindo painel administrativo, aplicação web e aplicativo mobile, proporcionando uma experiência completa e adaptável ao perfil do usuário.",
            "A arquitetura do sistema combina diferentes tecnologias, com backend desenvolvido em Java utilizando Spring Boot, aplicando boas práticas de organização e segurança com autenticação via JWT e persistência de dados com JPA.",
            "A aplicação também conta com integração de serviços desenvolvidos em .NET e ASP.NET, demonstrando interoperabilidade entre diferentes stacks. No frontend web, foi utilizado React.js, enquanto o aplicativo mobile foi desenvolvido com React Native, garantindo uma experiência consistente em múltiplas plataformas.",
            "O NextStep evidencia a construção de sistemas distribuídos e integrados, com foco em escalabilidade, modularização e experiência do usuário em diferentes dispositivos."
        ],
        linkCodigo: "https://github.com/felipesora/nextstep-frontend-web",
        linkDeploy: "https://nextstep-frontend-web.vercel.app/login",
        linkVideo: "https://www.youtube.com/watch?v=hw-RtEkYCA4",
        tecnologias: [
            {
                titulo: "Java"
            },
            {
                titulo: "Spring Boot"
            },
            {
                titulo: "JWT"
            },
            {
                titulo: "JPA"
            },
            {
                titulo: "React.js"
            },
            {
                titulo: "JavaScript"
            },
            {
                titulo: ".NET"
            },
            {
                titulo: "ASP.NET"
            },
            {
                titulo: "React Native"
            },
        ],
        galeria: [
            {
                imagem: NextStepDashboard
            },
            {
                imagem: NextStepTrilhas
            },
            {
                imagem: NextStepConteudos
            },
        ]
    },
    {
        id: 4,
        imagem: ThumbnailMotoTrack,
        titulo: "MotoTrack",
        descricaoPequena: "MotoTrack é uma plataforma de gestão de frotas para empresas de aluguel de motos, centralizando controle de pátios, manutenções e disponibilidade dos veículos, garantindo organização e eficiência operacional.",
        descricaoLonga: [
            "MotoTrack é uma plataforma de gestão de frotas voltada para empresas de aluguel de motos, com o objetivo de centralizar e otimizar o controle operacional dos veículos. O sistema permite o gerenciamento de pátios, acompanhamento de manutenções, controle de movimentações e monitoramento da disponibilidade das motos, proporcionando maior organização e eficiência nos processos.",
            "O backend foi desenvolvido com Java e Spring Boot, seguindo uma arquitetura estruturada em camadas, com autenticação via JWT e persistência de dados utilizando JPA. A aplicação também integra serviços desenvolvidos em .NET e ASP.NET, demonstrando a capacidade de trabalhar com múltiplas tecnologias em um mesmo ecossistema.",
            "No frontend, foi utilizada Java MVC para construção da interface web e React Native para a aplicação mobile, garantindo flexibilidade e acessibilidade em diferentes dispositivos.",
            "O projeto foi disponibilizado em ambiente de cloud utilizando Azure, reforçando práticas de deploy e infraestrutura modernas, além de evidenciar conhecimentos em desenvolvimento de sistemas escaláveis e orientados a negócio."
        ],
        linkCodigo: "https://github.com/mototrack-challenge/mototrack-backend-mvc-java",
        linkDeploy: "https://mototrack-mvc-java.onrender.com/",
        linkVideo: "https://www.youtube.com/watch?v=veq9pSnL0cI",
        tecnologias: [
            {
                titulo: "Java"
            },
            {
                titulo: "Spring Boot"
            },
            {
                titulo: "JWT"
            },
            {
                titulo: "JPA"
            },
            {
                titulo: "React.js"
            },
            {
                titulo: "JavaScript"
            },
            {
                titulo: ".NET"
            },
            {
                titulo: "ASP.NET"
            },
            {
                titulo: "React Native"
            },
            {
                titulo: "Azure for Deploy"
            },
        ],
        galeria: [
            {
                imagem: MotoTrackMotos
            },
            {
                imagem: MotoTrackMovimentacoes
            },
            {
                imagem: MotoTrackAlertas
            },
        ]
    },
];