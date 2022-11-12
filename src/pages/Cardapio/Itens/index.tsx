//Importação dos estilos
import styles from './Itens.module.scss';

//Importação dos Hooks useState e useEffect
import { useState, useEffect } from "react";

//Importação das opções do cardapio no arquivo JSON
import cardapio from './itens.json'; 

//Importação do componente
import Item from './Item';


//Interface para tipar as props recebidas
interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

//Cria e exporta o componente itens, indicando que os tipos estão definidos na interface Props
export default function Itens(props: Props) {
  
  //Cria a variável com o cardapio do arquivo JSON como valor inicial 
  const [lista, setLista] = useState(cardapio);
  //Outra forma de fazer a desestruturação de props recebidas
  const { busca, filtro, ordenador } = props;

  //Arrow function que verifica a busca
  const testaBusca = (title: string, description: string) => { //Define que o tipo de title é uma string
    const regex = new RegExp(busca, 'i') //Cria uma nova Regular Expression passando o valor da busca e dizendo que é Case Insensitive (Não difere maíusculas de minúsculas)
    return regex.test(title, description); //Retorna o valor pesquisado se for achado em title ou em description
  }

  //Arrow function que verifica o filtro
  const testaFiltro = (id: number) => { //Define que o tipo do id é um number
    if(filtro !== null) return filtro === id //Se o filtro não for null e o valor do filtro é o mesmo do id das categorias então retorna-se true
    return true
  }

  //Arrow function para ordenar os itens
  const ordenarPropriedade = (lista: typeof cardapio, propriedade: 'size' | 'serving' |'price') => {
    return lista.sort((a,b) => (a[propriedade] > b[propriedade] ? 1 : -1))
  }

  //Função que realiza a ordenação
  function ordenar(novaLista: typeof cardapio) { //Define que o tipo da novaLista é o mesmo do que o cardapio
    switch(ordenador) { //Troca o retorno da função dependendo valor contido no ordenador
      case 'porcao': //Caso o valor seja porcao
        return ordenarPropriedade(novaLista, 'size') //Retorna a novaLista ordenada pelos valores de size definidos no arquivo JSON
      case 'qtd_pessoas': //Caso o valor seja qtd_pessoas
        return ordenarPropriedade(novaLista, 'serving') //Retorna a novaLista ordenada pelos valores do serving definidos no arquivo JSON
      case 'preco': //Caso o valor seja preco
        return ordenarPropriedade(novaLista, 'price') //Retorna a novaLista ordenada pelos valores de price definidos no arquivo JSON
      default: //Caso seja o valor padrão (Ordenar por)
        return novaLista; //Retorna a novaLista sem nenhuma ordenação
    }
  }

  useEffect(() => { //Cria uma nova lista dando um filter no cardapio do arquivo JSON, caso um item do cardapio esteja em alguma das funções (testaBusca ou testaFiltro), ele será setado nesta nova lista
    const novaLista = cardapio.filter(item => testaBusca(item.title, item.description) && testaFiltro(item.category.id));
    setLista(ordenar(novaLista)); //Altera o state da lista para o valor ordenado da nova lista
  },[busca, filtro, ordenador]) //Caso algum destes itens se altere, o useEffect será chamado e a lista se altera também

  return (
    <div className={styles.itens}>
      {lista.map(item => ( //Itera sobre os itens da lista atual
        <Item 
          key={item.id} 
          {...item} //Não precisa passar todas as props manualmente, desse modo usamos o spread operator e as props serão desestruturadas no componente Item
        />
      ))}
    </div>
  )
}