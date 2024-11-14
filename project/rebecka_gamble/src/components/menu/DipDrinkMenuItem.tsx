import { useCart } from "../../context/CartContext";
import { Dip, Drink } from "../../types";

const DipDrinkMenuItem = ({
  id,
  name,
  price,
  type,
  onFocus,
  isFocused,
}: Dip | Drink) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart({ id, name, price, type })}
      onFocus={onFocus}
    >
      <li
        onFocus={onFocus}
        key={id}
        className={`${
          isFocused ? "bg-coal" : "bg-shade-24-light"
        } rounded-[4px]`}
      >
        <p className="text-[13px] font-medium text-center font-fira-sans px-[10px] py-2">
          {" "}
          {name}
        </p>
      </li>
    </button>
  );
};

export default DipDrinkMenuItem;
