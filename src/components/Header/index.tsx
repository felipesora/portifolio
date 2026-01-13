import Logo from "/assets/images/logo.png";

const Header = () => {

    return (
        <header className="bg-[var(--color-primary)] py-9 px-8 flex justify-between items-center border-b border-b-[#292929]">
            <button className="cursor-pointer">
                <img src={Logo} alt="Logo" />
            </button>
        
            <ul className="flex gap-7">
                <li>
                    <button className="nav-link">Início</button>
                </li>
                <li>
                    <button className="nav-link">Sobre</button>
                </li>
                <li>
                    <button className="nav-link">Experiência</button>
                </li>
                <li>
                    <button className="nav-link">Habilidades</button>
                </li>
                <li>
                    <button className="nav-link">Projetos</button>
                </li>
                <li>
                    <button className="nav-link">Certificados</button>
                </li>
                <li>
                    <button className="nav-link">Contato</button>
                </li>
            </ul>
        </header>
    )
    
}

export default Header;