//Importação dos estilos
import style from './Inicio.module.scss'
import styleTema from 'styles/Tema.module.scss'

//Importação do cardapio no arquivo JSON
import cardapio from 'data/cardapio.json'

import nossaCasa from 'assets/nossa_casa.png'
import { useNavigate } from 'react-router-dom'
import { Prato } from 'types/Prato'

export default function Inicio() {

  let pratosRecomendados = [...cardapio] //Cria um array com todos os itens do cardapio.json usando um spread operator, desta forma mantemos os itens originais do cardapio.json e o que for modificado aqui não será alterado no arquivo original
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3) //Pega os 3 primeiros itens do array pratosRecomendados ordenado de forma aleatoŕia

  const navigate = useNavigate()

  function redirecionarParaDetalhes(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { prato }})
  }

  return (
    <section>
      <h3 className={styleTema.titulo}>Recomendações da cozinha</h3>
      <div className={style.recomendados}>
        {pratosRecomendados.map((item) => (
          <div
            key={item.id}
            className={style.recomendado}
          >
            <div 
              className={style.recomendado__imagem}
            >
              <img src={item.photo} alt={item.title} />
            </div>
            <button 
              className={style.recomendado__botao}
              onClick={() => redirecionarParaDetalhes(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={styleTema.titulo}>Nossa casa</h3>
      <div className={style.nossaCasa}>
        <img src={nossaCasa} alt="Casa do Aluroni" />
        <div className={style.nossaCasa__endereco}>
          Rua Visconde de Santa Isabel, 321 <br/> <br/> Grajaú - RJ
        </div>
      </div>
    </section>
  )
}
