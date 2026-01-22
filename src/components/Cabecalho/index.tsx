import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import MenuAbrir from "../../assets/icons/icone-menu-lateral.png";
import MenuFechar from "../../assets/icons/icone-menu-fechar.png";
import { scrollToSection } from "../../utils/scrollToSection";

const Cabecalho = () => {
    const [menuAberto, setMenuAberto] = useState(false);

    const handleNavigate = (section: string) => {
        scrollToSection(section);
        setMenuAberto(false);
    };

    const secoes = [
        ["inicio", "Início"],
        ["sobre", "Sobre"],
        ["experiencia", "Experiência"],
        ["habilidades", "Habilidades"],
        ["projetos", "Projetos"],
        ["certificados", "Certificados"],
        ["contato", "Contato"]
    ];

    return (
        <header id="inicio" className="bg-(--color-primary) py-9 px-8 flex justify-between items-center border-b border-b-[#292929]">
            <button onClick={() => scrollToSection("inicio")} className="cursor-pointer [@media(max-width:1024px)]:w-28 [@media(max-width:670px)]:w-24">
                <img src={Logo} alt="Logo" />
            </button>
        
            {/* Menu Desktop */}
            <nav className="hidden lg:block">
                <ul className="flex gap-7">
                    {secoes.map(([id, label]) => (
                        <li key={id}>
                            <button onClick={() => scrollToSection(id)} className="nav-link-header">{label}</button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Botão Menu Mobile */}
            <button className="lg:hidden border border-white/20 p-1.5 rounded-[5px] cursor-pointer transition-all duration-200 hover:bg-white/10 active:scale-95" onClick={() => setMenuAberto(true)} aria-label="Abrir menu">
                <img src={MenuAbrir} alt="ícone de menu" className="w-7" />
            </button>

            {/* Overlay */}
            {menuAberto && (
                <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMenuAberto(false)} />
            )}

            {/* Menu lateral */}
            <aside className={`fixed top-0 right-0 h-full w-72 bg-(--color-primary) z-50 transform transition-transform duration-300 ease-in-out ${menuAberto ? "translate-x-0" : "translate-x-full"}`}>

                <div className="p-6 flex flex-col gap-6">
                    <button className="border-white/20 p-1.5 rounded-[5px] cursor-pointer self-end" onClick={() => setMenuAberto(false)} aria-label="Fechar menu">
                        <img src={MenuFechar} alt="ícone de X" className="w-7" />
                    </button>

                    <nav>
                        <ul className="flex flex-col gap-7">
                            {secoes.map(([id, label]) => (
                                <li key={id}>
                                    <button onClick={() => handleNavigate(id)} className="nav-link-header text-left">{label}</button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

            </aside>

        </header>
    )
    
}

export default Cabecalho;