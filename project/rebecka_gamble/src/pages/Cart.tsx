import { Link } from "react-router-dom";
import EtaItem from "../components/eta/EtaItem";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import CartFooter from "../components/cart/CartFooter";
import CartItemList from "../components/cart/CartItemList";

const Cart = () => {
  const { cartItems, totalOrderPrice, newOrder } = useCart();
  const [etaData, setEtaData] = useState<{ id: string; eta: number } | null>(
    null
  );

  const handleNewOrder = async () => {
    const result = await newOrder();
    // console.log("new order result", result);
    if ("error" in result) {
      console.error("Failed to place order", result.error);
    } else if (result.id && result.eta && result.timestamp) {
      //convert eta and timestamp from string to number
      const etaTime = new Date(result.eta).getTime();
      const orderTime = new Date(result.timestamp).getTime();
      //calculate eta to minutes
      const etaInMinutes = Math.round((etaTime - orderTime) / (1000 * 60)); 

      setEtaData({ id: result.id, eta: etaInMinutes });
    }
  };

  return (
    <>
      <div className="bg-ash min-h-[844px] h-auto w-[390px] px-4 relative">
        <section className="relative flex justify-end pt-[17px] rounded-[4px]">
          <div className="h-[64px] w-[64px] flex items-center justify-center">
            <Link to={"/"}>
              <img className="text-clay" src="/cart.svg" />
            </Link>
          </div>
        </section>
        <CartItemList cartItems={cartItems} />
        <CartFooter
          totalOrderPrice={totalOrderPrice()}
          onOrder={handleNewOrder}
        />
      </div>
      {etaData && <EtaItem id={etaData.id} eta={etaData.eta} />}
    </>
  );
};

export default Cart;
