import { Count } from "../Count/Count"
import s from "./OrderGoods.module.css"

export const OrderGoods = ({ title }) => {
  return (
    <li className={s.item}>
      <img className={s.image} src="img/free_1.jpg" alt={title} />

      <div className={s.goods}>
        <h3 className={s.title}>{title} </h3>

        <p className={s.weight}>180г</p>

        <p className={s.price}>
          245
          <span className="currency">₽</span>
        </p>
      </div>

      <Count />
    </li>
  )
}
