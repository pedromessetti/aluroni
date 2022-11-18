//Importação dos estilos
import style from './Item.module.scss'


//Interface para tipar as props recebidas
interface Props {
    title: string;
    description: string;
    photo: string;
    size: number;
    serving: number;
    price: number;
    id: number;
    category: {
        id: number;
        label: string;
    }
}

//Cria e exporta o componente item, indicando que os tipos estão definidos na interface Props
export default function Item(props: Props) {

    //Outra forma de fazer a desestruturação de props recebidas
    const { title, description, photo, category, size, serving, price } = props

    return (
        <div className={style.item}>
            <div className={style.item__imagem}>
                <img src={photo} alt={title}/>
            </div>
            <div className={style.item__descricao}>
                <div className={style.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={style.item__tags}>
                    <div className={style.item__tipo `style.item__tipo__${category.label.toLowerCase()}`}>
                        {category.label}
                    </div>
                    <div className={style.item__porcao}>
                        {size}g
                    </div>
                    <div className={style.item__qtdpessoas}>
                        Serve {serving} pessoa{serving === 1 ? '' : 's'}
                    </div>
                    <div className={style.item__valor}>
                        {price},00 €
                    </div>
                </div>
            </div>
        </div>
    )
}
