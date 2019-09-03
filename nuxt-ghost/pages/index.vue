<template>
  <h1>Index</h1>
</template>

<script>
import { ghostAPI } from "@/utils/ghost";

export default {
  components: {},

  async mounted() {
    const post = await ghostAPI().posts.browse();
    console.log(post);
  }
};
</script>
