import type { CardContatoProps } from "./types";

const CardContato = ({ icone, iconeHover, nome, descricao, link }: CardContatoProps) => {
    return (
        <div className="flex items-center gap-3">
            <a href={link} target="_blank" className="group inline-flex bg-[#292929] rounded-full p-2.5 border border-white/20 transition-colors duration-300 ease-in-out
                    hover:bg-white">
                <div className="relative w-7.5 h-7.5">
                    <img
                        src={icone}
                        alt={`ícone de ${nome}`}
                        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                        src={iconeHover}
                        alt={`ícone de ${nome}`}
                        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                </div>
            </a>

            <div>
                <h4 className="font-bold text-white text-lg">{nome}</h4>
                <p className="text-white">{descricao}</p>
            </div>
        </div>
    )
}

export default CardContato;