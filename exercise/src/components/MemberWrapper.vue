<template>
  <div class="members-wrapper">
    <SearchMembers @input-corp="updateCorp" />
    <MembersList :corporationName="corporation" />
  </div>
</template>

<script lang="ts">

import MembersList from "./MemberList.vue";
import SearchMembers from "./MemberSearch.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "MembersWrapper",
  components: {
    MembersList,
    SearchMembers,
  },
  data: () => ({
    corporation: "lemoncode",
  }),
  mounted() {
    if (localStorage.corporation) {
      console.log(this.corporation, localStorage);
      this.corporation = localStorage.corporation;
    }
  },
  methods: {
    updateCorp(corp: string) {
      this.corporation = corp;
      this.persist();
    },
    persist() {
      localStorage.corporation = this.corporation;
    },
  },
});
</script>