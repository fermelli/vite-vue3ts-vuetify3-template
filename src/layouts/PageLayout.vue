<script setup lang="ts">
import NavLink from "@/components/NavLink.vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import TheNavBar from "@/components/TheNavBar.vue";
import { NavRoute } from "@/interfaces/nav-route.interface";
import useAuthStore from "@/store/modules/auth.store";
import usePageNavigationDrawerStore from "@/store/modules/page-navigation-drawer.store";
import { useToggleTheme } from "@/themes/use-toggle-theme";
import { navBarMenuItems } from "@/utils";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { useDisplay } from "vuetify";

const pageNavigationDrawerStore = usePageNavigationDrawerStore();
const { setIsOpen, setOpenedGroups } = pageNavigationDrawerStore;
const { isOpen, openedGroups } = storeToRefs(pageNavigationDrawerStore);
const routes = ref<NavRoute[]>(navBarMenuItems);

const { toggleTheme, iconChangeTheme } = useToggleTheme();

const authStore = useAuthStore();
const { signIn, logout } = authStore;
const { isAuthenticated } = storeToRefs(authStore);

const { width } = useDisplay();

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
  <the-nav-bar></the-nav-bar>

  <v-layout>
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

          <v-list-item-title>Cambiar tema</v-list-item-title>
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
