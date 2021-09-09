<template>
  <div class="app">
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
*,
*::before,
*::after {
  @apply m-0 p-0 box-border;
}
body {
  @apply font-mainBody text-primary dark:text-lightestGray transition-colors dark:bg-primary;
  scroll-behavior: smooth;
}
</style>
