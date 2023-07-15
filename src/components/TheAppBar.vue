<script setup lang="ts">
import useTheNavigationDrawerStore from "@/store/modules/the-navigation-drawer-store";
import { useToggleTheme } from "@/themes/use-toggle-theme";

const theNavigationDrawerStore = useTheNavigationDrawerStore();

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const { toggleTheme, iconChangeTheme } = useToggleTheme();
</script>

<template>
  <v-app-bar color="primary">
    <v-app-bar-nav-icon @click.stop="theNavigationDrawerStore.toogle()" />

    <v-app-bar-title>
      {{ title }}
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-menu location="bottom">
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          icon
        >
          <v-avatar
            size="45"
            color="primary"
          >
            <v-icon icon="mdi-account-circle"></v-icon>
          </v-avatar>
        </v-btn>
      </template>

      <!-- TODO: user -->
      <v-list v-if="true">
        <v-list-item>
          <v-list-item-title> luisfernandosalgadomiguez@gmail </v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          link
          :to="{ name: 'user-profile' }"
        >
          <v-list-item-title>User Profile</v-list-item-title>
        </v-list-item>

        <v-list-item
          link
          :append-icon="iconChangeTheme"
          @click="toggleTheme"
        >
          <v-list-item-title>Change Theme</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
