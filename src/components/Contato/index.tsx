import CardContato from "./CardContato";
import IconeEmailBranco from "../../assets/icons/icone-email-branco.png";
import IconeEmailPreto from "../../assets/icons/icone-email-preto.png";
import IconeGithubBranco from "../../assets/icons/icone-github-branco.png";
import IconeGithubPreto from "../../assets/icons/icone-github-preto.png";
import IconeLinkedinBranco from "../../assets/icons/icone-linkedin-branco.png";
import IconeLinkedinPreto from "../../assets/icons/icone-linkedin-preto.png";

const Contato = () => {
    return (
        <section id="contato" className="bg-(--color-primary) pt-24 pb-16 px-40 flex flex-col gap-14 [@media(max-width:1180px)]:px-20 [@media(max-width:690px)]:px-10 [@media(max-width:550px)]:px-5! [@media(max-width:550px)]:pt-16 [@media(max-width:550px)]:pb-20">
        
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold text-white [@media(max-width:550px)]:text-2xl">Entre em Contato</h2>
                <p className="text-base text-[#CED4DA] [@media(max-width:550px)]:text-sm">Tem interesse em conversar, colaborar ou trocar ideias? Estou aberto a novas oportunidades, projetos e conexões profissionais.</p>
            </div>

            <div className="flex flex-col gap-7">
                <CardContato icone={IconeEmailBranco} iconeHover={IconeEmailPreto} nome="E-mail" descricao="felipeusora@gmail.com" link="mailto:felipeusora@gmail.com" />
                <CardContato icone={IconeGithubBranco} iconeHover={IconeGithubPreto} nome="GitHub" descricao="@felipesora" link="https://github.com/felipesora" />
                <CardContato icone={IconeLinkedinBranco} iconeHover={IconeLinkedinPreto} nome="Linkedin" descricao="Felipe Ulson Sora" link="https://www.linkedin.com/in/felipesora/" />
            </div>

        </section>
    );
}

export default Contato;