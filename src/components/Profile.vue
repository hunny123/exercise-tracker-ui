<template>
  <div
    class="flex w-12 h-12 items-center justify-center bg-white shadow rounded-full"
  >
    <p class="text-xl font-bold">{{ name?.charAt(0) }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: String,
  },
  created() {
    // props are exposed on `this`
    console.log(this.$route);
  },
});
</script>
