import style from './DetalhesDoPrato.module.scss'
import classNames from 'classnames'
import { Prato } from 'types/Prato'

export default function DetalhesDoPrato({ category, price }: Prato) {
  return (
    <div className={style.tags}>
      <div
        className={classNames({
          [style.tags__tipo]: true,
          [style[`tags__tipo__${category.label.toLowerCase()}`]]: true
        })}
      >
        {category.label}
      </div>
      <div className={style.tags__valor}>
        {price},00 €
      </div>
    </div>
  )
}
