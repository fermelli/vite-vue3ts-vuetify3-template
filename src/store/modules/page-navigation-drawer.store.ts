import { createNavigationDrawerStore } from "./navigation-drawer.store";

const STORE_NAME = "page-navigation-drawer";

const usePageNavigationDrawerStore = createNavigationDrawerStore(STORE_NAME);

export default usePageNavigationDrawerStore;
