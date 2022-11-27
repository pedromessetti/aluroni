import style from './Prato.module.scss'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import cardapio from 'data/cardapio.json'
import DetalhesDoPrato from 'components/DetalhesDoPrato'
import NotFound from 'pages/NotFound'
import Header from 'components/Header'

export default function Prato() {

  const navigate = useNavigate()
  const { id } = useParams()
  
  const prato = cardapio.find(item => item.id === Number(id))
  if(!prato) {
    return <NotFound />
  }
  
  return (
    <Routes>
      <Route element={<Header />}>
        <Route
          path="*"
          element={
            <>
              <button className={style.voltar} onClick={() => navigate(-1)}> {'< Voltar'} </button>
              <section className={style.container}>
                <h1 className={style.titulo}>{prato.title}</h1>
                <div className={style.imagem}>
                  <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={style.conteudo}>
                  <p className={style.conteudo__descricao}>
                    {prato.description}
                  </p>
                  <DetalhesDoPrato {...prato} />
                </div>
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  )
}