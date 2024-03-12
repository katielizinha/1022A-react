import "./App.css"
import MeuComponente from './componentes/MeuComponente'

function App() {
  let nome = "katiely"
  let sobrenome = "fernanda"
  return ( 
  <>
    <MeuComponente/>
    <h1 className="meu-nome">Olá eu sou a {nome } {sobrenome}</h1>
    <h1>Olá eu sou a {nome } {sobrenome}</h1>
  </>
  ) //JSX- Javascript XML
}
export default App



//um componente é uma função que devolve jsx, mas dentro desse retorno que só pode devolver um elemento, ou seja todos os outos elemento deve estar dentro desse elemento