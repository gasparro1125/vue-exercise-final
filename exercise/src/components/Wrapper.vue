<template>
  <div class="wrapper">
    <SearchCompany @input-corporation="nuevaCorp"/>
    <MembersList :corpoName="corporation" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MembersList from "./MemberList.vue";
import SearchCompany from "./Search.vue";

export default defineComponent({
  name: "Wrapper",
  components: {
    MembersList,
    SearchCompany,
  },
  data: () => ({
    corporation: "Lemoncode",
  }),
  mounted() {
    console.log(`La compañia de la lista cargar es ${this.corporation}`)
    if (localStorage.corporation) {
      this.corporation = localStorage.corporation;
    }
  },
  methods: {
    nuevaCorp(InputV: string) {
      console.log(`La compañia de la lista al inicio es ${this.corporation}`)
      if( localStorage.corporation===InputV){
        console.log("No hago nada mismo valor")
      }else{ 
        this.corporation = InputV
        console.log(`La compañia de la lista al final es ${this.corporation}`)
        localStorage.corporation = this.corporation;
      }
    },
  },
});
</script>
