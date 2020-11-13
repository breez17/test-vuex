<template>
	<div class="text-item">
		{{ text.content }}
		<button @click="deleteText">delete</button>
	</div>
</template>

<script>
export default {
  name: "TextItem",
  props: {
    text: {
      type: Object
    }
  },
  methods: {
    deleteText() {
      this.$emit("deleteText", this.text.id);
    }
  }
}
</script>
