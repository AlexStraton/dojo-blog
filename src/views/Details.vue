<template>
  <div>
    <h1>Details Page</h1>
    <h3>{{ post.title }}</h3>
    <div>{{ post.body }}</div>
  </div>
</template>

<script>
import getPost from "@/composables/getPost";

export default {
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPost(props.id);

    load();

    return { post, error };
  },
};
</script>

<style></style>
