//Importação dos estilos
import style from './Ordenador.module.scss'

//Importação do Hook useState
import { useState } from 'react'

//Importação das opções de ordenação no arquivo JSON
import opcoes from './opcoes.json'

//Importação dos ícones de seta que se alteram no ordenador
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

//Importação da biblioteca Classnames
import classNames from 'classnames'


//Interface para tipar as props recebidas
interface Props {
    ordenador: string
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

//Cria e exporta o componente do ordenador, indicando que os tipos estão definidos na interface Props
//Funciona como uma tag select do HTML
export default function Ordenador({ ordenador, setOrdenador }: Props) {

    //Define se o ordenador está aberto ou fechado (o estado inicial é fechado)
    const [aberto, setAberto] = useState(false)
    //Verifica se a opção selecionada tem o mesmo value no arquivo JSON 
    const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome

  return (
    <button 
        className={classNames({
            [style.ordenador]: true,
            [style["ordenador--ativo"]]:ordenador !== "" //Verifica se o ordenador recebe algum valor, caso receba, teremos mais uma classe neste button
        })}
        onClick={() => setAberto(!aberto)} //Ao clicar altera o state para o oposto do atual, no caso true (ordenador aberto)
        onBlur={() => setAberto(false)} //Ao clicar em qualquer lugar fora do button o state altera para false (ordenador fechado)
    >
        <span>{nomeOrdenador || "Ordenar por"}</span>
        {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> 
        //Se o state de aberto for true mostrará o ícone de seta para cima, se for false mostrará o ícone de seta para baixo;
        } 
        <div className={classNames({
            [style.ordenador__options]: true,
            [style["ordenador__options--ativo"]]: aberto //Verifica se o ordenador está aberto (ativo), caso esteja, teremos mais uma classe neste button
        })}>
            {opcoes.map((opcao) => ( //Itera sobre aas opções do arquivo JSON
                <div 
                    className={style.ordenador__option}
                    key={opcao.value}
                    onClick={() => setOrdenador(opcao.value)}//Altera o state do ordenador para o valor da opção selecionada
                >
                    {opcao.nome}
                </div>
            ))}
        </div>
    </button>
  )
}
