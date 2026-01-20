import Logo from "../../assets/images/logo.png";

const Cabecalho = () => {

    return (
        <header className="bg-(--color-primary) py-9 px-8 flex justify-between items-center border-b border-b-[#292929]">
            <button className="cursor-pointer">
                <img src={Logo} alt="Logo" />
            </button>
        
            <nav>
                <ul className="flex gap-7">
                    <li>
                        <button className="nav-link-header">Início</button>
                    </li>
                    <li>
                        <button className="nav-link-header">Sobre</button>
                    </li>
                    <li>
                        <button className="nav-link-header">Experiência</button>
                    </li>
                    <li>
                        <button className="nav-link-header">Habilidades</button>
                    </li>
                    <li>
                        <button className="nav-link-header">Projetos</button>
                    </li>
                    <li>
                        <button className="nav-link-header">Certificados</button>
                    </li>
                    <li>
                        <button className="nav-link-header">Contato</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
    
}

export default Cabecalho;