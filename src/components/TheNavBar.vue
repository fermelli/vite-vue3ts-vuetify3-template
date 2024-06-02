<script setup lang="ts">
import { NavRoute } from "@/interfaces/nav-route.interface";
import useAuthStore from "@/store/modules/auth.store";
import usePageNavigationDrawerStore from "@/store/modules/page-navigation-drawer.store";
import { useToggleTheme } from "@/themes/use-toggle-theme";
import { navBarMenuItems } from "@/utils";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useDisplay } from "vuetify";
import NavBarMenuItem from "./NavBarMenuItem.vue";

const authStore = useAuthStore();
const { width } = useDisplay();
const { isAuthenticated } = storeToRefs(authStore);
const { iconChangeTheme, toggleTheme } = useToggleTheme();
const menuItems = ref<NavRoute[]>(navBarMenuItems);

const { signIn, logout } = authStore;
const { toggle } = usePageNavigationDrawerStore();
</script>

<template>
  <v-app-bar
    color="secondary"
    flat
  >
    <template #prepend>
      <router-link
        class="d-flex align-center text-decoration-none text-grey-darken-4"
        :to="{ name: 'home' }"
      >
        <v-img
          class="mr-4"
          src="@/assets/vue.svg"
          alt="Vuetify Logo"
          width="40"
          height="40"
        />
      </router-link>

      <v-app-bar-title>My App</v-app-bar-title>
    </template>

    <v-spacer></v-spacer>

    <template v-if="width > 960">
      <v-btn
        :icon="iconChangeTheme"
        @click="toggleTheme"
      >
      </v-btn>

      <nav-bar-menu-item
        v-for="(menuItem, index) in menuItems"
        :key="index"
        :menu-item="menuItem"
      ></nav-bar-menu-item>

      <v-divider
        class="ml-4"
        vertical
      ></v-divider>

      <v-btn
        v-if="isAuthenticated"
        class="text-none ml-4"
        :to="{ name: 'dashboard' }"
      >
        <template #append>
          <v-icon icon="mdi-view-dashboard"></v-icon>
        </template>

        Dashboard
      </v-btn>

      <v-btn
        v-if="!isAuthenticated"
        class="text-none ml-4"
        @click="signIn"
      >
        <template #append>
          <v-icon icon="mdi-login"></v-icon>
        </template>

        Iniciar Sesión
      </v-btn>

      <v-btn
        v-else
        class="text-none ml-4"
        @click="logout"
      >
        <template #append>
          <v-icon icon="mdi-logout"></v-icon>
        </template>

        Cerrar Sesión
      </v-btn>
    </template>

    <v-btn
      v-else
      icon="mdi-menu"
      @click="toggle"
    >
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
.menu-icon {
  transition: transform 0.5s;
}
.menu-icon--rotate {
  transform: rotate(180deg);
}
</style>
