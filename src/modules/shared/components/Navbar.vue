<template>
  <div>
    <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: 10 } }"
      >Pokemon</router-link
    >
    <router-link :to="{ name: 'about' }">About</router-link> -->

    <CustomLink v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>

<script>
import CustomLink from "./CustomLink.vue";
export default {
  components: { CustomLink },
  data() {
    return {
      links: [
        { to: "pokemon-home", name: "Pokemons" },
        { to: "pokemon-id", name: "Por ID", id: 10 },
        { to: "pokemon-about", name: "About" },
        { to: "dbz-characters", name: "Dbz Characters" },
        { to: "dbz-about", name: "Dbz About" },
        { to: "https://google.com", name: "Google" },
      ],
    };
  },
};
</script>

<style scoped>
div {
  padding: 0 30px;
}
</style>