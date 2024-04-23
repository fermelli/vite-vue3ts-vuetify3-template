<script setup lang="ts">
import { NavRoute } from "@/interfaces/nav-route.interface";
import useTheNavigationDrawerStore from "@/store/modules/the-navigation-drawer-store";
import { navRoutes } from "@/utils";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import NavLinkGroup from "./NavLinkGroup.vue";
import NavLink from "./NavLink.vue";

const theNavigationDrawerStore = useTheNavigationDrawerStore();
const { isOpen, openedGroups } = storeToRefs(theNavigationDrawerStore);
const routes = ref<NavRoute[]>(navRoutes);
</script>

<template>
  <v-navigation-drawer v-model="isOpen">
    <v-list
      v-model:opened="openedGroups"
      open-strategy="multiple"
    >
      <v-list-subheader>Menu</v-list-subheader>

      <component
        :is="route?.children ? NavLinkGroup : NavLink"
        v-for="route in routes"
        :key="route.text"
        :route="route"
      ></component>
    </v-list>
  </v-navigation-drawer>
</template>
