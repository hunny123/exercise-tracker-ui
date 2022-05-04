<template>
  <div class="container fixed bg-primary h-16 w-full px-2">
    <div class="flex items-center justify-between w-full mx-auto md:w-3/4">
      <div><img src="../assets/logo.svg" /></div>
      <div><Profile name="Hunny" /></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Profile from "./Profile.vue";
export default defineComponent({ components: { Profile } });
</script>
