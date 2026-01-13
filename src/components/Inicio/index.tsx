import HeroBg from "../../assets/images/fundo-hero-section.png";
import IconeEmail from "../../assets/icons/icone-email.png";
import IconeDownloadBranco from "../../assets/icons/icone-download-branco.png";
import IconeDownloadPreto from "../../assets/icons/icone-download-preto.png";
import IconeScroll from "../../assets/icons/icone-scroll.png";

const Inicio = () => {
    return (
        <section style={{ backgroundImage: `url(${HeroBg})` }} className="relative bg-cover bg-center">
            
            <div className="absolute inset-0 bg-[#111111]/90"></div>

            <div className="relative z-10 flex flex-col items-center gap-8 pt-36 pb-64">

                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-white font-bold text-lg">OLÁ, SEJA BEM VINDO!</h2>
                    <h1 className="text-white font-bold text-6xl">Eu sou Felipe Sora</h1>
                    <h2 className="text-white font-bold text-2xl">Engenheiro de Software</h2>
                </div>

                <div className="flex gap-5">
                    <button className="text-white font-bold bg-[#313131] flex items-center justify-center gap-2 rounded-[10px] py-3 w-48 cursor-pointer hover:bg-[#252525] transition-colors duration-300">
                        <img src={IconeEmail} alt="ícone de email" />
                        FALE COMIGO
                    </button>

                    <button className="group text-white font-bold bg-transparent border border-white flex items-center justify-center gap-2 rounded-[10px] w-48 py-3 cursor-pointer hover:bg-white hover:text-black transition-colors duration-300">
                        <img src={IconeDownloadBranco} alt="ícone de download" className="block group-hover:hidden" />
                        <img src={IconeDownloadPreto} alt="ícone de download" className="hidden group-hover:block" />
                        BAIXAR CV
                    </button>
                </div>
            </div>

            <div className="relative z-10 flex justify-center pb-7">
                <button className="cursor-pointer">
                    <img src={IconeScroll} alt="ícone de seta para baixo" className="animate-bounce-down" />
                </button>
            </div>

        </section>
    );
}

export default Inicio;