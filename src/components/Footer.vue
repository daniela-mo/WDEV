<template>
  <footer>
    <a
      class="socialLink"
      v-for="(socialLink, index) in socialLinks"
      :key="index"
      :href="socialLink.link"
      target="_blank"
    >
      <img
        :src="socialLink.icon"
        :title="socialLink.label"
        :alt="socialLink.label"
    /></a>
  </footer>
</template>

<script>
import api from "@/services/api.js";

export default {
  //eslint-disable-next-line
  name: "Footer",
  data() {
    return {
      socialLinks: [],
    };
  },
  mounted() {
    api.get("social-links.json").then((response) => {
      this.socialLinks = response.data;
    });
  },
};
</script>

<style scoped>
footer {
  background-color: var(--color-background-nav);
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.socialLink {
  border: 1px solid var(--color-text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 10px;
}

.socialLink img {
  width: 20px;
}
</style>
