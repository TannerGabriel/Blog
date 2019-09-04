<template>
  <section>
    <section class="blog-post">
      <h1 class="title">{{ post.title }}</h1>
      <div v-html="post.html"></div>
    </section>
  </section>
</template>

<script>
import { ghostAPI, postIndexFields } from "@/utils/ghost";

export default {
  async asyncData() {
    const posts = await ghostAPI().posts.browse({
      fields: postIndexFields
    });
    const post = posts[0];
    return {
      post
    };
  }
};
</script>

<style scoped>
.blog-post {
  margin: 25px 0;
  padding: 0 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.title {
  margin: 50px 0;
}

p {
  color: #000;
  margin: 15px 0 5px;
  max-width: 450px;
  line-height: 1.44;
}
</style>