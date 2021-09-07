<template>
  <section class="wrapper">
    <div class="flex align-items-center justify-content-between">
      <h1>Members</h1>
      total Memebers: {{ totalMembers }}
    </div>
    <ul>
      <li
        v-for="member in list"
        :key="member.id"
        class="grid list-container card"
      >
        <router-link :to="`/detail/${member.login}`">
          <div class="list-container__content">
            <h2>
              {{ member.id }}
            </h2>
            <p>
              <span class="grey-text">Name: </span>
              <strong>{{ member.login }}</strong>
            </p>
            <p>
              <span class="grey-text">Face: </span>
              <img :src="member.avatar_url" alt="" />
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MembersListDetails } from "../types";
import { listCallService } from "../services/members";


export default defineComponent({
  name: "MembersList",
  props: {
    corpoName: {
      type: String,
      default: "lemoncode",
    },
  },
  data:()=> ({
      list: [] as MembersListDetails[],
  }),
  async created() {
    this.list = await listCallService.get();
  },
  computed: {
    totalMembers(): number {
      return this.list.length;
    },
    /*
    filteredItems() {
      return this.list.filter(member => {
         return member.login.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }
    */
  },
  watch: {
    corpoName: async function(searchCorp) {
      this.list = await listCallService.getCompany(searchCorp); //mirar en search creo haber encontrado la solución//
    }
  },
});
</script>

<style>

</style>
