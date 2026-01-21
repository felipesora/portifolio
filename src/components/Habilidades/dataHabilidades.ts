import type { Habilidade } from "./types";
import IconeReact from "../../assets/icons/icone-react.png";
import IconeTypeScript from "../../assets/icons/icone-typescript.png";
import IconeJavaScript from "../../assets/icons/icone-javascript.png";
import IconeHTML from "../../assets/icons/icone-html.png";
import IconeCSS from "../../assets/icons/icone-css.png";
import IconeStyled from "../../assets/icons/icone-styled.png";
import IconeJava from "../../assets/icons/icone-java.png";
import IconeSpring from "../../assets/icons/icone-spring-boot.png";
import IconeDataBase from "../../assets/icons/icone-database.png";
import IconeSecurity from "../../assets/icons/icone-security.png";
import IconeTeste from "../../assets/icons/icone-teste.png";
import IconeDotNet from "../../assets/icons/icone-dotnet.png";
import IconeGit from "../../assets/icons/icone-git.png";
import IconeVersionamento from "../../assets/icons/icone-versionamento.png";

export const habilidades: Habilidade[] = [
    {
        id: 1,
        categoria: "front",
        nome: "React.js",
        icone: IconeReact
    },
    {
        id: 2,
        categoria: "front",
        nome: "TypeScript",
        icone: IconeTypeScript
    },
    {
        id: 3,
        categoria: "front",
        nome: "JavaScript",
        icone: IconeJavaScript
    },
    {
        id: 4,
        categoria: "front",
        nome: "HTML 5",
        icone: IconeHTML
    },
    {
        id: 5,
        categoria: "front",
        nome: "CSS 3",
        icone: IconeCSS
    },
    {
        id: 6,
        categoria: "front",
        nome: "Styled Components",
        icone: IconeStyled
    },
    {
        id: 7,
        categoria: "front",
        nome: "Tailwind",
        icone: IconeStyled
    },
    {
        id: 8,
        categoria: "back",
        nome: "Java",
        icone: IconeJava
    },
    {
        id: 9,
        categoria: "back",
        nome: "Spring Boot",
        icone: IconeSpring
    },
    {
        id: 10,
        categoria: "back",
        nome: "JPA & Hibernate",
        icone: IconeDataBase
    },
    {
        id: 11,
        categoria: "back",
        nome: "Spring Security",
        icone: IconeSecurity
    },
    {
        id: 12,
        categoria: "back",
        nome: "JUnit & Mockito",
        icone: IconeTeste
    },
    {
        id: 13,
        categoria: "back",
        nome: ".NET",
        icone: IconeDotNet
    },
    {
        id: 14,
        categoria: "outros",
        nome: "Git e Github",
        icone: IconeGit
    },
    {
        id: 15,
        categoria: "outros",
        nome: "Versionamento",
        icone: IconeVersionamento
    },
    {
        id: 16,
        categoria: "outros",
        nome: "Oracle",
        icone: IconeDataBase
    },
    {
        id: 17,
        categoria: "outros",
        nome: "PostgreSQL",
        icone: IconeDataBase
    },
    {
        id: 18,
        categoria: "outros",
        nome: "MySQL",
        icone: IconeDataBase
    },
];