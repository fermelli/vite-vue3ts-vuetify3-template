<script setup lang="ts">
import { ref } from "vue";
import { NavRoute } from "@/types/routes";
import { navRoutes } from "@/util";
import NavLink from "@/components/NavLink.vue";
import NavLinkGroup from "./NavLinkGroup.vue";
import useTheNavigationDrawerStore from "@/store/modules/the-navigation-drawer-store";
import { storeToRefs } from "pinia";

const routes = ref<NavRoute[]>(navRoutes);
const theNavigationDrawerStore = useTheNavigationDrawerStore();
const { isOpen, openedGroups } = storeToRefs(theNavigationDrawerStore);
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
