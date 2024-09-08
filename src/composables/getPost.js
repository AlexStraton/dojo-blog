import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const blogPost = await fetch("http://localhost:3000/posts/" + id);
      if (!blogPost.ok) {
        throw Error("That post doesn't exist");
      }
      const data = await blogPost.json();
      post.value = data;
      console.log(post.value, "post value");
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};

export default getPost;
