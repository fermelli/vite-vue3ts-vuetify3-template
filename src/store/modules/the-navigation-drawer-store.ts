import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

const STORE_NAME = "the-navigation-drawer";

const useTheNavigationDrawerStore = defineStore("the-navigation-drawer", {
  state: () => ({
    isOpen: useStorage(`${STORE_NAME}-is-open`, true, localStorage, {
      mergeDefaults: true,
    }),
    openedGroups: useStorage(`${STORE_NAME}-opened-groups`, [], localStorage, {
      mergeDefaults: true,
    }),
  }),

  actions: {
    toogle() {
      this.isOpen = !this.isOpen;
    },
  },
});

export default useTheNavigationDrawerStore;
