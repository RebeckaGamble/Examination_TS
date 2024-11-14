import { Link } from "react-router-dom";
import foo from "../../../../../assets/boxtop.png";
import Receipt from "../receipt/Receipt";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { ReceiptProps } from "../../types";

const EtaItem = ({ id, eta }: { id: string; eta: number }) => {
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [receiptData, setReceiptData] = useState<ReceiptProps | null>(null);

  const { showReceipt } = useCart();

  const handleShowReceipt = async () => {
    const receipt = await showReceipt(id);
    if ("error" in receipt) {
      console.error("Error fetching receipt:", receipt.error);
    } else {
      setReceiptData(receipt);
      setShowReceiptModal(true);
    }
  };

  return (
    <>
      <section className="fixed top-0 left-0 bg-opacity-50 z-50 bg-clay w-[390px] min-h-[844px] h-full overflow-y-auto font-fira-sans pb-4">
        <div className="pt-[97px]">
          <img src={foo} alt="your food is cooking!" />
        </div>
        <div className="px-4">
          <div className="flex flex-col text-center w-[326px] gap-4 mx-auto uppercase">
            <h2 className="font-bold text-[32px] leading-[38.4px] text-snow">
              Dina Wontons tillagas!
            </h2>
            <p className="font-medium text-[26px] leading-[31.2px] text-snow">
              ETA {eta} min
            </p>
            <span className="text-ash">{id}</span>
          </div>
          <footer className="flex flex-col gap-4 pt-[46px]">
            <button
              onClick={handleShowReceipt}
              className="rounded-[4px] text-snow border-2 text-[24px] border-snow uppercase h-[77px] w-full trackijng-wider font-bold opacity-80 "
            >
              Se kvitto
            </button>
            <Link
              to={"/"}
              className="rounded-[4px] mb-4 items-center flex justify-center text-center text-[24px] tracking-wider font-bold h-[77px] w-full bg-coal text-snow uppercase"
            >
              Gör en ny beställning
            </Link>
          </footer>
        </div>
      </section>

      {receiptData && showReceiptModal && (
        <Receipt
          id={receiptData.id}
          orderValue={receiptData.orderValue}
          items={receiptData.items}
        />
      )}
    </>
  );
};

export default EtaItem;
