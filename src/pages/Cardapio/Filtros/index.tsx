//Importação dos estilos
import style from './Filtros.module.scss'

//Importação das opções de filtros no arquivo JSON
import filtros from './filtros.json'

//Importação da biblioteca Classnames
import classNames from 'classnames'


//Interface para tipar as variáveis recebidas do arquivo JSON
interface Opcao {
    label: string
    id: number
}

//Interface para tipar as props recebidas
interface Props {
    filtro: number | null
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

//Cria e exporta o componente do filtro, indicando que os tipos estão definidos na interface Props
export default function Filtros({ filtro, setFiltro }: Props) {

  function selecionarFiltro(opcao: Opcao) { //Indica que os tipos das opções estão definidos na interface Opcao
    if (filtro === opcao.id) return setFiltro(null) //Se o filtro for igual ao id da opção selecionada, o filtro volta para seu state inicial, no caso null
    return setFiltro(opcao.id) //Retorna uma alteração no state de filtro, alterando seu valor para o id da opção selecionada
  }

  return (
    <div className={style.filtros}>
      {filtros.map((opcao) => ( //Itera sobre as opções de filtro do arquivo JSON
        <button
          className={classNames({
            [style.filtros__filtro]: true,
            [style['filtros__filtro--ativo']]: filtro === opcao.id //Se o id da opção selecionada for igual ao filtro, o CSS receberá esta nova classe
          })}
          key={opcao.id}
          onClick={() => selecionarFiltro(opcao)} //Ao clicar no filtro será chamada a função selecionarFiltro passando como parametro a opção selecionada
        >
          {opcao.label}
        </button>
      ))}
    </div>
  )
}
