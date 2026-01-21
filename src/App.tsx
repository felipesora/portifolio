import Cabecalho from "./components/Cabecalho"
import Certificados from "./components/Certificados"
import Contato from "./components/Contato"
import Experiencia from "./components/Experiencia"
import Habilidades from "./components/Habilidades"
import Inicio from "./components/Inicio"
import Projetos from "./components/Projetos"
import Rodape from "./components/Rodape"
import Sobre from "./components/Sobre"

function App() {
  return (
    <>
      <Cabecalho />
      <Inicio />
      <Sobre />
      <Experiencia />
      <Habilidades />
      <Projetos />
      <Certificados />
      <Contato />
      <Rodape />
    </>
  )
}

export default App
