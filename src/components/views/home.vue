<script>

import { mapGetters, mapState } from 'vuex';
import withTemplate from './templates/home.html';

export default withTemplate({
  name: 'Home',
  data() {
    return {
      title: 'Welcome Home!',
    };
  },
  created() {
    this.$consolas.log(`${this.$options.name} View is created!`);
    this.$consolas.log(this.$store);
  },
  watch: {},
  computed: {
    ...mapState('global', {
      storeVersion: state => state.version,
    }),
    ...mapGetters('global', {
      getStoreName: 'getName',
    }),
  },
});

</script>

<style scoped>
h1 {
  font-weight: bold;
}
</style>
