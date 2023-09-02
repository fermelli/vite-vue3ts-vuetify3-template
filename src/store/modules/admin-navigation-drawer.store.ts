import { createNavigationDrawerStore } from "./navigation-drawer.store";

const STORE_NAME = "admin-navigation-drawer";

const useAdminNavigationDrawerStore = createNavigationDrawerStore(STORE_NAME);

export default useAdminNavigationDrawerStore;
