import s from "./EmptyProduct.module.css";

import logo from "./../../assets/img/pic.svg";

export const EmptyProduct = () => {
  return (
    <article className={s.product}>
      <img src={logo} alt="Предупреждение" className={s.image} />

      <h3 className={s.title}>К сожалению, данного товара нет</h3>
    </article>
  );
};
