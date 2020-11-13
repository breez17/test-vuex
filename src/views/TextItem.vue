<template>
	<div class="text-item">
		<span>{{ text.content }}</span>
		<button @click="deleteText">delete</button>
		<button @click="openTextArea">Edit</button>
		<textarea v-model="currentText" v-if="isEdit"></textarea>
		<button @click="editText">save</button>
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
	data() {
    return {
      isEdit: false,
      currentText: this.text.content
    }
	},
  methods: {
    openTextArea() {
      this.isEdit = !this.isEdit;
    },
    deleteText() {
      this.$emit("deleteText", this.text.id);
    },
    editText() {
      this.$emit("editText", this.currentText, this.text.id);
    }
  }
}
</script>
