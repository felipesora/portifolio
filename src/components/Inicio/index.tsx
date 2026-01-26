import HeroBg from "../../assets/images/fundo-hero-section.png";
import IconeEmail from "../../assets/icons/icone-email-branco.png";
import IconeDownloadBranco from "../../assets/icons/icone-download-branco.png";
import IconeDownloadPreto from "../../assets/icons/icone-download-preto.png";
import IconeScroll from "../../assets/icons/icone-scroll.png";
import { useEffect, useState } from "react";
import { scrollToSection } from "../../utils/scrollToSection";

const Inicio = () => {
    const [is470, setIs470] = useState(false);

    
    useEffect(() => {
        const checkWidth = () => {
            setIs470(window.innerWidth <= 470);
        };

        checkWidth(); // inicial
        window.addEventListener("resize", checkWidth);

        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    const texts = [
        "Engenheiro de Software",
        "Desenvolvedor Full Stack",
        is470 ? "Formado em ADS" :
        "Formado em Análise e Desenvolvimento de Sistemas"
    ];

    const [textIndex, setTextIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);
    const [displayText, setDisplayText] = useState<string>("");
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && charIndex < currentText.length) {
            // digitando
            timeout = setTimeout(() => {
                setDisplayText(currentText.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 100);
        }
        else if (isDeleting && charIndex > 0) {
            // apagando
            timeout = setTimeout(() => {
                setDisplayText(currentText.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, 60);
        }
        else if (!isDeleting && charIndex === currentText.length) {
            // pausa antes de apagar
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 1500);
        }
        else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex]);
    
    return (
        <section style={{ backgroundImage: `url(${HeroBg})` }} className="relative bg-cover bg-center bg-fixed">
            
            <div className="absolute inset-0 bg-[#111111]/90"></div>

            <div className="relative z-10 flex flex-col items-center gap-8 pt-44 pb-64 [@media(max-width:1180px)]:pb-56 [@media(max-width:750px)]:pt-32 [@media(max-width:750px)]:pb-40 [@media(max-width:750px)]:gap-5">

                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-white font-bold text-lg">OLÁ, SEJA BEM VINDO!</h2>
                    <h1 className="text-white font-bold text-6xl [@media(max-width:750px)]:text-4xl">Eu sou Felipe Sora</h1>
                    <h2 className="text-white font-bold text-2xl min-h-8 [@media(max-width:750px)]:text-lg [@media(max-width:550px)]:text-[14px]! ">
                        {displayText}
                        <span className="animate-pulse">|</span>
                    </h2>
                </div>

                <div className="flex gap-5 [@media(max-width:750px)]:flex-col-reverse">
                    <button onClick={() => scrollToSection("contato")} className="text-white font-bold bg-[#313131] flex items-center justify-center gap-2 rounded-[10px] py-3 w-48 cursor-pointer hover:bg-[#252525] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 [@media(max-width:750px)]:w-64 [@media(max-width:550px)]:text-[14px] [@media(max-width:550px)]:w-56!">
                        <img src={IconeEmail} alt="ícone de email" />
                        FALE COMIGO
                    </button>

                    <button className="group text-white font-bold bg-transparent border border-white flex items-center justify-center gap-2 rounded-[10px] w-48 py-3 cursor-pointer hover:bg-white hover:text-black hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 [@media(max-width:750px)]:w-64 [@media(max-width:550px)]:text-[14px] [@media(max-width:550px)]:w-56!">
                        <div className="relative w-7.5 h-7.5">
                            <img
                                src={IconeDownloadBranco}
                                alt="ícone de download"
                                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                            />
                            <img
                                src={IconeDownloadPreto}
                                alt="ícone de download"
                                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </div>
                        BAIXAR CV
                    </button>
                </div>
            </div>

            <div className="relative z-10 flex justify-center pb-7">
                <button onClick={() => scrollToSection("sobre")} className="cursor-pointer">
                    <img src={IconeScroll} alt="ícone de seta para baixo" className="animate-bounce-down" />
                </button>
            </div>

        </section>
    );
}

export default Inicio;