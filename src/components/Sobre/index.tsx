import FotoFelipe from "../../assets/images/foto-felipe.png";
import { useInView } from "../../hooks/useInView";

const Sobre = () => {
    const { ref, visible } = useInView<HTMLDivElement>();

    return (
        <section id="sobre" className="bg-white pt-24 pb-32 px-40 flex flex-col gap-14 [@media(max-width:1180px)]:px-20 [@media(max-width:690px)]:px-10 [@media(max-width:550px)]:px-5! [@media(max-width:550px)]:pt-16 [@media(max-width:550px)]:pb-20">

            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold [@media(max-width:550px)]:text-2xl">Sobre Mim</h2>
                <p className="text-base text-[#6C757D] [@media(max-width:550px)]:text-sm">Conheça um pouco sobre minha trajetória, paixões e objetivos profissionais </p>
            </div>

            <div ref={ref} className={`flex gap-14 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} [@media(max-width:1180px)]:flex-col [@media(max-width:1180px)]:items-center [@media(max-width:1180px)]:text-center`}>
                <img src={FotoFelipe} alt="foto de Felipe" className="border border-[#6C757D] rounded-[5px] shadow-sm max-w-[350px] w-full h-auto object-cover [@media(max-width:1180px)]:max-w-[250px]" />

                <div className="flex flex-col gap-5">
                    <h3 className="text-2xl font-bold [@media(max-width:550px)]:text-xl">Engenheiro de Software & Desenvolvedor</h3>
                    <p className="text-base text-[#6C757D] text-justify [@media(max-width:550px)]:text-sm">Olá! Sou Felipe Sora, profissional formado em Análise e Desenvolvimento de Sistemas, com forte interesse em engenharia de software e desenvolvimento de aplicações robustas e bem estruturadas. Ao longo da minha trajetória, venho trabalhando com tecnologias como .NET, Java e React.js, sempre buscando unir boas práticas, clareza arquitetural e foco na experiência do usuário.</p>
                    <p className="text-base text-[#6C757D] text-justify [@media(max-width:550px)]:text-sm">Tenho como objetivo evoluir constantemente como desenvolvedor, aprofundando conhecimentos em backend, arquitetura de software e cloud, enquanto participo de projetos que gerem impacto real. Gosto de aprender, compartilhar conhecimento e construir soluções que façam sentido tanto técnica quanto funcionalmente.</p>
                </div>
            </div>
        </section>
    );
}

export default Sobre;