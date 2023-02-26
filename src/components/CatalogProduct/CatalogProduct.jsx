import s from "./CatalogProduct.module.css";
import { useDispatch } from "react-redux";

import { API_URL } from "../../constants";
import { addProduct } from "../../store/order/orderSlice";
import { openModal } from "../../store/modalDelivery/modalDeliverySlice";

export const CatalogProduct = ({ image, title, price, weight, id }) => {
  const dispatch = useDispatch();

  return (
    <article className={s.product}>
      <img src={`${API_URL}/${image}`} alt={title} className={s.image} />

      <p className={s.price}>
        {price}
        <span className="currency">&nbsp;₽</span>
      </p>

      <h3 className={s.title}>
        <button
          type="button"
          onClick={() => {
            dispatch(openModal());
          }}
          className={s.detail}
        >
          {title}
        </button>
      </h3>

      <p className={s.weight}>{weight}г</p>

      <button
        type="button"
        onClick={() => {
          dispatch(addProduct({ id: id }));
        }}
        className={s.add}
      >
        Добавить
      </button>
    </article>
  );
};
