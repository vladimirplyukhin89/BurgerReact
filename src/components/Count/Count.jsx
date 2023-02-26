import React from "react";
import { useDispatch } from "react-redux";

import s from "./Count.module.css";
import { addProduct, removeProduct } from "../../store/order/orderSlice";

export const Count = ({ count, id }) => {
  const dispatch = useDispatch();

  const addCount = () => {
    dispatch(addProduct({ id: id }));
  };

  const removeCount = () => {
    dispatch(removeProduct({ id: id }));
  };

  return (
    <div className={s.count}>
      <button className={s.minus} onClick={removeCount}>
        -
      </button>
      <p className={s.amount}>{count}</p>
      <button className={s.plus} onClick={addCount}>
        +
      </button>
    </div>
  );
};
