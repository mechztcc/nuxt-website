import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useAlertsStore = defineStore("alerts", {
  state: () => ({ items: [] as any[], total: 0 }),
  getters: {
    calculate: (state) => {
      let total = 0;
      state.items.map((item) => {
        total += (item.price * item.count );
      });

      return total;
    },
  },
  actions: {
    addItem(newItem: any) {
      this.items.push({
        id: newItem.id,
        name: newItem.name,
        price: newItem.price,
        count: 1,
        description: newItem.description,
      });
    },

    removeItem(newItem: any) {
      this.items = this.items.filter((item) => {
        return item.id !== newItem.id;
      });
    },

    incrementItem(newItem: any) {
      this.items.map((item) => {
        if (item.id == newItem.id) {
          item.count++;
        }
      });
    },

    decrementItem(newItem: any) {
      this.items.map((item) => {
        if (item.id == newItem.id) {
          item.count--;
        }
      });
    },
  },
});
