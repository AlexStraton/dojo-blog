import { ref } from "vue";

const gePosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/post");
      if (!data.ok) {
        throw Error("no data");
      }
      const parseddata = await data.json();
      posts.value = parseddata;
      console.log(posts.value);
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, load };
};

export default getPosts;
