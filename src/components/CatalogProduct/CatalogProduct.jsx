import cn from "classnames"
import s from "./CatalogProduct.module.css"

export const CatalogProduct = ({ title }) => {
  return (
    <article className={s.product}>
      <img src="img/photo-5.jpg" alt={title} className={s.image} />

      <p className={s.price}>
        689<span className="currency">₽</span>
      </p>

      <h3 className={s.title}>
        <button className={s.detail}>{title}</button>
      </h3>

      <p className={s.weight}>520г</p>

      <button className={s.add} type="button">
        Добавить
      </button>
    </article>
  )
}
