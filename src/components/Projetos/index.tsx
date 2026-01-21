import { useInView } from "../../hooks/useInView";
import CardProjeto from "./CardProjeto";
import { projetos } from "./dataProjetos";

const Projetos = () => {
    const { ref, visible } = useInView<HTMLDivElement>();

    return(
        <section id="projetos" className="bg-[#EBEBEB] pt-24 pb-32 px-40 flex flex-col gap-14">
        
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold">Meus Projetos</h2>
                <p className="text-base text-[#6C757D]">Alguns dos projetos que desenvolvi para praticar e demonstrar minhas habilidades</p>
            </div>

            <div className={`grid grid-cols-[auto_auto_auto] justify-between gap-y-10 transition-all duration-700 ease-in-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} ref={ref}>
                {projetos.map((projeto) => (
                    <CardProjeto
                        key={projeto.id}
                        imagem={projeto.imagem}
                        titulo={projeto.titulo}
                        descricao={projeto.descricao}
                        linkCodigo={projeto.linkCodigo}
                        linkDeploy={projeto.linkDeploy}
                        linkVideo={projeto.linkVideo}
                        tecnologias={projeto.tecnologias}
                    />
                ))}
            </div>

        </section>
    )
}

export default Projetos;