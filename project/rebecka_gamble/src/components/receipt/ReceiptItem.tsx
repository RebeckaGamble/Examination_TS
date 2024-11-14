import { Item } from "../../types";

const ReceiptItem = ({ name, price, quantity }: Item) => {


  return (
    <li className="h-[42px] list-none py-1">
      <section className="flex h-[16px] flex-row text-coal gap-x-2 justify-between">
        <p className="font-bold text-[16px]">{name}</p>
        <span className="flex-grow border-dotted border-b-2 border-gray-400"></span>
        <p className="font-bold text-[16px] pr-4">{price} SEK</p>
      </section>
      <span className="font-thin text-[12px] w-full h-[14px]">{quantity} stycken</span>
    </li>
  );
};

export default ReceiptItem;
