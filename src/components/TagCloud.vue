<template>
  <div class="tag-cloud">
    <h3><span>Tags</span></h3>
    <h3>
      <span>Click each tag to see all the articles associated with it!</span>
    </h3>

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
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}

.tag-cloud h3 span {
  position: relative;
  display: inline-block;
  overflow: hidden;
}
.tag-cloud h3 span::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  height: 120%;
  background: #1f52fa;
  transform: rotateZ(-1deg);
  transform-origin: left top;
  z-index: -1;
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
