<template>
  <section class="wrapper">
    <div class="flex align-items-center justify-content-between">
      <h1>Members</h1>
      total Memebers: {{ totalMembers }}
    </div>
    <div class="search-wrapper">
      <form @submit.prevent>
        <input v-model="search" placeholder="Lemoncode" />
      </form>
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
  data() {
    return {
      list: [] as MembersListDetails[],
      search: "Microsoft",
    };
  },
  async created() {
    this.list = await listCallService.getCompany(this.search);
  },
  computed: {
    totalMembers(): number {
      return this.list.length;
    },
  },
  /*
    watch: {
    corporationName: async function() {
      this.list = await listCallService.getCompany(this.search);
    },
  },*/
});
</script>
<style>
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin: 0;
}

a {
  text-decoration: none;
  color: currentColor;
}

ul {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  padding-inline-start: 2%;
  padding-inline-end: 2%;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
}

.align-items-center {
  align-items: center;
}
.justify-content-between {
  justify-content: space-between;
}

.full-width {
  width: 100%;
}

.text-align-end {
  text-align: end;
}
.text-align-center {
  text-align: center;
}

.grey-text {
  color: #cacaca;
}

.card {
  border-radius: 5px;
  box-shadow: 0 0 10px 6px rgba(0, 0, 0, 0.1);
  padding: 1em;
}

.button {
  background-color: #fff;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  transition: background-color 0.2s ease-in;
  cursor: pointer;
  padding: 0.7em 1em;
}
.button:hover {
  background-color: #cacaca;
}

</style>
