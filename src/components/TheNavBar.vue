<script setup lang="ts">
import { ref } from "vue";
import { NavRoute } from "@/interfaces/nav-route.interface";
import { navBarMenuItems } from "@/utils";
import NavBarMenuItem from "@/components/NavBarMenuItem.vue";
import { useToggleTheme } from "@/themes/use-toggle-theme";

const menuItems = ref<NavRoute[]>(navBarMenuItems);

const { toggleTheme, iconChangeTheme } = useToggleTheme();
</script>

<template>
  <v-toolbar flat>
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

      <v-toolbar-title>My App</v-toolbar-title>
    </template>

    <v-spacer></v-spacer>

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
  </v-toolbar>
</template>

<style scoped>
.menu-icon {
  transition: transform 0.5s;
}
.menu-icon--rotate {
  transform: rotate(180deg);
}
</style>
@/interfaces/nav-route.interface @/utils/index.util
