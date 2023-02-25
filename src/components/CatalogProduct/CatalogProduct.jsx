import s from "./CatalogProduct.module.css";
import { useDispatch } from "react-redux";

import { API_URL } from "../../constants";
import { addProduct } from "../../store/order/orderSlice";

export const CatalogProduct = ({ image, title, price, weight, id }) => {
  const dispatch = useDispatch();

  return (
    <article className={s.product}>
      <img src={`${API_URL}/${image}`} alt={title} className={s.image} />

      <p className={s.price}>
        {price}
        <span className="currency">₽</span>
      </p>

      <h3 className={s.title}>
        <button className={s.detail}>{title}</button>
      </h3>

      <p className={s.weight}>{weight}г</p>

      <button
        className={s.add}
        type="button"
        onClick={() => {
          dispatch(addProduct({ id: id }));
        }}
      >
        Добавить
      </button>
    </article>
  );
};
