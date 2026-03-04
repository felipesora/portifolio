import IconeGithub from "../../../assets/icons/icone-github-branco.png";
import IconeYoutube from "../../../assets/icons/icone-youtube.png";
import CardTecnologia from "./CardTecnologia";
import { useParams } from "react-router-dom";
import { projetos } from "../../../data/projetos/dataProjetos";

const CardDetalhesProjeto = () => {
    const { id } = useParams();

    const projeto = projetos.find(
        (p) => p.id === Number(id)
    );

    if (!projeto) {
        return <div>Projeto não encontrado</div>;
    }

    return (
        <div className="bg-white w-[80%] rounded-[10px] shadow-sm [@media(max-width:1375px)]:w-full">

            <img src={projeto.imagem} alt={`Imagem do projeto ${projeto.titulo}`} className="w-full h-[200px] object-cover object-top rounded-t-[10px] border-b border-gray-300 2xl:h-125 xl:h-[450px] lg:h-[350px] md:h-[400px] sm:h-[250px]" />

            <div className="flex flex-col gap-7 p-12 [@media(max-width:1000px)]:px-7">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold [@media(max-width:550px)]:text-2xl">{projeto.titulo}</h1>
                    <p className="text-base text-justify text-[#6C757D] [@media(max-width:550px)]:text-sm">{projeto.descricao}</p>
                </div>

                <div className="flex flex-col gap-4 [@media(max-width:1023px)]:hidden">
                    <h2 className="font-bold text-2xl [@media(max-width:550px)]:text-xl">Galeria</h2>
                    <div className="grid grid-cols-2 gap-6">
                        {projeto.galeria?.map((imagem) => (
                            <img src={imagem.imagem} alt="Imagem do projeto" className="w-full rounded-[10px] transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl" />
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
    )
}

export default CardDetalhesProjeto;