//Importação dos estilos
import style from './NotFound.module.scss'
import styleTema from 'styles/Tema.module.scss'

//Importação da imagem de not found como um component
import NotFoundImage from 'assets/not_found.png'

import { useNavigate } from 'react-router-dom'

//Importação da biblioteca classnames
import classNames from 'classnames'


export default function NotFound() {

  const navigate = useNavigate()

  return (
    <div className={classNames({
      [style.container]: true,
      [styleTema.container]:true
    })}>
      <div className={style.voltar}>
        <button 
          onClick={() => //Ao clicar chama a função de callback navigate
            navigate(-1) //está função recebe string e numbers, no caso, voltamos 1 página de navegação portanto volta-se para a última página visitada
          }
        >
          {'< Voltar'}
        </button>
      </div>
      <img src={NotFoundImage} />
    </div>
  )
}
