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
      className={`${
        isFocused ? "bg-coal" : "bg-shade-24-light"
      } rounded-[4px] text-[13px] font-medium text-center font-fira-sans px-[10px] py-2`}
    >
      {name}
    </button>
  );
};

export default DipDrinkMenuItem;
