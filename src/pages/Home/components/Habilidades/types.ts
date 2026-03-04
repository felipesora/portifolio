export type CategoriaHabilidade = "front" | "back" | "outros";

export interface CardCategoriaHabilidadeProps {
    categoria: CategoriaHabilidade;
};

export interface CardHabilidadeProps {
    nome: string;
    icone: string;
};

export interface Habilidade {
    id: number;
    categoria: CategoriaHabilidade;
    nome: string;
    icone: string;
}