//Importação do React
import React from 'react';
import ReactDOM from 'react-dom/client';

//Importação do normalize para limpar o css padrão dos navegadores
import "normalize.css";

//Importação dos estilos
import './index.css';

//Importação dos components
import Cardapio from './pages/Cardapio';


//Principal variável que vai renderizar toda a aplicação
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//Chama o método render(), portanto tudo que estiver dentro será renderizado na página
root.render(
  <React.StrictMode>
    <>
      <Cardapio />
    </>
  </React.StrictMode>
);