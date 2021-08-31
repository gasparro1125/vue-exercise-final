<template>
  <div class="search-wrapper">
    <form @submit.prevent>
      <v-text-field
        v-model="corpToSearch"
        label="Corp Name"
        class="search-input"
        @keyup.enter="searchMembers"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "searchMembers",
  data: () => ({
    corpToSearch: "",
  }),
  methods: {
    searchMembers() {
      this.$emit("input-corp", this.corpToSearch);
    },
  },
});
</script>
