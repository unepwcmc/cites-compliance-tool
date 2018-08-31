<template>
  <section class="issues-categories tile__box">
    <div v-if="!values" class="tile__box-loading">
      <span class="icon">
        <i class="fas fa-spinner fa-pulse"></i>
      </span>
    </div>

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
import IssuesCategoriesChart from './IssuesCategoriesChart'

export default {
  components: {IssuesCategoriesChart},
  props: ['values', 'user', 'year'],
  data () {
    return {}
  }
}
</script>
