
<template>
  <div class="home">
    <Wrapper />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Wrapper from "../components/Wrapper.vue";

export default defineComponent({
  name: "Home",
  components: {
    Wrapper,
  },
});
</script>
