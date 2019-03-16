<template>
    <VueGithubCorners :repoUrl="repoUrl" :catColor="catColor" :bgColor="bgColor"></VueGithubCorners>
</template>

<script>
/* eslint-disable */
import { VueGithubCorners } from "vue2-github-corners";

export default {
  name: "GithubCorner",
  components: {
    VueGithubCorners
  },
  data() {
    return {
      repoUrl: "https://github.com/mburakerman/vuexplosive-modal/",
      catColor: "#fff",
      bgColor: "#F7630C"
    };
  }
};
</script>

