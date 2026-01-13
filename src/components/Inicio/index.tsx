import HeroBg from "../../assets/images/fundo-hero-section.png";
import IconeEmail from "../../assets/icons/icone-email.png";
import IconeDownload from "../../assets/icons/icone-download.png";
import IconeScroll from "../../assets/icons/icone-scroll.png";

const Inicio = () => {
    return (
        <section style={{ backgroundImage: `url(${HeroBg})` }} className="relative bg-cover bg-center">
            
            <div className="absolute inset-0 bg-[#111111]/90"></div>

            <div className="relative z-10 flex flex-col items-center gap-8 pt-36 pb-80">

                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-white font-bold text-lg">OLÁ, SEJA BEM VINDO!</h2>
                    <h1 className="text-white font-bold text-6xl">Eu sou Felipe Sora</h1>
                    <h2 className="text-white font-bold text-2xl">Engenheiro de Software</h2>
                </div>

                <div>
                    <button className="text-white font-bold bg-[#313131] flex items-center gap-2 rounded-[10px] px-5 py-3 cursor-pointer hover:bg-[#252525] transition-colors duration-300">
                        <img src={IconeEmail} alt="ícone de email" />
                        FALE COMIGO
                    </button>
                </div>
            </div>
            
            

        </section>
    );
}

export default Inicio;