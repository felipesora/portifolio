
import LifeBoardDashboard from "./images/lifeboard-dashboard.png";
import LifeBoardKanban from "./images/lifeboard-kanban.png";
import LifeBoardTransacoes from "./images/lifeboard-transacoes.png";
import NextStepDashboard from "./images/nextstep-dashboard.png";
import NextStepTrilhas from "./images/nextstep-trilhas.png";
import NextStepConteudos from "./images/nextstep-conteudos.png";
import MotoTrackMotos from "./images/mototrack-motos.png";
import MotoTrackMovimentacoes from "./images/mototrack-movimentacoes.png";
import MotoTrackAlertas from "./images/mototrack-alertas.png";
import type { Projeto } from "../../types/ProjetoTypes";

export const projetos: Projeto[] = [
    {
        id: 1,
        imagem: LifeBoardDashboard,
        titulo: "LifeBoard",
        descricao: "LifeBoard é uma plataforma integrada de gestão financeira e produtividade pessoal, que centraliza controle de finanças, metas e tarefas em um ambiente moderno e intuitivo, facilitando a organização do dia a dia e a tomada de decisões.",
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
        id: 2,
        imagem: NextStepTrilhas,
        titulo: "NextStep",
        descricao: "NextStep é uma plataforma educacional que oferece trilhas de aprendizado personalizadas em Backend, Frontend, Cloud e IA, integrando painel administrativo e aplicativo mobile em um ambiente moderno e inteligente.",
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
        id: 3,
        imagem: MotoTrackMotos,
        titulo: "MotoTrack",
        descricao: "MotoTrack é uma plataforma de gestão de frotas para empresas de aluguel de motos, centralizando controle de pátios, manutenções e disponibilidade dos veículos, garantindo organização e eficiência operacional.",
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