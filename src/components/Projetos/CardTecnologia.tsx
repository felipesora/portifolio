import type { CardTecnologiaProps } from "./types";

const CardTecnologia = ({ nome }: CardTecnologiaProps) => {
    return (
        <div className="bg-[#EBEBEB] w-fit rounded-[20px] py-2 px-3.75 border border-[#DEE2E6]">
            <p className="font-bold text-[#313131] text-sm">{nome}</p>
        </div>
    )
}

export default CardTecnologia;