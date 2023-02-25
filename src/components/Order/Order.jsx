import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { OrderGoods } from "../OrderGoods/OrderGoods";
import s from "./Order.module.css";
import { orderRequestAsync } from "../../store/order/orderSlice";

export const Order = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const { totalCount, totalPrice, orderList, orderGoods } = useSelector(
    (state) => state.order
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(orderRequestAsync());
  }, [orderList.length, activeCategory]);

  return (
    <div className={s.order}>
      <section className={s.wrapper}>
        <div className={s.header} tabIndex="0" role="button">
          <h2 className={s.title}>Корзина</h2>

          <span className={s.count}>{totalCount}</span>
        </div>

        <div className={s.wrap_list}>
          <ul className={s.list}>
            {orderGoods.map((item) => (
              <OrderGoods {...item} key={item.id} />
            ))}
          </ul>

          <div className={s.total}>
            <p>Итого</p>
            <p>
              <span className={s.amount}>{totalPrice}</span>
              <span className="currency">&nbsp;₽</span>
            </p>
          </div>

          <button className={s.submit}>Оформить заказ</button>

          <div className={s.apeal}>
            <p className={s.text}>Бесплатная доставка</p>
            <button className={s.close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  );
};
