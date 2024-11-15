import { Wonton } from "../../types";
import { useCart } from "../../context/CartContext";

const WontonMenuItem = ({
  id,
  ingredients,
  name,
  price,
  onFocus,
  isFocused,
  className,
}: Wonton) => {
  const { addToCart } = useCart();
  
  // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   addToCart({ id, ingredients, name, price });
  // };
  

  return (
    <button
      onClick={() => addToCart({ id, ingredients, name, price })}
      className={`border-b border-dotted border-shade-24-light p-4 h-[89px] space-y-2 min-w-[358px] w-full ${
        isFocused ? "bg-coal" : "bg-clay"
      }  ${className}`}
      onFocus={onFocus}
    >
      <section className="font-bold leading-[26.4px] font-fira-sans text-[22px] flex flex-row justify-between ">
        <p>{name}</p>
        <span className="flex-grow mb-[4px] border-dotted border-b-2 border-gray-400 mx-2 "></span>
        <p>{price} SEK</p>
      </section>
      {/**show ingredients if there are any */}
      {ingredients && ingredients.length > 0 && (
        <p
          className="h-[23px] text-start text-[14px] leading-[16.8px] font-fira-sans font-medium "
          style={{ textShadow: "rgba(0,0,0,0.4)" }}
        >
          {ingredients.join(", ")}
        </p>
      )}
    </button>
  );
};

export default WontonMenuItem;
