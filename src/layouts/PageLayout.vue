<script setup lang="ts">
import { NavRoute } from "@/interfaces/nav-route.interface";
import useAuthStore from "@/store/modules/auth.store";
import usePageNavigationDrawerStore from "@/store/modules/page-navigation-drawer.store";
import { useToggleTheme } from "@/themes/use-toggle-theme";
import { navBarMenuItems } from "@/utils";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { useDisplay } from "vuetify";
import TheNavBar from "@/components/TheNavBar.vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import NavLink from "@/components/NavLink.vue";

const authStore = useAuthStore();
const pageNavigationDrawerStore = usePageNavigationDrawerStore();
const { width } = useDisplay();
const { iconChangeTheme, toggleTheme } = useToggleTheme();
const { isOpen, openedGroups } = storeToRefs(pageNavigationDrawerStore);
const { isAuthenticated } = storeToRefs(authStore);
const routes = ref<NavRoute[]>(navBarMenuItems);

const { setIsOpen, setOpenedGroups } = pageNavigationDrawerStore;
const { signIn, logout } = authStore;

watch(
  width,
  (value) => {
    if (value > 960) {
      setIsOpen(false);
    }
  },
  { immediate: true },
);
</script>

<template>
  <v-layout>
    <the-nav-bar></the-nav-bar>

    <navigation-drawer
      title="Menú principal"
      :routes="routes"
      :is-open="isOpen"
      :opened-groups="openedGroups"
      :temporary="true"
      location="right"
      @update:is-open="setIsOpen($event)"
      @update:opened-groups="setOpenedGroups($event)"
    >
      <template #prepend-links>
        <v-divider></v-divider>

        <v-list-item @click="toggleTheme">
          <template #prepend>
            <v-icon :icon="iconChangeTheme"></v-icon>
          </template>

          <v-list-item-title>Change Theme</v-list-item-title>
        </v-list-item>
      </template>

      <template #append-links>
        <v-divider></v-divider>

        <NavLink
          v-if="isAuthenticated"
          :route="{
            to: { name: 'dashboard' },
            icon: 'mdi-view-dashboard',
            text: 'Dashboard',
          }"
        ></NavLink>

        <!-- <NavLink
          v-if="!isAuthenticated"
          :route="{
            to: { name: 'home' },
            icon: 'mdi-login',
            text: 'Iniciar Sesión',
          }"
        ></NavLink> -->

        <v-list-item
          v-if="!isAuthenticated"
          @click="signIn"
        >
          <template #prepend>
            <v-icon icon="mdi-login"></v-icon>
          </template>

          <v-list-item-title>Iniciar Sesión</v-list-item-title>
        </v-list-item>

        <v-list-item
          v-else
          @click="logout"
        >
          <template #prepend>
            <v-icon icon="mdi-logout"></v-icon>
          </template>

          <v-list-item-title>Cerrar Sesión</v-list-item-title>
        </v-list-item>
      </template>
    </navigation-drawer>

    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>
  </v-layout>
</template>
