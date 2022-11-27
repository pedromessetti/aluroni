//Importação dos estilos
import style from './Item.module.scss'

import { Prato } from 'types/Prato'
import DetalhesDoPrato from 'components/DetalhesDoPrato'
import { useNavigate } from 'react-router-dom'


//Cria e exporta o componente item, indicando que os tipos estão definidos na interface Props
export default function Item(props: Prato) {

  //Outra forma de fazer a desestruturação de props recebidas
  const { title, description, photo, id} = props

  const navigate = useNavigate()

  return (
    <div className={style.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={style.item__imagem}>
        <img src={photo} alt={title}/>
      </div>
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <DetalhesDoPrato { ...props } />
      </div>
    </div>
  )
}
