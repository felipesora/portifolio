import type { CardHabilidadeProps } from "./types";

const CardHabilidade = ({ nome, icone }: CardHabilidadeProps) => {
    return (
        <div className="bg-white border border-[#DEE2E6] rounded-[10px] flex flex-col gap-1 items-center justify-center py-5 w-37.5 h-32">
            <img src={icone} alt={`ícone de ${nome}`} />
            <h5 className="font-semibold wrap-break-word text-center">{nome}</h5>
        </div>
    )
}
export default CardHabilidade;