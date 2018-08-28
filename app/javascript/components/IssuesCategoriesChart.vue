<template>
  <section class="issues-categories-chart">
    <h2>{{title}}</h2>

    <component-links class="issues-categories-chart__links" :download="getDownloadLink()"></component-links>

    <div class="issues-categories-chart__circle">
      <span>{{value}}</span>
    </div>
  </section>
</template>

<script>
import ComponentLinks from '../elements/ComponentLinks'

export default {
  components: {
    ComponentLinks
  },
  props: ['title', 'value', 'user', 'year'],
  data () {
    return {}
  },
  methods: {
    getDownloadLink() {
      let complianceType = this.title.toLowerCase();

      let endpoint = `/api/v1/sapi/download?sapi[user_id]=${this.user}&sapi[year]=${this.year}&sapi[compliance_type]=${complianceType}`

      return endpoint
    }
  }
}
</script>
