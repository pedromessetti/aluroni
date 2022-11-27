//Importação dos estilos
import style from './Header.module.scss'
import styleTema from 'styles/Tema.module.scss'

//Importação do React Router
import { Outlet } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.header__texto}>
          A melhor massa está aqui!
        </div>
      </header>
      <div className={styleTema.container}>
        <Outlet />
      </div>
    </>
  )
}
