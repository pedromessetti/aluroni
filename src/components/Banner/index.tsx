//Importação dos estilos
import style from './Banner.module.scss'
import styleTema from 'styles/Tema.module.scss'

//Importação do React Router
import { Link, Outlet } from 'react-router-dom'

export default function Banner() {
  return (
    <>
      <div className={style.banner}>
        <div className={style.banner__texto}>
          A melhor massa está aqui
        </div>
        <Link to='/reservas' className={style.banner__btn}>
          Faça sua reserva
        </Link>
      </div>
      <div className={styleTema.container}>
        <Outlet />
      </div>
    </>
  )
}
