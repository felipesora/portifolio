import Imagem from "../../../data/projetos/images/lifeboard.png";
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
        <div className="bg-white w-full rounded-[10px] shadow-sm">

            <img src={projeto.imagem} alt={`Imagem do projeto ${projeto.titulo}`} className="w-full h-125 object-cover object-top rounded-t-[10px]" />

            <div className="flex flex-col gap-7 p-12">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold [@media(max-width:550px)]:text-2xl">{projeto.titulo}</h1>
                    <p className="text-base text-[#6C757D] [@media(max-width:550px)]:text-sm">{projeto.descricao}</p>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl [@media(max-width:550px)]:text-xl">Galeria</h2>
                    <div className="flex justify-between">
                        <img src={Imagem} alt="" className="w-112.5 rounded-[10px]" />
                        <img src={Imagem} alt="" className="w-112.5 rounded-[10px]" />
                        <img src={Imagem} alt="" className="w-112.5 rounded-[10px]" />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl [@media(max-width:550px)]:text-xl">Tecnologias Utilizadas</h2>
                    <div className="flex gap-3">
                        {projeto.tecnologias.map((tecnologia) => (
                            <CardTecnologia nome={tecnologia.titulo} />
                        ))}
                    </div>
                </div>

                <div className="flex gap-4">
                    <a href={projeto.linkCodigo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-bold bg-[#313131] justify-center rounded-[10px] w-full py-3 cursor-pointer hover:bg-[#252525] transition-colors duration-300 [@media(max-width:550px)]:text-[14px] [@media(max-width:550px)]:py-2">
                        <img src={IconeGithub} alt="ícone github" className="[@media(max-width:550px)]:w-7"/>
                        Código Fonte
                    </a>
                    <a href={projeto.linkVideo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-bold bg-[#FF0000] justify-center rounded-[10px] w-full py-3 cursor-pointer hover:bg-[#ad0606] transition-colors duration-300 [@media(max-width:550px)]:text-[14px]">
                        <img src={IconeYoutube} alt="ícone do youtube" className="[@media(max-width:550px)]:w-7"/>
                        Ver Vídeo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardDetalhesProjeto;