<template>
  <div class="tag-cloud">ALL TAGS</div>
  <div v-for="tag in tags" :key="tag">
    <router-link :to="{ name: 'tag', params: { tag: tag } }"
      >#{{ tag }}</router-link
    >
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["posts"],
  setup(props) {
    const tags = ref([]);
    const tagSet = new Set();
    const allTags = props.posts.forEach((blog) =>
      blog.tags.forEach((tag) => tagSet.add(tag))
    );
    tags.value = [...tagSet];
    return { tags };
  },
};
</script>

<style></style>
