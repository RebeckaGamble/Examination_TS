import { CartItemProps } from "../../types";
import CartItem from "./CartItem";

type CartItemsListProps = {
  cartItems: CartItemProps[];
};

const CartItemList = ({ cartItems }: CartItemsListProps) => {
  if (cartItems.length === 0) {
    <p className="pt-6 px-4 text-[15px]">
      Inget här än! Utforska menyn och hitta något gott.{" "}
    </p>;
  }
  return (
    <ul className="min-w-[368px] w-full max-w-[414px]">
      {cartItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            total={item.total}
            quantity={item.quantity}
            price={item.price}
          />
        );
      })}
    </ul>
  );
};

export default CartItemList;
