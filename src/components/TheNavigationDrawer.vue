<script setup lang="ts">
import { ref } from "vue";
import { navRoutes } from "@/utils";
import NavLink from "@/components/NavLink.vue";
import NavLinkGroup from "./NavLinkGroup.vue";
import useTheNavigationDrawerStore from "@/store/modules/theNavigationDrawerStore";

const routes = ref(navRoutes);
const theNavigationDrawerStore = useTheNavigationDrawerStore();
</script>

<template>
  <v-navigation-drawer v-model="theNavigationDrawerStore.isOpen">
    <v-list>
      <v-list-subheader>Menu</v-list-subheader>

      <component
        :is="route.children ? NavLinkGroup : NavLink"
        v-for="route in routes"
        :key="route.text"
        :route="route"
      ></component>
    </v-list>
  </v-navigation-drawer>
</template>
