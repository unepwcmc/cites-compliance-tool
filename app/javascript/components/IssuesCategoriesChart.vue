<template>
  <section class="issues-categories-chart">
    <h2>{{title}}</h2>

    <div class="dropdown is-right is-hoverable issues-categories-chart__dropdown">
      <component-links :download="links.download" :details="links.details"></component-links>
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
  props: ['title', 'value'],
  data () {
    return {
      links: {
        details: '#',
        download: '#'
      }
    }
  }
}
</script>
