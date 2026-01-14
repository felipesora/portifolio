import CardCategoriaHabilidade from "./CardCategoriaHabilidade";

const Habilidades = () => {
    return (
        <section className="bg-white pt-24 pb-32 px-40 flex flex-col gap-14">
        
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold">Minhas Habilidades</h2>
                <p className="text-base text-[#6C757D]">Tecnologias e ferramentas que utilizo para criar soluções eficientes</p>
            </div>

            {/* Definir o width full, mas manter um min width, assim usando space between */}
            {/* Ver de usar um wrap, para quebrar e colocar 2 em cima e 1 em baixo centralizado */}
            <div className="flex flex-col gap-52">
                <CardCategoriaHabilidade categoria="front" />
                <CardCategoriaHabilidade categoria="back" />
                <CardCategoriaHabilidade categoria="outros" />
            </div>

        </section>
    )
}

export default Habilidades;