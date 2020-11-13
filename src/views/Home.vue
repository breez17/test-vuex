<template>
  <div class="home">
    <template v-for="text of getText">
      <TextItem @deleteText="deleteText" :key="text.id" :text="text" />
    </template>
  </div>
</template>

<script>

import TextItem from "./TextItem";
import { mapMutations } from "vuex";
export default {
  name: 'Home',
  components: {TextItem},
  computed: {
   getText() {
     return this.$store.state.words;
   },
  },
  methods: {
    ...mapMutations(["DELETE_TEXT"]),
    deleteText(id) {
      this.$store.commit("DELETE_TEXT", id);
    }
  }
}
</script>
