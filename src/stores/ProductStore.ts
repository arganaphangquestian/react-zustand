import create, { GetState, SetState } from "zustand";
import type { Product } from "../libs/Product";

type TProductSTore = {
  products: Product[];
  addProduct: (item: Product) => void;
  updateProduct: (item: Product) => void;
  deleteProduct: (id: String) => void;
};

const useProductStore = create<TProductSTore>(
  (set: SetState<TProductSTore>, get: GetState<TProductSTore>) => ({
    products: [],
    addProduct: (item: Product) =>
      set((s) => ({ products: [...s.products, item] })),
    updateProduct: (item: Product) =>
      set((s) => ({
        products: s.products.map((x) => {
          if (x.id == item.id) x = item;
          return x;
        }),
      })),
    deleteProduct: (id: String) =>
      set((s) => ({
        products: s.products.filter((x) => x.id != id),
      })),
  })
);

export default useProductStore;
