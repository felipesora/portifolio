import type { CardCertificadoProps } from "./types";
import IconeCertificado from "../../assets/icons/icone-certificado.png"

const CardCertificado = ({ nome, instituicao, link }: CardCertificadoProps) => {
    return (
        <div className="bg-[#EBEBEB] shadow-sm rounded-[10px] py-16 px-24 flex flex-col gap-5 items-center border border-transparent hover:border-[#111111] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out [@media(max-width:1540px)]:w-[100%] [@media(max-width:1180px)]:py-12 [@media(max-width:410px)]:px-16">
            <img src={IconeCertificado} alt="icone certificado" />

            <div className="flex flex-col gap-1 items-center">
                <h4 className="font-bold text-[#313131] text-xl [@media(max-width:550px)]:text-base">{nome}</h4>
                <p className="text-[#6C757D] [@media(max-width:550px)]:text-sm">{instituicao}</p>
            </div>

            <a href={link} target="_blank" rel="noopener noreferrer" className="text-center font-bold text-[#313131] border border-[#313131] py-3 px-8 rounded-[10px] transition-colors duration-300 ease-in-out hover:bg-[#313131] hover:text-white [@media(max-width:550px)]:text-sm" aria-label={`Ver certificado ${nome} - ${instituicao}`}>Ver Certificado</a>
        </div>
    )
}

export default CardCertificado;