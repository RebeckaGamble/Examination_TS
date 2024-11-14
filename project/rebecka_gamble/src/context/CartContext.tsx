import { createContext, useContext, useState, ReactNode } from "react";
import { CartItemProps, MenuItemProps, ReceiptProps } from "../types";
import { postOrder } from "../data/PostOrder";
import { GetReceipt } from "../data/GetReceipt";

type CartContextType = {
  cartItems: CartItemProps[];
  addToCart: (item: MenuItemProps) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  showItemsInCart: () => number;
  totalOrderPrice: () => number;
  newOrder: () => Promise<
    { id: string; eta: string; timestamp: string } | { error: string }
  >;
  showReceipt: (orderId: string) => Promise<ReceiptProps | { error: string }>;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  const addToCart = (item: MenuItemProps) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                total: (cartItem.quantity + 1) * item.price,
              }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1, total: item.price }];
      }
    });
  };

  const incrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.total + item.price,
            }
          : item
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
                total: item.total - item.price,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const showItemsInCart = () => {
    return cartItems.reduce((quantity, item) => quantity + item.quantity, 0);
  };

  const totalOrderPrice = () => {
    return cartItems.reduce((total, item) => total + item.total, 0);
  };

  const newOrder = async (): Promise<
    { id: string; eta: string; timestamp: string } | { error: string }
  > => {
    if (cartItems.length > 0) {
      const itemIds = cartItems.flatMap((item) =>
        Array(item.quantity).fill(item.id)
      );
      console.log("itemids:", itemIds);

      const result = await postOrder(itemIds);
      if ("error" in result) {
        console.log("something went wrong with the order", result);
        return result;
      } else {
        console.log("order placed successfully!");
        setCartItems([]);
        return { id: result.id, eta: result.eta, timestamp: result.timestamp };
      }
    } else {
      console.log("empty cart = no order!");
      return { error: "Cart is empty" };
    }
  };

  const showReceipt = async (
    orderId: string
  ): Promise<ReceiptProps | { error: string }> => {
    try {
      const receipt = await GetReceipt(orderId);
      if (receipt && receipt.error) {
        return { error: "Error fetching receipt" };
      }
      return receipt;
    } catch (error) {
      console.error("Error fetching receipt: ", error);
      return { error: "Error fetching receipt" };
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        showItemsInCart,
        totalOrderPrice,
        newOrder,
        showReceipt,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
