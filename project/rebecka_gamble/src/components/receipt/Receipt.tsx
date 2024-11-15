import { Link } from "react-router-dom";
import logo from "../../../../../assets/logo.png";
import ReceiptItem from "./ReceiptItem";
import { ReceiptProps } from "../../types";

const Receipt = ({ id, orderValue, items }: ReceiptProps) => {
  return (
    <section className="fixed top-0 left-0 bg-clay px-4 min-w-[390px] w-full pt-[165px] min-h-[844px] h-full overflow-y-auto font-fira-sans z-[9999]">
      <div className="bg-ash flex flex-col justify-center rounded-[4px] max-w-[430px] mx-auto">
        <section className="flex flex-col gap-[10px] pt-[32px]">
          <img
            className="w-[41.75px] h-[50.17px] mx-auto"
            src={logo}
            alt="logo"
          />
          <div className="flex flex-col text-center">
            <h3 className="uppercase font-bold text-[24px] leading-[33.6px] tracking-wider">
              Kvitto
            </h3>
            <span className="leading-[16.8px] text-[12px] tracking-wider ">
              {id}
            </span>
          </div>
        </section>
        <ul className="p-4 flex flex-col gap-1">
          {items.map((item) => {
            return <ReceiptItem key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} />;
          })}
        </ul>
        <section className="rounded-b-[4px] p-4 w-full flex flex-col bg-shade-24-dark text-coal ">
          <div className="justify-between flex w-full">
            <div className="flex flex-col">
              <p className="font-bold uppercase leading-[19.2px] h-[22px] text-[16px]">
                Totalt
              </p>
              <span className="font-medium text-[12px] leading-[14px]">
                inkl 20% moms
              </span>
            </div>
            <p className="font-bold uppercase leading-[28.8px] text-[24px] flex items-center ">
              {orderValue} SEK
            </p>
          </div>
        </section>
      </div>
      <Link
        to={"/"}
        className="rounded-[4px] mt-[73px] mb-[24px] max-w-[430px] mx-auto items-center flex justify-center text-center text-[24px] tracking-wider font-bold h-[77px] w-full bg-coal text-snow uppercase"
      >
        Gör en ny beställning
      </Link>
    </section>
  );
};

export default Receipt;
