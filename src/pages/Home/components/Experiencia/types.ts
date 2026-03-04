export type TipoCarreira = "experiencia" | "educacao";

export interface IconeCarreiraProps {
    tipo: TipoCarreira;
};

export interface CardCarreiraProps {
    tipo: TipoCarreira;
    data: string;
    titulo: string;
    instituicao: string;
    descricao: string;
};

export interface ItemCarreira {
  id: number;
  tipo: TipoCarreira;
  data: string;
  titulo: string;
  instituicao: string;
  descricao: string;
}