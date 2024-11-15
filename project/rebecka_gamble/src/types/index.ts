export type MenuItemProps = {
  description?: string;
  id: number;
  name: string;
  price: number;
  ingredients?: string[];
  type?: "wonton" | "dip" | "drink";
};

export type Wonton = MenuItemProps & {
  type: "wonton";
  ingredients: string[] | undefined;
  isFocused: boolean;
  onFocus: (event: React.FocusEvent<HTMLButtonElement>) => void;
  className?: string;
};

export type Dip = MenuItemProps & {
  type: "dip";
  isFocused: boolean;
  onFocus: (event: React.FocusEvent<HTMLButtonElement>) => void;
};

export type Drink = MenuItemProps & {
  type: "drink";
  isFocused: boolean;
  onFocus: (event: React.FocusEvent<HTMLButtonElement>) => void;
};

export type MenuItems = Wonton | Dip | Drink;

export type CartItemProps = Pick<MenuItemProps, "id" | "name" | "price"> & {
  quantity: number;
  total: number;
};

export type Order = {
  items: number[];
};

export type Item = {
  id: string;
  eta?: string;
  name: string;
  // type?: "wonton" | "dip" | "drink";
  quantity: number;
  price: number;
  timestamp?: string;
};

export type ReceiptProps = {
  id: string;
  orderValue: number;
  items: Omit<Item, "eta" | "timestamp">[];
};
