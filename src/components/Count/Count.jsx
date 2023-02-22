import React from "react"

import s from "./Count.module.css"

export const Count = () => {
  const [count, setCount] = React.useState(0)

  const addCount = () => {
    setCount(count + 1)
  }

  const removeCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
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
  )
}
