import IconeGithub from "../../assets/icons/icone-github-branco.png";
import IconeDeployPreto from "../../assets/icons/icone-link-preto.png";
import IconeDeployBranco from "../../assets/icons/icone-link-branco.png";
import IconeYoutube from "../../assets/icons/icone-youtube.png";
import CardTecnologia from "./CardTecnologia";
import type { CardProjetoProps } from "./types";

const CardProjeto = ({ imagem, titulo, descricao, linkCodigo, linkDeploy, linkVideo, tecnologias }: CardProjetoProps) => {
    return (
        <div className="bg-white flex flex-col rounded-[10px] min-w-[420px] w-[470px] shadow-sm border border-transparent hover:border-[#111111] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out [@media(max-width:1760px)]:w-[100%] [@media(max-width:1760px)]:min-w-0">

            <img src={imagem} alt="imagem do projeto" className="w-full h-[230px] rounded-t-[10px] [@media(max-width:1760px)]:object-cover" />

            <div className="px-5 pt-5 pb-3 flex flex-col flex-1 justify-between">
                
                <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-2xl [@media(max-width:550px)]:text-xl">{titulo}</h4>
                    <p className="text-[#6C757D] text-justify [@media(max-width:550px)]:text-[14px]">{descricao}</p>

                    <div className="flex gap-2 flex-wrap mt-2">
                        {tecnologias.map((tecnologia) => (
                            <CardTecnologia nome={tecnologia.titulo} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3 mt-5">
                    <div className="flex gap-5">
                        <a href={linkCodigo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-bold bg-[#313131] justify-center rounded-[10px] w-full py-3 cursor-pointer hover:bg-[#252525] transition-colors duration-300 [@media(max-width:550px)]:text-[14px] [@media(max-width:550px)]:py-2">
                            <img src={IconeGithub} alt="ícone github" className="[@media(max-width:550px)]:w-7"/>
                            Código
                        </a>

                        <a href={linkDeploy} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[#313131] font-bold bg-transparent border border-[#313131] justify-center rounded-[10px] w-full py-3 cursor-pointer hover:bg-[#313131] hover:text-white transition-colors duration-300 ease-in-out [@media(max-width:550px)]:text-[14px]">
                            <div className="relative w-7.5 h-7.5">
                                <img
                                    src={IconeDeployPreto}
                                    alt="ícone de link"
                                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 [@media(max-width:550px)]:w-7"
                                />
                                <img
                                    src={IconeDeployBranco}
                                    alt="ícone de link"
                                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [@media(max-width:550px)]:w-7"
                                />
                            </div>
                            Deploy
                        </a>
                    </div>

                    <a href={linkVideo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-bold bg-[#FF0000] justify-center rounded-[10px] w-full py-3 cursor-pointer hover:bg-[#ad0606] transition-colors duration-300 [@media(max-width:550px)]:text-[14px]">
                        <img src={IconeYoutube} alt="ícone do youtube" className="[@media(max-width:550px)]:w-7"/>
                        Vídeo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardProjeto;