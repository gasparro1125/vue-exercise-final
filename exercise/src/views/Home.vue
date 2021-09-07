<!--
<template>
  <div class="home">
    <MembersList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MembersList from "../components/MemberList.vue";

export default defineComponent({
  name: "Home",
  components: {
    MembersList,
  },
});
</script>
-->



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
