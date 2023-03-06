//Importação do estilo
import style from './Buscador.module.scss'

//Importação do ícone de lupa
import { CgSearch } from 'react-icons/cg'


//Interface para tipar as props recebidas
interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

//Cria e exporta o componente do buscador, indicando que os tipos estão definidos na interface Props
export default function Buscador({ busca, setBusca }: Props) {
  return (
    <div className={style.buscador}>
      <input 
        value={busca} //Salva o valor da busca
        onChange={(evento) => setBusca(evento.target.value)} //Ao escrever, altera o valor do state busca para o valor digitado
        placeholder="O que desejas ?"
      />
      <CgSearch //Ícone de lupa como um componente
        size={20}
        color="#4C4D5E"
      />
    </div>
  )
}
