type CartFooterProps = {
  totalOrderPrice: number;
  onOrder: () => void;
};

const CartFooter = ({ totalOrderPrice, onOrder }: CartFooterProps) => {
  return (
    <footer className="space-y-4 w-auto font-fira-sans pt-10">
      <section className="rounded-[4px] p-4 w-full flex flex-col bg-shade-24-dark text-coal">
        <div className="justify-between flex w-full">
          <div className="flex flex-col">
            <p className="font-bold uppercase leading-[26.4px] text-[22px]">
              Totalt
            </p>
            <span className="font-semibold text-[14px]">inkl 20% moms</span>
          </div>
          <p className="font-bold uppercase leading-[38.4px] text-[32px] flex items-center">
            {totalOrderPrice} SEK
          </p>
        </div>
      </section>
      <button
        onClick={onOrder}
        className="rounded-[4px] text-center text-[24px] tracking-wider font-bold py-[24px] w-full bg-coal text-snow uppercase"
        disabled={!totalOrderPrice}
      >
        Take my money!
      </button>
    </footer>
  );
};

export default CartFooter;
