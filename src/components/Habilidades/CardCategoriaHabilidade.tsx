import type { CardCategoriaHabilidadeProps } from "./types";
import IconeFront from "../../assets/icons/icone-front-end.png";
import IconeBack from "../../assets/icons/icone-back-end.png";
import IconeFerramentas from "../../assets/icons/icone-ferramentas.png";
import CardHabilidade from "./CardHabilidade";
import { habilidades } from "./dataHabilidades";

const iconesPorCategoria = {
    front: IconeFront,
    back: IconeBack,
    outros: IconeFerramentas
} as const;

const tituloPorCategoria = {
    front: "Front-End",
    back: "Back-End",
    outros: "Ferramentas & Outros"
} as const;

const CardCategoriaHabilidade = ({ categoria }: CardCategoriaHabilidadeProps) => {
    const Icone = iconesPorCategoria[categoria];
    const Titulo = tituloPorCategoria[categoria];
    
    return (
        <div className="bg-[#EBEBEB] border border-transparent px-7 py-6 rounded-[10px] shadow-sm flex flex-col gap-3.5 min-w-[320px] w-[30%] hover:border-[#111111] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out">
            
            <div className="flex gap-2 items-center">
                <img src={Icone} alt={`ícone de ${Titulo}`} />
                <h4 className="font-bold text-lg">{Titulo}</h4>
            </div>

            <div className="bg-[#DEE2E6] h-0.5 w-full"></div>

            <div className="flex flex-wrap gap-3">
                {habilidades
                    .filter((habilidade) => habilidade.categoria === categoria)
                    .map((habilidade) => (
                        <CardHabilidade
                            key={habilidade.id}
                            nome={habilidade.nome}
                            icone={habilidade.icone}
                        />
                    ))}
            </div>

        </div>
    )
}

export default CardCategoriaHabilidade;