import CardCertificado from "./CardCertificado";
import { certificados } from "./dataCertificados";

const Certificados = () => {
    return (
        <section id="certificados" className="bg-white pt-24 pb-32 px-40 flex flex-col gap-14">
        
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold">Certificados</h2>
                <p className="text-base text-[#6C757D]">Certificações que adquiri ao longo da minha jornada de aprendizado</p>
            </div>
            
            <div className="flex flex-wrap justify-between gap-y-10">
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