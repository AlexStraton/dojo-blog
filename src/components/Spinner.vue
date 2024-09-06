<template>
  <div class="spin"></div>
</template>

<script>
export default {};
</script>

<style>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 6px solid #747171;
  border-radius: 50%;
  border-top-color: black;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
