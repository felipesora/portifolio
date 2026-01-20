import Logo from "../../assets/images/logo.png";

const Rodape = () => {
    return (
        <footer className="bg-(--color-primary) py-12 border-t border-t-[#292929] flex flex-col items-center gap-14">
            <button className="cursor-pointer">
                <img src={Logo} alt="logo" />
            </button>

            <nav>
                <ul className="flex gap-8">
                    <li>
                        <button className="nav-link-footer">Início</button>
                    </li>
                    <li>
                        <button className="nav-link-footer">Sobre</button>
                    </li>
                    <li>
                        <button className="nav-link-footer">Experiência</button>
                    </li>
                    <li>
                        <button className="nav-link-footer">Habilidades</button>
                    </li>
                    <li>
                        <button className="nav-link-footer">Projetos</button>
                    </li>
                    <li>
                        <button className="nav-link-footer">Certificados</button>
                    </li>
                    <li>
                        <button className="nav-link-footer">Contato</button>
                    </li>
                </ul>
            </nav>

            <p className="text-white text-sm">© 2026 Felipe Sora. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Rodape;