import IconeExperiencia from "../../assets/icons/icone-experiencia.png";
import IconeEducacao from "../../assets/icons/icone-educacao.png";
import type { IconeCarreiraProps } from "./types";

const iconesPorTipo = {
    experiencia: IconeExperiencia,
    educacao: IconeEducacao,
} as const;

const IconeCarreira = ({ tipo }: IconeCarreiraProps) => {
    const Icone = iconesPorTipo[tipo];

    return (
        <div className="inline-flex bg-[#313131] rounded-full p-1.5 border-4 border-white">
            <img
                src={Icone}
                alt={`ícone de ${tipo}`}
            />
        </div>
    )
};

export default IconeCarreira;