import AnimatedItem from "../AnimatedItem";
import CardCarreira from "./CardCarreira";
import { itensCarreira } from "./data";
import IconeCarreira from "./IconeCarreira";

const Experiencia = () => {
    return (
        <section id="experiencia" className="bg-[#EBEBEB] pt-24 pb-32 px-40 flex flex-col gap-14 [@media(max-width:1180px)]:px-20 [@media(max-width:690px)]:px-10 [@media(max-width:550px)]:px-5! [@media(max-width:550px)]:pt-16 [@media(max-width:550px)]:pb-20">

            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold [@media(max-width:550px)]:text-2xl">Experiência & Educação</h2>
                <p className="text-base text-[#6C757D] [@media(max-width:550px)]:text-sm">Minha jornada profissional e acadêmica até o momento</p>
            </div>

            <div className="flex flex-col gap-8">
                <h3 className="text-2xl font-bold [@media(max-width:550px)]:text-xl">Experiência</h3>

                {itensCarreira
                    .filter((item) => item.tipo === "experiencia")
                    .map((item) => (
                        <AnimatedItem key={item.id}>
                            <div className="flex items-start gap-6 [@media(max-width:890px)]:gap-2">

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
                        </AnimatedItem>
                ))}
            </div>

            <div className="flex flex-col gap-8">
                <h3 className="text-2xl font-bold [@media(max-width:550px)]:text-xl">Educação</h3>

                {itensCarreira
                    .filter((item) => item.tipo === "educacao")
                    .map((item) => (
                        <AnimatedItem key={item.id}>
                            <div className="flex items-start gap-6 [@media(max-width:890px)]:gap-2">

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
                        </AnimatedItem>
                ))}
            </div>
        </section>
    );
};

export default Experiencia;