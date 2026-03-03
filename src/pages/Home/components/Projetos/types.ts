export interface CardProjetoProps {
    id: number;
    imagem: string;
    titulo: string;
    descricao: string;
}

export interface CardTecnologiaProps {
    nome: string;
};

export interface Projeto {
    id: number;
    imagem: string;
    titulo: string;
    descricao: string;
    tecnologias: Tecnologia[];
    linkCodigo: string;
    linkDeploy: string;
    linkVideo: string;
}

interface Tecnologia {
    titulo: string;
}