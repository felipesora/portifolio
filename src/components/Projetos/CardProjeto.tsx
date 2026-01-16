import HeroBg from "../../assets/images/fundo-hero-section.png";
import IconeGithub from "../../assets/icons/icone-github-branco.png";
import IconeDeployPreto from "../../assets/icons/icone-link-preto.png";
import IconeYoutube from "../../assets/icons/icone-youtube.png";
import CardTecnologia from "./CardTecnologia";

const CardProjeto = () => {
    return (
        <div className="bg-white flex flex-col rounded-[10px] min-w-[320px] w-[28%] shadow-sm border border-transparent hover:border-[#111111] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out">
            <img src={HeroBg} alt="" className="w-full h-[219px] rounded-t-[10px]" />

            <div className="px-5 pt-5 pb-3 flex flex-col gap-2.5">
                <h4 className="font-bold text-2xl">AluraPlus</h4>
                <p className="text-[#6C757D] text-justify">Página promocional fictícia para serviço de assinatura de cursos de tecnologia e idiomas com layout responsivo e design moderno. Desenvolvido durante curso da Alura.</p>

                <div>
                    <CardTecnologia />
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex gap-5">
                        <button className="flex items-center gap-2 text-white font-bold bg-[#313131] justify-center gap-2 rounded-[10px] w-full py-3 cursor-pointer">
                            <img src={IconeGithub} alt="ícone github" />
                            Código
                        </button>

                        <button className="flex items-center gap-2 text-[#313131] font-bold bg-transparent border border-[#313131] justify-center gap-2 rounded-[10px] w-full py-3 cursor-pointer">
                            <img src={IconeDeployPreto} alt="ícone de link" />
                            Deploy
                        </button>
                    </div>

                    <button className="flex items-center gap-2 text-white font-bold bg-[#FF0000] justify-center gap-2 rounded-[10px] w-full py-3 cursor-pointer">
                        <img src={IconeYoutube} alt="ícone do youtube" />
                        Vídeo
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardProjeto;