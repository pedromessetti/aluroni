//Importação dos estilos
import style from './Menu.module.scss'

//Importação da logo como um componente
import { ReactComponent as Logo } from 'assets/logo.svg'

//Importação do Link do React Router
import { Link } from 'react-router-dom'

//Importação do arquivo JSON contendo as rotas do menu
import rotas from 'data/rotas.json'


export default function Menu() {
  return (
    <nav className={style.menu}>
      <Logo className={style.menu__logo}/>
      <ul className={style.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={style.menu__link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
