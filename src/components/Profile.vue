<template>
  <div
    class="flex w-10 h-10 items-center justify-center bg-white shadow rounded-full"
  >
    <p testId="profile-text" class="text-xl font-bold name">
      {{ name?.charAt(0) }}
    </p>
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
