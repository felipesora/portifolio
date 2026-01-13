import IconeCarreira from "./IconeCarreira";

const Experiencia = () => {
    return (
        <section className="bg-[#EBEBEB] pt-24 pb-32 px-40 flex flex-col gap-14">

            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold">Experiência & Educação</h2>
                <p className="text-base text-[#6C757D]">Minha jornada profissional e acadêmica até o momento</p>
            </div>

            <div className="flex flex-col gap-8">
                <h3 className="text-2xl font-bold">Experiência</h3>

                <div>
                    <IconeCarreira tipo="experiencia" />
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <h3 className="text-2xl font-bold">Educação</h3>

                <div>
                    <IconeCarreira tipo="educacao" />
                </div>
            </div>
        </section>
    );
};

export default Experiencia;