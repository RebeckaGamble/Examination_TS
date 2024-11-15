import { useEffect, useState } from "react";
import { FetchMenu } from "../../data/FetchMenu";
import WontonMenuItem from "./WontonMenuItem";
import { Dip, Drink, MenuItems, Wonton } from "../../types";
import DipDrinkMenuItem from "./DipDrinkMenuItem";

const ShowMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItems[]>([]);
  const [error, setError] = useState<string | null>(null);
  //state for setting focus on focused element
  const [focusedWontonId, setFocusedWontonId] = useState<number | null>(null);
  const [focusedDipId, setFocusedDipId] = useState<number | null>(null);
  const [focusedDrinkId, setFocusedDrinkId] = useState<number | null>(null);

  useEffect(() => {
    const getMenuItems = async () => {
      const result = await FetchMenu(); //fetch the menu data
      if (result.error) {
        setError(result.error);
      } else {
        setMenuItems(result); //update menuItems state with the data
      }
    };

    getMenuItems();
  }, []);

  if (error) {
    return (
      <div className="w-full text-center flex pt-10 text-[14px]">
        Error: {error}
      </div>
    );
  }

  //filter menuItems based on type
  const dipItems = menuItems.filter((item): item is Dip => item.type === "dip");
  const drinkItems = menuItems.filter(
    (item): item is Drink => item.type === "drink"
  );
  const wontonItems = menuItems.filter(
    (item): item is Wonton => item.type === "wonton"
  );

  //focus, change when menuItems change, focus on first item of each type from start
  useEffect(() => {
    if (wontonItems.length > 0) setFocusedWontonId(wontonItems[0].id);
    if (dipItems.length > 0) setFocusedDipId(dipItems[0].id);
    if (drinkItems.length > 0) setFocusedDrinkId(drinkItems[0].id);
  }, [menuItems]);

  return (
    <section className="space-y-4">
      <h1
        className="text-[32px] font-fira-sans w-full font-bold leading-[38.4px] text-snow uppercase"
        style={{ textShadow: "rgba(0, 0, 0, 0.3)" }}
      >
        Meny
      </h1>

      <ul className=" text-snow flex flex-col min-w-[358px]">
        {wontonItems.map((item, index) => (
          <li key={item.id} className="list-none">
            <WontonMenuItem
              name={item.name}
              price={item.price}
              ingredients={item.ingredients}
              id={item.id}
              type={item.type}
              //set darker bg when item is focused
              isFocused={focusedWontonId === item.id}
              onFocus={() => setFocusedWontonId(item.id)}
              //make first(top) and last(bottom) corners rounded
              className={`${index === 0 ? "rounded-t-[8px]" : ""} ${
                index === wontonItems.length - 1 ? "rounded-b-[8px]" : ""
              }`}
            />
          </li>
        ))}
      </ul>
      {dipItems.length > 0 && (
        <section className="rounded-[8px] text-snow min-w-[358px] flex flex-col bg-clay space-y-4 p-4">
          <p className="font-bold leading-[26.4px] font-fira-sans text-[22px] flex flex-row justify-between ">
            <span>Dipsås</span>
            <span className="flex-grow mb-[6px] border-dotted border-b-2 border-gray-400 mx-2 "></span>

            <span>{dipItems[0].price} SEK</span>
          </p>
          <ul className="flex flex-wrap gap-4">
            {dipItems.map((item) => (
              <li key={item.id} className="list-none">
                <DipDrinkMenuItem
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  type={item.type}
                  isFocused={focusedDipId === item.id}
                  onFocus={() => setFocusedDipId(item.id)}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
      {drinkItems.length > 0 && (
        <section className="rounded-[8px] text-snow min-w-[358px] flex flex-col bg-clay space-y-4 p-4">
          <p className="font-bold leading-[26.4px] font-fira-sans text-[22px] flex flex-row justify-between ">
            <span>Dricka</span>
            <span className="flex-grow mb-[6px] border-dotted border-b-2 border-gray-400 mx-2 "></span>
            <span>{drinkItems[0].price} SEK</span>
          </p>
          <ul className="flex flex-wrap gap-4">
            {drinkItems.map((item) => (
              <DipDrinkMenuItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                type={item.type}
                isFocused={focusedDrinkId === item.id}
                onFocus={() => setFocusedDrinkId(item.id)}
              />
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};

export default ShowMenu;
