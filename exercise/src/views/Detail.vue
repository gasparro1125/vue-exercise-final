<template>
  <div class="grid">
    <div v-if="member">
      <h1>Datos de {{ member.login }}</h1>
      <h3>id: {{ member.id }}</h3>
      <h3>Puesto: {{ member.type }}</h3>
      <img :src="member.avatar_url" alt="">
      <h3>Compañia: {{ member.company }}</h3>
      <h3>repositorios publicados: {{ member.public_repos }}</h3>
      <h3>seguidores: {{ member.followers }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteLocation } from "vue-router";
import { MembersDetailsPage } from "@/types";
import { listCallService } from "@/services/members";

export default defineComponent({
  components: {},
  data: () => ({
    member: {} as MembersDetailsPage,
  }),
  computed: {
    login(): string {
      return String((this.$route as RouteLocation).params.login);
    },
  },
  created() {
    listCallService.getMember(this.login).then((member: MembersDetailsPage | undefined) => {
        if (member) {
          this.member = member;
        }
      });
  },
});
</script>
