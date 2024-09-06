<template>
  <div>
    <h1>Details Page</h1>
    <p>Showing details for post ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  setup(props) {
    console.log(props.id);
  },
};
</script>

<style></style>
