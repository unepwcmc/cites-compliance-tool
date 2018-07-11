<template>
  <section class="issues-categories tile__box">
    <h3>Issues by category</h3>

    <div class="columns is-mobile">
      <div class="column is-one-third" v-for="(category, index) in values" :key="index">
        <issues-categories-chart :title="category.name" :value="category.value"></issues-categories-chart>
      </div>
    </div>
  </section>
</template>

<script>
import IssuesCategoriesChart from './IssuesCategoriesChart'

export default {
  components: {IssuesCategoriesChart},
  props: ['values'],
  data () {
    return {}
  }
}
</script>
