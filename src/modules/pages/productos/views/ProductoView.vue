<script setup lang="ts">
defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
});
</script>

<template>
  <div>
    <h1>ProductoView {{ id }}</h1>
  </div>
</template>
