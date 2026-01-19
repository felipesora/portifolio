import HeroBg from "../../assets/images/fundo-hero-section.png";
import IconeGithub from "../../assets/icons/icone-github-branco.png";
import IconeDeployPreto from "../../assets/icons/icone-link-preto.png";
import IconeYoutube from "../../assets/icons/icone-youtube.png";
import CardTecnologia from "./CardTecnologia";
import type { CardProjetoProps } from "./types";

const CardProjeto = ({ imagem, titulo, descricao, linkCodigo, linkDeploy, linkVideo, tecnologias }: CardProjetoProps) => {
    return (
        <div className="bg-white flex flex-col rounded-[10px] min-w-[320px] w-[28%] shadow-sm border border-transparent hover:border-[#111111] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out">
            <img src={imagem} alt="" className="w-full h-[219px] rounded-t-[10px]" />

            <div className="px-5 pt-5 pb-3 flex flex-col gap-2.5">
                <h4 className="font-bold text-2xl">{titulo}</h4>
                <p className="text-[#6C757D] text-justify">{descricao}</p>

                <div className="flex gap-1.5 flex-wrap">
                    {tecnologias.map((tecnologia) => (
                        <CardTecnologia nome={tecnologia.titulo} />
                    ))}
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex gap-5">
                        <a href={linkCodigo} target="_blank" className="flex items-center gap-2 text-white font-bold bg-[#313131] justify-center gap-2 rounded-[10px] w-full py-3 cursor-pointer">
                            <img src={IconeGithub} alt="ícone github" />
                            Código
                        </a>

                        <a href={linkDeploy} target="_blank" className="flex items-center gap-2 text-[#313131] font-bold bg-transparent border border-[#313131] justify-center gap-2 rounded-[10px] w-full py-3 cursor-pointer">
                            <img src={IconeDeployPreto} alt="ícone de link" />
                            Deploy
                        </a>
                    </div>

                    <a href={linkVideo} target="_blank" className="flex items-center gap-2 text-white font-bold bg-[#FF0000] justify-center gap-2 rounded-[10px] w-full py-3 cursor-pointer">
                        <img src={IconeYoutube} alt="ícone do youtube" />
                        Vídeo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardProjeto;