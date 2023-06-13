import { defineStore } from "pinia";

const useTheNavigationDrawerStore = defineStore("the-navigation-drawer", {
  state: () => ({
    isOpen: false,
  }),

  actions: {
    toogle() {
      this.isOpen = !this.isOpen;
    },
  },
});

export default useTheNavigationDrawerStore;
