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
    if (count > 0) {
      dispatch(removeProduct({ id: id }));
    }
  };
  return (
    <div className={s.count}>
      <button className={s.minus} onClick={removeCount} disabled={count === 0}>
        -
      </button>
      <p className={s.amount}>{count}</p>
      <button className={s.plus} onClick={addCount} disabled={count === 99}>
        +
      </button>
    </div>
  );
};
