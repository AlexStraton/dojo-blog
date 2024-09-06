<template>
  <h2>Create</h2>
  <form>
    <label>
      Title:
      <input v-model="title" required />
    </label>
    <label>
      Content:
      <input v-model="content" required />
    </label>
    <label>
      Tags (hit enter to add a tag):
      <input @keydown.enter.prevent="addTag" v-model="tag" required />
    </label>
    <div v-for="tag in tags" :key="tag">{{ tag }}</div>
    <button>Add Post</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const title = ref("");
    const content = ref("");
    const tag = ref("");
    const tags = ref([]);

    function addTag() {
      console.log(tag.value, tags.value);
      if (tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }
      tag.value = "";
    }

    return { title, content, tags, tag, addTag };
  },
};
</script>

<style></style>
