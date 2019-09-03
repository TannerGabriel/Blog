<template>
  <section>
    <h1>Index</h1>
  </section>
</template>

<script>
import { ghostAPI, postIndexFields } from "@/utils/ghost";

export default {
  components: {},

  async mounted() {
    const post = await ghostAPI().posts.browse({
      fields: postIndexFields
    });
    console.log(post);
  }
};
</script>
