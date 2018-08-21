<template>
  <section class="top-species tile__box">
    <header class="level">
      <div class="level-left">
        <h3 class="level-item">Top 5 species</h3>
      </div>
      <div class="level-right">
        <a class="button level-item is-dark button-full-list">
          <span>Full List</span>
          <span class="icon is-small">
            <i class="fas fa-angle-right"></i>
          </span>
        </a>
      </div>
    </header>

    <table class="list-table">
      <thead>
        <tr>
          <th>Species</th>
          <th>No. Transactions</th>
          <th>Appendix</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(species, index) in species" :key="index">
          <td><strong>{{index + 1}}.</strong> {{species.taxon_name}}</td>
          <td>{{species.value}}</td>
          <td>{{species.appendix}}</td>
          <td>
            <div class="level-item list-table__dropdown dropdown is-right is-hoverable">
              <component-links :download="getDownloadLink(species)" :details="links.details"></component-links>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import ComponentLinks from '../elements/ComponentLinks'

export default {
  components: {
    ComponentLinks
  },
  props: ['species', 'user', 'year'],
  data () {
    return {
      links: {
        details: '#'
      }
    }
  },
  methods: {
    getDownloadLink(item) {
      let endpoint = `/api/v1/sapi/download?sapi[user_id]=${this.user}&sapi[year]=${this.year}&sapi[grouping]=species&sapi[id]=${item.taxon_concept_id}`

      return endpoint
    }
  }
}
</script>