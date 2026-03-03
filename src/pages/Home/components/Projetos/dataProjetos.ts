import type { Projeto } from "./types";
import LifeBoard from "./images/lifeboard.png";
import NextStep from "./images/nextstep.png";
import MotoTrack from "./images/mototrack.png";

export const projetos: Projeto[] = [
    {
        id: 1,
        imagem: LifeBoard,
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
        ]
    },
    {
        id: 2,
        imagem: NextStep,
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
        ]
    },
    {
        id: 3,
        imagem: MotoTrack,
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
        ]
    },
];