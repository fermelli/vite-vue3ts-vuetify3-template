import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const createNavigationDrawerStore = <StoreName extends string>(storeName: StoreName) => {
  return defineStore(storeName, {
    state: () => ({
      isOpen: useStorage(`${storeName}-is-open`, true, localStorage, {
        mergeDefaults: true,
      }),
      openedGroups: useStorage(`${storeName}-opened-groups`, [] as string[], localStorage, {
        mergeDefaults: true,
      }),
    }),

    actions: {
      toggle() {
        this.isOpen = !this.isOpen;
      },
      setIsOpen(isOpen: boolean) {
        this.isOpen = isOpen;
      },
      setOpenedGroups(openedGroups: string[]) {
        this.openedGroups = openedGroups;
      },
    },
  });
};
