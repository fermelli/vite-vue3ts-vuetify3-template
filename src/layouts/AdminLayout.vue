<script setup lang="ts">
import { NavRoute } from "@/interfaces/nav-route.interface";
import useAdminNavigationDrawerStore from "@/store/modules/admin-navigation-drawer.store";
import { navRoutes } from "@/utils";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import TheAppBar from "@/components/TheAppBar.vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";

const adminNavigationDrawerStore = useAdminNavigationDrawerStore();
const { isOpen, openedGroups } = storeToRefs(adminNavigationDrawerStore);
const routes = ref<NavRoute[]>(navRoutes);

const { setIsOpen, setOpenedGroups } = adminNavigationDrawerStore;
</script>

<template>
  <v-layout>
    <the-app-bar title="Admin" />

    <navigation-drawer
      title="Menú"
      :routes="routes"
      :is-open="isOpen"
      :opened-groups="openedGroups"
      @update:is-open="setIsOpen($event)"
      @update:opened-groups="setOpenedGroups($event)"
    ></navigation-drawer>

    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>
  </v-layout>
</template>
