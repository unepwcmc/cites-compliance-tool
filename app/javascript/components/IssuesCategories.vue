<template>
  <section class="issues-categories tile__box">
    <component-loading v-if="loading" />
    <no-data-overlay v-else-if="!values" />

    <div v-show="values">
      <h3>Issues by category</h3>

      <div class="columns is-mobile">
        <div class="column is-one-third" v-for="(category, index) in values" :key="index">
          <issues-categories-chart :title="title(category.issue_type)" :value="category.value" :user="user" :year="year"></issues-categories-chart>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ComponentLoading from '../elements/ComponentLoading'
import IssuesCategoriesChart from './IssuesCategoriesChart'
import NoDataOverlay from '../elements/NoDataOverlay'

export default {
  components: {
    IssuesCategoriesChart,
    ComponentLoading,
    NoDataOverlay
  },
  props: ['values', 'user', 'year', 'loading'],
  data () {
    return {}
  },

  methods: {
    title (issue_type) {
      if(issue_type.match(/App/)) {
        return 'Appendix I'
      }
      else if(issue_type.match(/Suspension/)) {
        return 'Suspensions'
      }
      else {
        return 'Quotas'
      }
    }
  }
}
</script>
