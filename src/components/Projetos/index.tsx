import CardProjeto from "./CardProjeto";

const Projetos = () => {
    return(
        <section className="bg-[#EBEBEB] pt-24 pb-32 px-40 flex flex-col gap-14">
        
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold">Meus Projetos</h2>
                <p className="text-base text-[#6C757D]">Alguns dos projetos que desenvolvi para praticar e demonstrar minhas habilidades</p>
            </div>

            <div className="flex flex-wrap justify-between gap-y-10">
                <CardProjeto />
                <CardProjeto />
                <CardProjeto />
            </div>

        </section>
    )
}

export default Projetos;