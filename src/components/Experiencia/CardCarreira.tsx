import type { CardCarreiraProps } from "./types";

const CardCarreira = ({ tipo, data, titulo, instituicao, descricao }: CardCarreiraProps) => {
    return (
        <div className="bg-white rounded-[10px] pt-3.5 pb-8 px-8 shadow-sm flex flex-col gap-3">
            <p className="font-bold text-[#313131] [@media(max-width:550px)]:text-sm">{data}</p>
            <h4 className="font-bold text-xl [@media(max-width:550px)]:text-base">{titulo}</h4>
            <p className="text-[#6C757D] [@media(max-width:550px)]:text-sm">{tipo == 'experiencia' ? `Empresa: ${instituicao}` : instituicao}</p>
            <p className="text-[#111111] text-justify [@media(max-width:550px)]:text-sm">{descricao}</p>
        </div>
    )
};

export default CardCarreira;