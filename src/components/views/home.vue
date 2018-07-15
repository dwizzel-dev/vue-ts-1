<template src="./templates/home.html"></template>
<script>

import { mapGetters, mapState } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      title: 'Welcome Home!',
    };
  },
  computed: {
    ...mapState([
      'author',
    ]),
    ...mapGetters([
      'getName',
      'getVersion',
    ]),
  },
  created() {
    // this.$consolas.log(`${this.$options.name} View is created!`);
    // this.$consolas.log(this.author);
  },
};
</script>

<style src='./styles/home.css' scoped></style>
