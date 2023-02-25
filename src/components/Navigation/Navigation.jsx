import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";

import s from "./Navigation.module.css";
import {
  changeCategory,
  categoryRequestAsync,
} from "../../store/category/categorySlice";
import { Container } from "../Container";
import { API_URL } from "../../constants";

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(categoryRequestAsync("max"));
  }, []);

  return (
    <nav className={s.navigation}>
      <Container className={s.container}>
        <ul className={s.list}>
          {category.map((item, i) => (
            <li className={s.item} key={i}>
              <button
                className={cn(
                  s.button,
                  activeCategory === i ? s.button_active : ""
                )}
                style={{ backgroundImage: `url(${API_URL}/${item.image})` }}
                onClick={() => {
                  dispatch(changeCategory({ indexCategory: i }));
                }}
              >
                {item.rus}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
