import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import router from "@/router";

interface Access {
  accessToken: string;
}

interface MeInterface {
  id: number;
  name: string;
  email: string;
}

const STORE_NAME = "auth";

const useAuthStore = defineStore(STORE_NAME, {
  state: () => ({
    accessToken: useStorage<string | undefined>(`${STORE_NAME}-access-token`, null, localStorage, {
      mergeDefaults: true,
    }),
    userData: useStorage<MeInterface | undefined | null>(`${STORE_NAME}-user-data`, {} as MeInterface, localStorage, {
      mergeDefaults: true,
    }),
  }),

  actions: {
    setAccessToken(accessToken: string | undefined) {
      this.accessToken = accessToken;
    },
    setUserData(userData: MeInterface) {
      this.userData = userData;
    },
    async signIn() {
      // credentials: { email: string, password: string }
      // Auth Service
      return new Promise<Access>((resolve) => {
        const fakeAccessToken = "fake-access-token";

        return resolve({ accessToken: fakeAccessToken });
      }).then((data: Access) => {
        this.setAccessToken(data.accessToken);

        this.me();
      });
    },
    async me() {
      return new Promise<MeInterface>((resolve) => {
        const fakeUserData = {
          id: 1,
          name: "John Doe",
          email: "johndoe@email.com",
        };

        return resolve(fakeUserData);
      }).then((data: MeInterface) => {
        this.userData = data;
      });
    },
    logout() {
      this.setAccessToken(undefined);
      this.setUserData({} as MeInterface);

      router.push({ name: "home" });
    },
  },

  getters: {
    getAccessToken: (state) => state.accessToken,
    isAuthenticated: (state) => !!state.userData?.id,
    getUserData: (state) => state.userData,
  },
});

export default useAuthStore;
