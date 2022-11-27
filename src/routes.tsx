//Importação do React Router DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Importação dos components
import Header from 'components/Header'
import Menu from 'components/Menu'

//Importação das pages
import Cardapio from 'pages/Cardapio'
import Inicio from 'pages/Inicio'
import Sobre from 'pages/Sobre'
import Footer from 'components/Footer'
import NotFound from 'pages/NotFound'
import Prato from 'pages/Prato'


export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Header />} >
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>
          <Route path='prato/:id' element={<Prato />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
