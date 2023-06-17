<script setup lang="ts"></script>

<template>
  <v-layout>
    <v-main>
      <v-container fluid>
        <div>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link> |
          <router-link :to="{ name: 'home' }">Home</router-link> |
          <router-link :to="{ name: 'productos' }">Productos</router-link> |
          <router-link :to="{ name: 'producto', params: { id: 100 } }">Producto</router-link>
        </div>

        <slot></slot>
      </v-container>
    </v-main>
  </v-layout>
</template>
