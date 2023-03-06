//Importação dos estilos
import style from './Cardapio.module.scss'
import styleTema from 'styles/Tema.module.scss'

//Importação do Hook useState
import { useState } from 'react'

//Importação dos components
import Buscador from './Buscador'
import Filtros from 'pages/Cardapio/Filtros'
import Itens from './Itens'

//Importação da biblioteca classnames
import classNames from 'classnames'


//Cria e exporta a página do cardápio que é usada somente em index.tsx
export default function Cardapio() {

  //Cria as variáveis para armazenar, setar e utilizar os valores dos componentes
  const [busca, setBusca] = useState('')
  //Para o estado inicial não ser algum filtro específico, seu estado inicial é null, portanto deve-se especificar seu tipo
  const [filtro, setFiltro] = useState<number | null>(null)


  return (
    <section className={classNames({
      [style.cardapio]:true,
      [styleTema.container]: true
    })}>
      <h3 className={styleTema.titulo}>Nosso menu</h3>
      <Buscador
        busca={busca} //Recebe o valor de busca como props
        setBusca={setBusca} //Seta o valor inicial de busca como uma string vazia
      />
      <div className={style.cardapio__filtros}>
        <Filtros
          filtro={filtro} //Recebe o valor do filtro como props
          setFiltro={setFiltro} //Seta o valor inicial do filtro como null
        />
      </div>
      <Itens
        busca={busca} //Passa o valor de busca como props
        filtro={filtro} //Passa o valor do filtro como props
      />
    </section>
  )
}
