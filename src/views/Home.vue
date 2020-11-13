<template>
  <div class="home">
    <template v-for="text of getText">
      <TextItem @editText="editText" @deleteText="deleteText" :key="text.id" :text="text" />
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TextItem from "./TextItem";
import { mapMutations } from "vuex";
export default {
  name: 'Home',
  components: {TextItem},
  computed: {
      ...mapGetters(["getText"])
  },
  methods: {
    ...mapMutations([
      "DELETE_TEXT",
      "EDIT_TEXT"
    ]),
    deleteText(id) {
      this.$store.commit("DELETE_TEXT", id);
    },
    editText(item, id) {
      this.$store.commit("EDIT_TEXT", { item, id });
    }
  }
}
</script>
