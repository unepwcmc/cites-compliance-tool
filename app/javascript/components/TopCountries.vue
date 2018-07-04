<template>
  <section class="top-countries">
    <header class="level">
      <div class="level-left">
        <h2 class="level-item">Top 5 countries</h2>
        <a class="button is-rounded level-item">Exporting</a>
        <a class="button is-rounded level-item">Importing</a>
      </div>
      <div class="level-right">
        <a class="button level-item">Normal</a>
      </div>
    </header>
  </section>
</template>

<script>
export default {
  props: ['values'],
  data() {
    return {};
  }
};
</script>

<style scoped>
.top-countries {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 3px 0 rgba(207,207,207,0.5);
  padding: 30px;
}

header {
  margin-bottom: 20px;
}

h2 {
  color: #424242;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
}
</style>