import type { CardTecnologiaProps } from "../../../types/ProjetoTypes";

const CardTecnologia = ({ nome }: CardTecnologiaProps) => {
    return (
        <div className="bg-[#EBEBEB] text-[#313131] w-fit rounded-[20px] py-2 px-3.75 border border-[#DEE2E6] transition-all duration-300 ease-out hover:bg-[#313131] hover:-translate-y-1 hover:shadow-md hover:text-white">
            <p className="font-bold text-sm [@media(max-width:550px)]:text-[12px]">{nome}</p>
        </div>
    )
}

export default CardTecnologia;