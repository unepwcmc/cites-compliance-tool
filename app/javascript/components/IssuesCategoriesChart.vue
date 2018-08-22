<template>
  <section class="issues-categories-chart">
    <h2>{{title}}</h2>

    <div class="dropdown is-right is-hoverable issues-categories-chart__dropdown">
      <component-links :download="getDownloadLink()" :details="links.details"></component-links>
    </div>

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
    return {
      links: {
        details: '#'
      }
    }
  },
  methods: {
    getDownloadLink() {
      let complianceType;

      switch (this.title.toLowerCase()) {
        case 'suspension':
          complianceType = 'trade'
          break
        case 'appendixi':
          complianceType = 'appendixi'
          break
        case 'quota':
          complianceType = 'quota'
          break
      }

      let endpoint = `/api/v1/sapi/download?sapi[user_id]=${this.user}&sapi[year]=${this.year}&sapi[compliance_type]=${complianceType}`

      return endpoint
    }
  }
}
</script>
