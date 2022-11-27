//Importação dos estilos
import style from './Home.module.scss'
import styleTema from 'styles/Tema.module.scss'

//Importação do cardapio no arquivo JSON
import cardapio from 'data/cardapio.json'

//Importação das imagens
import casa from 'assets/sobre/casa.png'
import nossaCasa from 'assets/nossa_casa.png'

import { Link, useNavigate } from 'react-router-dom'
import { Prato } from 'types/Prato'

export default function Home() {

  let pratosRecomendados = [...cardapio] //Cria um array com todos os itens do cardapio.json usando um spread operator, desta forma mantemos os itens originais do cardapio.json e o que for modificado aqui não será alterado no arquivo original
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3) //Pega os 3 primeiros itens do array pratosRecomendados ordenado de forma aleatoŕia

  const navigate = useNavigate()

  function redirecionarParaDetalhes(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { prato } })
  }

  return (
    <>
      <section className={style.nossaCasa}>
        <h3 className={styleTema.titulo}>Nossa casa</h3>
        <div className={style.nossaCasa__container}>
          <img src={nossaCasa} alt="Casa do Aluroni" />
          <p>
            O Pátio Antico é um restaurante italiano que oferece um vasto cardápio de pizzas em forno de lenha, massas   frescas produzidas na casa e carnes diversas, para além de uma interessante escolha de entradas, saladas e    sobremesas.
            <br></br> <br></br>
            Quanto ao espaço, o mesmo é amplo, mas o uso de tons terra e de madeiras na decoração conferem a este restaurante um ambiente rústico e acolhedor, ideal tanto para uma romântica refeição a dois como para um animado convívio entre amigos.
          </p>
          <a
            href='https://www.google.com/maps/place/P%C3%A1tio+Antico/@38.6958969,-9.2930392,17z/data=!3m1!4b1!4m5!3m4!1s0xd1ec94e0b82ecdd:0x8bcc5a629e74b630!8m2!3d38.6958959!4d-9.2908594'
            target='_blank'
            rel="noreferrer"
          >
            Praça da República, n°6 <br /> <br /> Paço de Arcos
          </a>
        </div>
      </section>

      <section className={style.nossaCozinha}>
        <h3 className={styleTema.titulo}>Conheça nossa cozinha</h3>
        <div className={style.recomendados}>
          {pratosRecomendados.map((item) => (
            <div key={item.id} className={style.recomendado}>
              <div className={style.recomendado__imagem}>
                <img src={item.photo} alt={item.title} />
              </div>
            </div>
          ))}
          <Link to='/ementa' className={style.recomendados__btn}>
            {'Veja nossa ementa >'}
          </Link>
        </div>
      </section>

      <section>
        <h3 className={styleTema.titulo}>Sobre nós</h3>
        <div className={style.sobreNos}>
          <img src={casa} alt="Casa Aluroni" />
          <div className={style.sobreNos__texto}>
            <p>
              Nós do Pátio Antico oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada da região! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
            </p>
            <p>
              Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
            </p>
            <p>
              Para acompanhar as massas italianas, possuimos uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
            </p>
          </div>
        </div>
      </section>

    </>
  )
}
