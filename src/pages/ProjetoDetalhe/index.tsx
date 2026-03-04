import { useEffect } from "react";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import CardDetalhesProjeto from "./components/CardDetalhesProjeto";

const ProjetoDetalhe = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Cabecalho tipo="detalhesProjeto"/>
            <section className="bg-[#EBEBEB] pt-48 pb-32 px-40 flex justify-center gap-14 [@media(max-width:1180px)]:px-20 [@media(max-width:690px)]:px-10 [@media(max-width:550px)]:px-5! [@media(max-width:550px)]:pt-16 [@media(max-width:550px)]:pb-20">
                <CardDetalhesProjeto />
            </section>
            <Rodape tipo="detalhesProjeto" />
        </>
    );
}

export default ProjetoDetalhe;