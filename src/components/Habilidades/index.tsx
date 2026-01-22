import { useInView } from "../../hooks/useInView";
import CardCategoriaHabilidade from "./CardCategoriaHabilidade";

const Habilidades = () => {
    const { ref, visible } = useInView<HTMLDivElement>();

    return (
        <section id="habilidades" className="bg-white pt-24 pb-32 px-40 flex flex-col gap-14 [@media(max-width:1180px)]:px-20 [@media(max-width:690px)]:px-10">
        
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold">Minhas Habilidades</h2>
                <p className="text-base text-[#6C757D]">Tecnologias e ferramentas que utilizo para criar soluções eficientes</p>
            </div>
            
            <div className={`flex flex-wrap justify-between gap-y-10 transition-all duration-700 ease-in-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [@media(max-width:1620px)]:grid [@media(max-width:1620px)]:grid-cols-2 [@media(max-width:1620px)]:gap-10 [@media(max-width:1180px)]:grid-cols-1!`} ref={ref}>
                <CardCategoriaHabilidade categoria="front" />
                <CardCategoriaHabilidade categoria="back" />
                <CardCategoriaHabilidade categoria="outros" />
            </div>

        </section>
    )
}

export default Habilidades;