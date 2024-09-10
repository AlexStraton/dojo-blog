<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <h3>Click each tag to see all the articles associated with it!</h3>

    <div class="tags">
      <div v-for="tag in tags" :key="tag">
        <router-link :to="{ name: 'tag', params: { tag: tag } }"
          >#{{ tag }}</router-link
        >
      </div>
    </div>
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

<style>
.tag-cloud {
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.tag-cloud h3 {
  display: inline-block;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
.tag-cloud h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #1f52fa;

  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
.tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.tag-cloud a {
  color: #ccc;
  text-decoration: none;
}
.tag-cloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>
