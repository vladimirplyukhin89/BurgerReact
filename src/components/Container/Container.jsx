import cn from "classnames"
import s from "./Container.module.css"

export const Container = ({ children, className }) => {
  return <div className={cn(s.container, className)}>{children}</div>
}
