import cn from "classnames"
import s from "./Navigation.module.css"

import { Container } from "../Container"

export const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <Container className={s.container}>
        <ul className={s.list}>
          <li className={s.item}>
            <button className={cn(s.button, s.button_burger, s.button_active)}>
              Бургеры
            </button>
          </li>
          <li className={s.item}>
            <button className={cn(s.button, s.button_snack)}>Закуски</button>
          </li>
          <li className={s.item}>
            <button className={cn(s.button, s.button_hot_dog)}>Хот-доги</button>
          </li>
          <li className={s.item}>
            <button className={cn(s.button, s.button_combo)}>Комбо</button>
          </li>
          <li className={s.item}>
            <button className={cn(s.button, s.button_shawarma)}>Шаурма</button>
          </li>
          <li className={s.item}>
            <button className={cn(s.button, s.button_pizza)}>Пицца</button>
          </li>
          <li className={s.item}>
            <button className={cn(s.button, s.button_wok)}>Вок</button>
          </li>
          <li className={s.item}>
            <button className={cn(s.button, s.button_dessert)}>Десерты</button>
          </li>
          <li className={s.item}>
            <button className={cn(s.button, s.button_sauce)}>Соусы</button>
          </li>
        </ul>
      </Container>
    </nav>
  )
}
