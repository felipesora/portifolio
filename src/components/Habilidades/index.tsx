import CardCategoriaHabilidade from "./CardCategoriaHabilidade";

const Habilidades = () => {
    return (
        <section className="bg-white pt-24 pb-32 px-40 flex flex-col gap-14">
        
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold">Minhas Habilidades</h2>
                <p className="text-base text-[#6C757D]">Tecnologias e ferramentas que utilizo para criar soluções eficientes</p>
            </div>
            
            <div className="flex flex-wrap justify-between gap-y-10">
                <CardCategoriaHabilidade categoria="front" />
                <CardCategoriaHabilidade categoria="back" />
                <CardCategoriaHabilidade categoria="outros" />
            </div>

        </section>
    )
}

export default Habilidades;