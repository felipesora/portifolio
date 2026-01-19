import type { Projeto } from "./types";
import LifeBoard from "./images/lifeboard.png";
import NextStep from "./images/nextstep.png";

export const projetos: Projeto[] = [
    {
        id: 1,
        imagem: LifeBoard,
        titulo: "LifeBoard",
        descricao: "O LifeBoard é uma plataforma integrada de gestão financeira e produtividade pessoal, desenvolvida para ajudar usuários a organizarem suas finanças e tarefas em um ambiente único, moderno e intuitivo. A solução combina recursos de controle financeiro, acompanhamento de metas e gerenciamento de tarefas, oferecendo uma visão completa do dia a dia para facilitar decisões e melhorar a organização pessoal.",
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
                titulo: "Spring Security"
            },
            {
                titulo: "JWT"
            },
            {
                titulo: "JPA"
            },
            {
                titulo: "OpenAPI"
            },
            {
                titulo: "JUnit"
            },
            {
                titulo: "Mockito"
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
                titulo: "React Router DOM"
            }
        ]
    },
    {
        id: 2,
        imagem: NextStep,
        titulo: "NextStep",
        descricao: "NextStep é uma plataforma educacional que oferece trilhas de aprendizado modernas e personalizadas em áreas como Backend, Frontend, Cloud e IA. A solução conta com painel administrativo e app mobile, utilizando inteligência artificial para otimizar a criação e recomendação de conteúdos.",
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
                titulo: "Spring Security"
            },
            {
                titulo: "JWT"
            },
            {
                titulo: "JPA"
            },
            {
                titulo: "OpenAPI"
            },
            {
                titulo: "JUnit"
            },
            {
                titulo: "Mockito"
            },
            {
                titulo: "React.js"
            },
            {
                titulo: "JavaScript"
            },
            {
                titulo: "Styled-Components"
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
];