<script setup lang="ts">
import useAdminNavigationDrawerStore from "@/store/modules/admin-navigation-drawer.store";
import useAuthStore from "@/store/modules/auth.store";
import { useToggleTheme } from "@/themes/use-toggle-theme";

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const { iconChangeTheme, toggleTheme } = useToggleTheme();
const { toggle } = useAdminNavigationDrawerStore();
const { logout } = useAuthStore();
</script>

<template>
  <v-app-bar
    color="primary"
    density="compact"
  >
    <v-app-bar-nav-icon
      density="compact"
      @click.stop="toggle"
    />

    <v-app-bar-title>
      {{ title }}
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-menu location="bottom">
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          class="mx-2"
          density="compact"
          icon
        >
          <v-icon icon="mdi-account-circle"></v-icon>
        </v-btn>
      </template>

      <!-- TODO: user -->
      <v-list
        v-if="true"
        density="compact"
      >
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

        <v-list-item
          link
          @click="logout"
        >
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
