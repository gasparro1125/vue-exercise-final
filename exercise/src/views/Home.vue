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



<!--

<template>
  <div class="list-page">
    <MembersWrapper />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MembersWrapper from "@/components/members/MembersWrapper.vue";
export default Vue.extend({
  name: "Home",
  components: {
    MembersWrapper,
  },
});
</script>
-->