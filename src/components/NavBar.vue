<template>
  <header>
    <h1>Alex's blog</h1>
    <nav>
      <router-link :to="{ name: 'home' }"> Home </router-link>
      <router-link :to="{ name: 'create' }"> Create </router-link>
      <router-link :to="{ name: 'Details' }"> Post </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  components: { Create },
};
</script>

<style></style>
