import style from './Footer.module.scss'
import styleTema from 'styles/Tema.module.scss'

import { RiCopyrightLine } from 'react-icons/ri'
import { MdEmail, MdPhone, MdLocationOn, MdCalendarToday } from 'react-icons/md'
import { SiUbereats } from 'react-icons/si'
import { VscDash } from 'react-icons/vsc'
import { HiClock } from 'react-icons/hi'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <footer className={style.footer}>
      <section className={style.footer__top}>
        <h3 className={styleTema.titulo}>Contactos</h3>
        <div className={style.contacto}>
          <a href='https://www.ubereats.com/store/patio-antico-paco-de-arcos/yMVo5Dj3TIuxyVIU7FJqxg?utm_medium=cpc-localads&utm_source=google&utm_campaign=CM2143835-search-nonbrand-google-localads_140_-99_PT-National_e_all_acq_cpc_pt_PPA_Exact_0_f%3Aaggregator_serp%3Afeature_id_fprint%3D10073525846132700720_kwd-1053772177571_649714450944_146734436619__c&campaign_id=14249952190&adg_id=146734436619&fi_id=&match=&net=g&dev=c&dev_m=&ad_id=649714450944&cre=649714450944&kwid=kwd-1053772177571&kw=f%3Aaggregator_serp%3Afeature_id_fprint%3D10073525846132700720&placement=&tar=&&&&&gclsrc=aw.ds&gclid=CjwKCAiAu5agBhBzEiwAdiR5tLsQ5wlq2CMrc46kUkC00P2u07TNq9Hz1z0QUVAVnz4xtdF-Z1OV6hoCrIEQAvD_BwE'> 
            <p><SiUbereats /> Faça seu pedido com Uber Eats</p>
          </a>
          <p><MdEmail />patioantico@gmail.com</p>
          <p><MdPhone />+351 214 428 924</p>
          <p><MdLocationOn/>Praça República n°6, Paço de Arcos, Oeiras <VscDash /> 2770-150 </p>
          <p><MdCalendarToday />Abero todos os dias</p>
          <p><HiClock />12:30 às 15:30<VscDash />19:30 às 22:30</p>
        </div>
      </section>
      <section className={style.footer__bottom}>
        <p>Pátio Antico<VscDash />Todos os direitos reservados<RiCopyrightLine />2023</p>
        <p>Developed by Pedro Messetti</p>
      </section>
    </footer>
  )
}
