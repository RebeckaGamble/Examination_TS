import { CartItemProps } from "../../types";
import { useCart } from "../../context/CartContext";

const CartItem = ({ id, name, total, quantity }: CartItemProps) => {
  const { incrementQuantity, decrementQuantity } = useCart();

  return (
    <li className="w-full flex flex-col justify-between py-2 font-fira-sans border-b border-shade-24-dark">
      <section className="flex flex-row text-coal gap-2 justify-between">
        <p className="font-bold text-[22px] leading-[26.4px]">{name}</p>
        <span className="flex-grow mb-[4px] border-dotted border-b-2 border-coal"></span>
        <p className="font-bold text-[22px] leading-[26.4px] pr-4">{total} SEK</p>
      </section>

      <section className="flex flex-row gap-[10px] py-1">
        <button
          className="rounded-full size-6 bg-shade-24-dark justify-center items-center flex"
          onClick={() => incrementQuantity(id)}
        >
          <img src="/increment.png" alt="increment" />
        </button>

        <p className="font-semibold text-[14px]">{quantity} stycken</p>
        <button
          className="rounded-full size-6 bg-shade-24-dark justify-center items-center flex"
          onClick={() => decrementQuantity(id)}
        >
          <img src="/decrement.png" alt="decrement" />
        </button>
      </section>
    </li>
  );
};

export default CartItem;
