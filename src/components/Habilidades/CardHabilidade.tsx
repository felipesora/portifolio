import type { CardHabilidadeProps } from "./types";

const CardHabilidade = ({ nome, icone }: CardHabilidadeProps) => {
    return (
        <div className="bg-white border border-[#DEE2E6] rounded-[10px] flex flex-col gap-1 items-center justify-center py-5 h-32 flex-1
            min-w-40 max-w-full">
            <img src={icone} alt={`ícone de ${nome}`} />
            <h5 className="font-semibold wrap-break-word text-center [@media(max-width:550px)]:text-[14px]">{nome}</h5>
        </div>
    )
}
export default CardHabilidade;