import s from "./OrderGoods.module.css";

import { Count } from "../Count/Count";
import { API_URL } from "../../constants";

export const OrderGoods = ({ title, weight, price, image, count, id }) => {
  return (
    <li className={s.item}>
      <img className={s.image} src={`${API_URL}/${image}`} alt={title} />

      <div className={s.goods}>
        <h3 className={s.title}>{title} </h3>

        <p className={s.weight}>{weight}г</p>

        <p className={s.price}>
          {price}
          <span className="currency">&nbsp;₽</span>
        </p>
      </div>

      <Count count={count} id={id} />
    </li>
  );
};
