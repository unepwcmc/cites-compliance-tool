<template>
  <section class="issues-categories tile__box">
    <component-loading v-if="!values"></component-loading>

    <div v-show="values">
      <h3>Issues by category</h3>

      <div class="columns is-mobile">
        <div class="column is-one-third" v-for="(category, index) in values" :key="index">
          <issues-categories-chart :title="category.issue_type" :value="category.value" :user="user" :year="year"></issues-categories-chart>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ComponentLoading from '../elements/ComponentLoading'
import IssuesCategoriesChart from './IssuesCategoriesChart'

export default {
  components: {
    IssuesCategoriesChart,
    ComponentLoading
  },
  props: ['values', 'user', 'year'],
  data () {
    return {}
  }
}
</script>
