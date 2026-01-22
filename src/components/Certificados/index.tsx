import { useInView } from "../../hooks/useInView";
import CardCertificado from "./CardCertificado";
import { certificados } from "./dataCertificados";

const Certificados = () => {
    const { ref, visible } = useInView<HTMLDivElement>();

    return (
        <section id="certificados" className="bg-white pt-24 pb-32 px-40 flex flex-col gap-14 [@media(max-width:1180px)]:px-20 [@media(max-width:690px)]:px-10">
        
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold">Certificados</h2>
                <p className="text-base text-[#6C757D]">Certificações que adquiri ao longo da minha jornada de aprendizado</p>
            </div>
            
            <div className={`grid grid-cols-[auto_auto_auto] justify-between gap-y-10 transition-all duration-700 ease-in-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [@media(max-width:1540px)]:grid-cols-2 [@media(max-width:1540px)]:gap-x-20 [@media(max-width:1180px)]:grid-cols-1!`} ref={ref}>
                {certificados.map((certificado) => (
                    <CardCertificado 
                        key={certificado.id} 
                        nome={certificado.nome} 
                        instituicao={certificado.instituicao} 
                        link={certificado.link}
                    />
                ))}
            </div>

        </section>
    )
}

export default Certificados;