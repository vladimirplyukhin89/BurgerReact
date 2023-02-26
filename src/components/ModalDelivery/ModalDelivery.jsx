import cn from "classnames";
import s from "./ModalDelivery.module.css";
import { useSelector, useDispatch } from "react-redux";

import { closeModal } from "../../store/modalDelivery/modalDeliverySlice";
import { submitForm, updateFormValue } from "../../store/form/formSlice";

export const ModalDelivery = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const form = useSelector((state) => state.form);
  const { orderList } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      updateFormValue({
        field: e.target.name,
        value: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(submitForm({ ...form, orderList }));
  };

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

            <form className={s.form} id="delivery" onSubmit={handleSubmit}>
              <fieldset className={s.fieldset}>
                <input
                  className={s.input}
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder="Ваше имя"
                  onChange={handleChange}
                />
                <input
                  className={s.input}
                  type="tel"
                  name="phone"
                  value={form.phone}
                  placeholder="Телефон"
                  onChange={handleChange}
                />
              </fieldset>

              <fieldset className={s.fieldset_radio}>
                <label className={s.label}>
                  <input
                    className={s.radio}
                    type="radio"
                    name="format"
                    value="pickup"
                    checked={form.format === "pickup"}
                    onChange={handleChange}
                  />
                  <span>Самовывоз</span>
                </label>

                <label className={s.label}>
                  <input
                    className={s.radio}
                    type="radio"
                    name="format"
                    value="delivery"
                    checked={form.format === "delivery"}
                    onChange={handleChange}
                  />
                  <span>Доставка</span>
                </label>
              </fieldset>
              {form.format === "delivery" && (
                <fieldset className={s.fieldset}>
                  <input
                    className={s.input}
                    type="text"
                    name="address"
                    value={form.address}
                    placeholder="Улица, дом, квартира"
                    onChange={handleChange}
                  />
                  <input
                    className={cn(s.input, s.input_half)}
                    type="number"
                    name="floor"
                    value={form.floor}
                    placeholder="Этаж"
                    onChange={handleChange}
                  />
                  <input
                    className={cn(s.input, s.input_half)}
                    type="number"
                    name="intercom"
                    value={form.intercom}
                    placeholder="Домофон"
                    onChange={handleChange}
                  />
                </fieldset>
              )}
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
