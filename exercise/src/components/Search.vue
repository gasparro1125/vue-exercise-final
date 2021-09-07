<template>
  <div class="search-Component">
    <form @submit.prevent>
      <label>Corpo </label>
      <input v-model="CorpSercher" @keyup.enter="searchCompany"/>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "searchCompany",
  data: () => ({
    CorpSercher: "",
  }),
  methods: {
    searchCompany() {
      this.$emit("input-corporation", this.CorpSercher);
    },
  },
});
</script>
