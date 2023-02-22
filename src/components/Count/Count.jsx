import s from "./Count.module.css"

export const Count = () => {
  return (
    <div className={s.count}>
      <button className={s.minus}>-</button>
      <p className={s.amount}>2</p>
      <button className={s.plus}>+</button>
    </div>
  )
}
