export interface CardProjetoProps {
    id: number;
    imagem: string;
    titulo: string;
    descricaoPequena: string;
}

export interface CardTecnologiaProps {
    nome: string;
};

export interface Projeto {
    id: number;
    imagem: string;
    titulo: string;
    descricaoPequena: string;
    descricaoLonga: string[];
    tecnologias: Tecnologia[];
    galeria?: ImagemGaleria[];
    linkCodigo: string;
    linkDeploy?: string;
    linkVideo: string;
}

interface Tecnologia {
    titulo: string;
}

interface ImagemGaleria {
    imagem: string;
}