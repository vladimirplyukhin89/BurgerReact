import cn from "classnames";
import s from "./ModalDelivery.module.css";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/modalDelivery/modalDeliverySlice";

export const ModalDelivery = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    isOpen && (
      <div
        className={s.modal}
        onClick={({ target, currentTarget }) => {
          if (target === currentTarget) {
            dispatch(closeModal());
          }
        }}
      >
        <div className={s.mdelivery}>
          <div className={s.container}>
            <h2 className={s.title}>Доставка</h2>

            <form className={s.form} id="delivery">
              <fieldset className={s.fieldset}>
                <input
                  className={s.input}
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                />
                <input
                  className={s.input}
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                />
              </fieldset>

              <fieldset className={s.fieldset_radio}>
                <label className={s.label}>
                  <input
                    className={s.radio}
                    type="radio"
                    name="format"
                    value="pickup"
                  />
                  <span>Самовывоз</span>
                </label>

                <label className={s.label}>
                  <input
                    className={s.radio}
                    type="radio"
                    name="format"
                    value="delivery"
                    checked
                  />
                  <span>Доставка</span>
                </label>
              </fieldset>

              <fieldset className={s.fieldset}>
                <input
                  className={s.input}
                  type="text"
                  name="address"
                  placeholder="Улица, дом, квартира"
                />
                <input
                  className={cn(s.input, s.input_half)}
                  type="number"
                  name="floor"
                  placeholder="Этаж"
                />
                <input
                  className={cn(s.input, s.input_half)}
                  type="number"
                  name="intercom"
                  placeholder="Домофон"
                />
              </fieldset>
            </form>

            <button className={s.submit} type="submit" form="delivery">
              Оформить
            </button>
          </div>

          <button
            onClick={() => {
              dispatch(closeModal());
            }}
            className={s.close}
            type="button"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5.07422"
                y="5.28247"
                width="1"
                height="20"
                transform="rotate(-45 5.07422 5.28247)"
              />
              <rect
                x="5.78125"
                y="19.4246"
                width="1"
                height="20"
                transform="rotate(-135 5.78125 19.4246)"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};
