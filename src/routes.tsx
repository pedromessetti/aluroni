//Importação do React Router DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Importação dos components
import Header from 'components/Header'
import Banner from 'components/Banner'
import Footer from 'components/Footer'

//Importação das pages
import Cardapio from 'pages/Cardapio'
import Home from 'pages/Home'
import Sobre from 'pages/Sobre'
import NotFound from 'pages/NotFound'
import Prato from 'pages/Prato'


export default function AppRouter() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Banner />} >
            <Route index element={<Home />} />
          </Route>
          <Route path='ementa' element={<Cardapio />} />
          <Route path='reservas' element={<Sobre />} />
          <Route path='prato/:id' element={<Prato />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
