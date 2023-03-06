//Importação dos estilos
import styles from './Itens.module.scss'

//Importação dos Hooks useState e useEffect
import { useState, useEffect } from 'react'

//Importação das opções do cardapio no arquivo JSON
import cardapio from 'data/cardapio.json'

//Importação do componente
import Item from './Item'
import { Cardapio } from 'types/Prato'


//Interface para tipar as props recebidas
interface Props {
  busca: string;
  filtro: number | null;
}

//Cria e exporta o componente itens, indicando que os tipos estão definidos na interface Props
export default function Itens(props: Props) {

  //Cria a variável com o cardapio do arquivo JSON como valor inicial 
  const [lista, setLista] = useState(cardapio)
  //Outra forma de fazer a desestruturação de props recebidas
  const { busca, filtro } = props

  //Função que verifica a busca
  function testaBusca(title: string) { //Define que o tipo de title é uma string
    const regex = new RegExp(busca, 'i') //Cria uma nova Regular Expression passando o valor da busca e dizendo que é Case Insensitive (Não difere maíusculas de minúsculas)
    return regex.test(title) //Retorna o valor pesquisado se houver
  }

  //Função que verifica o filtro
  function testaFiltro(id: number) { //Define que o tipo do id é um number
    if (filtro !== null) return filtro === id //Se o filtro não for null e o valor do filtro é o mesmo do id das categorias então retorna-se true
    return true
  }
  
  useEffect(() => { //Cria uma nova lista dando um filter no cardapio do arquivo JSON, caso um item do cardapio esteja em alguma das funções (testaBusca ou testaFiltro), ele será setado nesta nova lista
    const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id))
    setLista(novaLista) //Altera o state da lista para o valor ordenado da nova lista
  }, [busca, filtro]) //Caso algum destes itens se altere, o useEffect será chamado e a lista se altera também

  return (
    <div className={styles.itens}>
      {lista.map(item => ( //Itera sobre os itens da lista atual
        <Item
          key={item.id}
          {...item} //Não precisa definir todas as props, desse modo espalha-se as props para serem desestruturadas no componente Item
        />
      ))}
    </div>
  )
}