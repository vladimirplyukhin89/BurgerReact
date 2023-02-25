import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Order } from "../Order/Order";
import { Container } from "../Container";
import s from "./Catalog.module.css";
import { CatalogProduct } from "../CatalogProduct";
import { EmptyProduct } from "../WarningOfProduct";
import { productRequestAsync } from "../../store/product/productSlice";

export const Catalog = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory]);
  return (
    <section className={s.catalog}>
      <Container className={s.container}>
        <Order />

        <div className={s.wrapper}>
          <h2 className={s.title}>{category[activeCategory]?.rus}</h2>

          <div className={s.wrap_list}>
            <ul className={s.list}>
              {products.length !== 0 ? (
                products.map((item) => (
                  <li className={s.item} key={item.id}>
                    <CatalogProduct {...item} />
                  </li>
                ))
              ) : (
                <EmptyProduct />
              )}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
