import { v4 as uuidv4 } from "uuid"

import { Order } from "../Order/Order"
import { Container } from "../Container"
import s from "./Catalog.module.css"
import { CatalogProduct } from "../CatalogProduct"

const goodsList = [
  { title: "Мясная бомба" },
  { title: "Супер сырный" },
  { title: "Сытный" },
  { title: "Итальянский" },
  { title: "Вечная классика" },
  { title: "Тяжелый удар" },
]

export const Catalog = () => {
  return (
    <section className={s.catalog}>
      <Container className={s.container}>
        <Order />

        <div className={s.wrapper}>
          <h2 className={s.title}>Бургеры</h2>

          <div className={s.wrap_list}>
            <ul className={s.list}>
              {goodsList.map((item) => (
                <li className={s.item} key={uuidv4()}>
                  <CatalogProduct title={item.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
