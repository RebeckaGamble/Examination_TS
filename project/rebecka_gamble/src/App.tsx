import { Link } from "react-router-dom";
import ShowMenu from "./components/menu/ShowMenu";
import { useCart } from "./context/CartContext";

function App() {
  const { showItemsInCart } = useCart();

  return (
    <main className="bg-dark-mint px-4 flex-1 min-w-[390px] w-full max-w-[430px] min-h-[1068px]">
      <section className="relative h-[112px] w-full flex justify-end pt-[17px] rounded-[4px]">
        <Link
          className="h-[64px] w-[64px] rounded-[4px] items-center justify-center flex bg-snow"
          to={"../cart"}
        >
          <img className="text-clay" src="/cart.svg" />
        </Link>
        <p className="absolute top-[5px] text-[12px] right-[-8px] rounded-full flex items-center justify-center bg-alert text-snow size-6">{showItemsInCart()}</p>
      </section>
      <ShowMenu />
    </main>
  );
}

export default App;
