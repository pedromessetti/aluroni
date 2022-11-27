import style from './Footer.module.scss'
import styleTema from 'styles/Tema.module.scss'

import { RiCopyrightLine } from 'react-icons/ri'
import { MdEmail, MdPhone } from 'react-icons/md'


export default function Footer() {
  return (
    <footer className={style.footer}>
      <section className={style.footer__top}>
        <h3 className={styleTema.titulo}>Contactos</h3>
        <div className={style.contacto}>
          <p> <MdEmail /> patioantico@gmail.com</p>
          <p> <MdPhone /> 214 428 924</p>
        </div>
      </section>
      <section className={style.footer__bottom}>
        <p>Pátio Antico - Todos os direitos reservados <RiCopyrightLine /> </p>
        <p>Developed by Pedro Messetti</p>
      </section>
    </footer>
  )
}
