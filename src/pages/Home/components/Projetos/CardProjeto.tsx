import { useNavigate } from "react-router-dom";
import IconeVerMais from "../../../../assets/icons/icone-ver-mais.png";
import type { CardProjetoProps } from "./types";

const CardProjeto = ({ id, imagem, titulo, descricao }: CardProjetoProps) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white flex flex-col rounded-[10px] min-w-[420px] w-[470px] shadow-sm border border-transparent hover:border-[#111111] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out [@media(max-width:1760px)]:w-[100%] [@media(max-width:1760px)]:min-w-0">

            <img src={imagem} alt="imagem do projeto" className="w-full h-[230px] rounded-t-[10px] [@media(max-width:1760px)]:object-cover" />

            <div className="px-5 pt-5 pb-3 flex flex-col flex-1 justify-between">
                
                <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-2xl [@media(max-width:550px)]:text-xl">{titulo}</h4>
                    <p className="text-[#6C757D] text-justify [@media(max-width:550px)]:text-[14px]">{descricao}</p>
                </div>

                <div className="flex flex-col gap-3 mt-5">
                    <button className="flex items-center gap-2 text-white font-bold bg-[#313131] justify-center rounded-[10px] w-full py-3 cursor-pointer hover:bg-[#252525] transition-colors duration-300 [@media(max-width:550px)]:text-[14px] [@media(max-width:550px)]:py-2" onClick={() => navigate(`/projeto/${id}`)}>
                        Ver Detalhes
                        <img src={IconeVerMais} alt="ícone github" className="w-6 h-6"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardProjeto;