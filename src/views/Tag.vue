<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length"><PostList :posts="postByTag" /></div>
  <div v-else><Spinner /></div>
</template>

<script>
import getPosts from "@/composables/getPosts";
import { useRoute } from "vue-router";
import { computed } from "vue";
import PostList from "@/components/PostList.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  components: { PostList, Spinner },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();
    load();

    const tag = route.params.tag;

    const postByTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(tag));
    });
    console.log(postByTag);
    return { posts, error, postByTag };
  },
};
</script>

<style></style>
