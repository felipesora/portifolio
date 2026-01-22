import Logo from "../../assets/images/logo.png";
import { scrollToSection } from "../../utils/scrollToSection";

const Rodape = () => {
    return (
        <footer className="bg-(--color-primary) py-12 border-t border-t-[#292929] flex flex-col items-center gap-14">
            <button onClick={() => scrollToSection("inicio")} className="cursor-pointer">
                <img src={Logo} alt="logo" />
            </button>

            <nav className="block [@media(max-width:780px)]:hidden">
                <ul className="flex gap-8">
                    <li>
                        <button onClick={() => scrollToSection("inicio")} className="nav-link-footer">Início</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("sobre")} className="nav-link-footer">Sobre</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("experiencia")} className="nav-link-footer">Experiência</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("habilidades")} className="nav-link-footer">Habilidades</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("projetos")} className="nav-link-footer">Projetos</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("certificados")} className="nav-link-footer">Certificados</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("contato")} className="nav-link-footer">Contato</button>
                    </li>
                </ul>
            </nav>

            <p className="text-white text-sm">© 2026 Felipe Sora. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Rodape;