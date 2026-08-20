import IconeGithub from "../../../assets/icons/icone-github-branco.png";
import IconeYoutube from "../../../assets/icons/icone-youtube.png";
import CardTecnologia from "./CardTecnologia";
import { useParams } from "react-router-dom";
import { projetos } from "../../../data/projetos/dataProjetos";
import { useInView } from "../../../hooks/useInView";
import { useEffect, useState } from "react";

const CardDetalhesProjeto = () => {
    const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);
    const [imagemZoom, setImagemZoom] = useState(false);
    const [origemZoom, setOrigemZoom] = useState({ x: 50, y: 50 });
    
    const { ref, visible } = useInView<HTMLDivElement>();
    const { id } = useParams();

    useEffect(() => {
        if (imagemSelecionada) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [imagemSelecionada]);

    const projeto = projetos.find(
        (p) => p.id === Number(id)
    );

    if (!projeto) {
        return <div>Projeto não encontrado</div>;
    }

    return (
        <>
            <div ref={ref} className={`bg-white w-[80%] rounded-[10px] shadow-sm transition-all duration-700 ease-in-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [@media(max-width:1375px)]:w-full`}>

                <img src={projeto.imagem} alt={`Imagem do projeto ${projeto.titulo}`} className="w-full h-[200px] object-cover object-top rounded-t-[10px] border-b border-gray-300 2xl:h-125 xl:h-[450px] lg:h-[350px] md:h-[400px] sm:h-[250px]" />

                <div className="flex flex-col gap-7 p-12 [@media(max-width:1000px)]:px-7">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-bold [@media(max-width:550px)]:text-2xl">{projeto.titulo}</h1>

                        {projeto.descricaoLonga.map((paragrafo, index) => (
                            <p key={index} className="text-base text-justify text-[#6C757D] indent-4 [@media(max-width:550px)]:text-sm">
                                {paragrafo}
                            </p>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4 [@media(max-width:1023px)]:hidden">
                        <h2 className="font-bold text-2xl [@media(max-width:550px)]:text-xl">
                            Galeria
                        </h2>
                        <div className="grid grid-cols-2 gap-6">
                            {projeto.galeria?.map((imagem, index) => (
                                <img
                                    key={index}
                                    src={imagem.imagem} 
                                    alt="Imagem do projeto"
                                    onClick={() => setImagemSelecionada(imagem.imagem)}
                                    className="w-full rounded-[10px] cursor-pointer transition-all duration-300 hover:shadow-xl hover:opacity-90" 
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold text-2xl [@media(max-width:550px)]:text-xl">Tecnologias Utilizadas</h2>
                        <div className="flex flex-wrap gap-3">
                            {projeto.tecnologias.map((tecnologia) => (
                                <CardTecnologia nome={tecnologia.titulo} />
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 [@media(max-width:850px)]:flex-col [@media(max-width:850px)]:gap-2">
                        <a href={projeto.linkCodigo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-bold bg-[#313131] justify-center rounded-[10px] w-full py-3 cursor-pointer hover:bg-[#252525] transition-colors duration-300 [@media(max-width:550px)]:text-[14px] [@media(max-width:550px)]:py-2">
                            <img src={IconeGithub} alt="ícone github" className="[@media(max-width:550px)]:w-7"/>
                            Código Fonte
                        </a>
                        <a href={projeto.linkVideo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-bold bg-[#FF0000] justify-center rounded-[10px] w-full py-3 cursor-pointer hover:bg-[#ad0606] transition-colors duration-300 [@media(max-width:550px)]:text-[14px]">
                            <img src={IconeYoutube} alt="ícone do youtube" className="[@media(max-width:550px)]:w-6"/>
                            Ver Vídeo
                        </a>
                    </div>
                </div>
            </div>

            {imagemSelecionada && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 overflow-auto p-6"
                    onClick={() => {
                        setImagemSelecionada(null);
                        setImagemZoom(false);
                    }}
                >
                    <button
                        type="button"
                        onClick={() => {
                            setImagemSelecionada(null);
                            setImagemZoom(false);
                        }}
                        className="fixed top-6 right-6 text-white text-4xl font-light hover:text-gray-300 transition-colors cursor-pointer z-10"
                        aria-label="Fechar imagem"
                    >
                        &times;
                    </button>

                    <div className="min-h-full flex items-center justify-center">
                        <img
                            src={imagemSelecionada}
                            alt="Imagem ampliada do projeto"
                            onClick={(e) => {
                                e.stopPropagation();

                                if (!imagemZoom) {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                                    setOrigemZoom({ x, y });
                                }

                                setImagemZoom(!imagemZoom);
                            }}
                            style={{ transformOrigin: `${origemZoom.x}% ${origemZoom.y}%` }}
                            className={`object-contain rounded-lg shadow-2xl transition-transform duration-300 ${
                                imagemZoom
                                    ? "scale-150 cursor-zoom-out"
                                    : "max-w-[90vw] max-h-[90vh] cursor-zoom-in"
                            }`}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default CardDetalhesProjeto;