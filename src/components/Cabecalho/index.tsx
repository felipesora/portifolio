import Logo from "../../assets/images/logo.png";
import { scrollToSection } from "../../utils/scrollToSection";

const Cabecalho = () => {

    return (
        <header id="inicio" className="bg-(--color-primary) py-9 px-8 flex justify-between items-center border-b border-b-[#292929]">
            <button onClick={() => scrollToSection("inicio")} className="cursor-pointer">
                <img src={Logo} alt="Logo" />
            </button>
        
            <nav>
                <ul className="flex gap-7">
                    <li>
                        <button onClick={() => scrollToSection("inicio")} className="nav-link-header">Início</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("sobre")} className="nav-link-header">Sobre</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("experiencia")} className="nav-link-header">Experiência</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("habilidades")} className="nav-link-header">Habilidades</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("projetos")} className="nav-link-header">Projetos</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("certificados")} className="nav-link-header">Certificados</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("contato")} className="nav-link-header">Contato</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
    
}

export default Cabecalho;