// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  { label: "Black", value: "BLACK", tw: "zinc-900" },
  {
    label: "Blue",
    value: "BLUE",
    tw: "blue-950",
  },
  { label: "Rose", value: "ROSE", tw: "rose-950" },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhone X",
      value: "IPHONE_X",
    },
    {
      label: "iPhone 11",
      value: "IPHONE_11",
    },
    {
      label: "iPhone 12",
      value: "IPHONE_12",
    },
    {
      label: "iPhone 13",
      value: "IPHONE_13",
    },
    {
      label: "iPhone 14",
      value: "IPHONE_14",
    },
    {
      label: "iPhone 15",
      value: "IPHONE_15",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "SILICONE",
      description: undefined,
      price: PRODUCT_PRICES.material.SILICONE,
    },
    {
      label: "Soft Polycarbonate",
      value: "POLYCARBONATE",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRICES.material.POLYCARBONATE,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "SMOOTH",
      description: undefined,
      price: PRODUCT_PRICES.finish.SMOOTH,
    },
    {
      label: "Textured Finish",
      value: "TEXTURED",
      description: "Soft grippy texture",
      price: PRODUCT_PRICES.finish.TEXTURED,
    },
  ],
} as const;
