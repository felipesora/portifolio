import CardCarreira from "./CardCarreira";
import { itensCarreira } from "./data";
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

                {itensCarreira
                    .filter((item) => item.tipo === "experiencia")
                    .map((item) => (
                        <div key={item.id} className="flex items-start gap-6">

                            <div className="shrink-0">
                                <IconeCarreira tipo={item.tipo} />
                            </div>

                            <CardCarreira 
                                tipo={item.tipo}
                                data={item.data}
                                titulo={item.titulo} 
                                instituicao={item.instituicao}
                                descricao={item.descricao}
                            />
                        </div>
                ))}
            </div>

            <div className="flex flex-col gap-8">
                <h3 className="text-2xl font-bold">Educação</h3>

                {itensCarreira
                    .filter((item) => item.tipo === "educacao")
                    .map((item) => (
                        <div key={item.id} className="flex items-start gap-6">

                            <div className="shrink-0">
                                <IconeCarreira tipo={item.tipo} />
                            </div>

                            <CardCarreira 
                                tipo={item.tipo}
                                data={item.data}
                                titulo={item.titulo} 
                                instituicao={item.instituicao}
                                descricao={item.descricao}
                            />
                        </div>
                ))}
            </div>
        </section>
    );
};

export default Experiencia;