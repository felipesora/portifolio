import FotoFelipe from "../../assets/images/foto-felipe.png";

const Sobre = () => {
    return (
        <section className="bg-white pt-24 pb-32 px-40 flex flex-col gap-14">

            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold">Sobre Mim</h2>
                <p className="text-base text-[#6C757D]">Conheça um pouco sobre minha trajetória, paixões e objetivos profissionais </p>
            </div>

            <div className="flex gap-14">
                <img src={FotoFelipe} alt="foto de Felipe" className="border border-[#6C757D] rounded-[5px] shadow-sm" />

                <div className="flex flex-col gap-5">
                    <h3 className="text-2xl font-bold">Engenheiro de Software & Desenvolvedor</h3>
                    <p className="text-base text-[#6C757D] text-justify">Olá! Sou Felipe Sora, profissional formado em Análise e Desenvolvimento de Sistemas, com forte interesse em engenharia de software e desenvolvimento de aplicações robustas e bem estruturadas. Ao longo da minha trajetória, venho trabalhando com tecnologias como .NET, Java e React.js, sempre buscando unir boas práticas, clareza arquitetural e foco na experiência do usuário.</p>
                    <p className="text-base text-[#6C757D] text-justify">Tenho como objetivo evoluir constantemente como desenvolvedor, aprofundando conhecimentos em backend, arquitetura de software e cloud, enquanto participo de projetos que gerem impacto real. Gosto de aprender, compartilhar conhecimento e construir soluções que façam sentido tanto técnica quanto funcionalmente.</p>
                </div>
            </div>
        </section>
    );
}

export default Sobre;