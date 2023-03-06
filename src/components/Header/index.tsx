//Importação dos estilos
import style from './Header.module.scss'

//Importação da Logo
import logo from 'assets/logo.png'

//Importação do Link do React Router
import { Link } from 'react-router-dom'

//Importação do arquivo JSON contendo as rotas do menu
import rotas from 'data/rotas.json'


export default function Header() {
  return (
    <header className={style.header}>
      <Link to='/'>
        <img src={logo} alt='logo Pátio Antico' className={style.header__logo}/>
      </Link>
      <nav className={style.menu}>
        <ul className={style.menu__list}>
          {rotas.map((rota, index) => (
            <li key={index} className={style.menu__link}>
              <Link to={rota.to}>
                {rota.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
