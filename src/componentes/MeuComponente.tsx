//faça um componente que faça um retângulo da largurqa da tela por 200px 
//crie uma variavel com let no javascript que contenha o valor "Meu componente"
//crie uma div no componente que dentro dela mostre um <p> contendo o valor da variável 
import './MeuComponente.css'

function MeuComponente(){
  let MeuComponente = "Meu Componente"
  return ( 
  <>
    <div className="Retangulo">
        <p>{MeuComponente}</p> 
    </div>
  </>
  ) //JSX- Javascript XML
}
export default MeuComponente;
