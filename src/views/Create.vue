<template>
  <h2 class="header">Create</h2>
  <form @submit.prevent="handleSubmit">
    <label> Title: </label>
    <input v-model="title" required />
    <label> Content: </label>
    <textarea v-model="body" required />
    <label> Tags (hit enter to add a tag): </label>
    <input @keydown.enter.prevent="addTag" v-model="tag" />
    <div v-for="tag in tags" :key="tag" class="tag">#{{ tag }}</div>
    <button>Add Post</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const router = useRouter();

    function addTag() {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }
      tag.value = "";
    }
    async function handleSubmit() {
      try {
        await fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: title.value,
            body: body.value,
            tags: tags.value,
          }),
        });
        router.push({ name: "home" });
      } catch (error) {
        console.log(error);
      }
      title.value = "";
      body.value = "";
      tag.value = "";
    }
    return { title, body, tags, tag, addTag, handleSubmit };
  },
};
</script>

<style>
.header {
  color: #1f52fa;
  font-size: xx-large;
  text-shadow: 6px 6px #b6a9a9;
}
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  border-radius: 10px;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #a97676;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #1f52fa;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}

button {
  display: block;
  border-radius: 20px;
  margin-top: 20px;
  background: #1f52fa;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.tag {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
