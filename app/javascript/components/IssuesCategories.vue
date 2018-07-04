<template>
  <section class="issues-categories">
    <h2>Issues by category</h2>

    <div class="columns is-mobile">
      <div class="column is-one-third" v-for="(category, index) in values" :key="index">
        <issues-categories-chart :title="category.name" :value="category.value"></issues-categories-chart>
      </div>
    </div>
  </section>
</template>

<script>
import IssuesCategoriesChart from './IssuesCategoriesChart';

export default {
  components: {IssuesCategoriesChart},
  props: ['values'],
  data: function () {
    return {}
  }
};
</script>

<style scoped>
.issues-categories {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 3px 0 rgba(207,207,207,0.5);
  padding: 20px 15px;
}

h2 {
  color: #424242;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  margin-bottom: 20px;
}
</style>
