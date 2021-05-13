<template>
  <section class="top-species tile__box">
    <component-loading v-if="loading" />
    <no-data-overlay v-else-if="!values" />

    <div v-show="values">
      <header class="level">
        <div class="level-left">
          <h3 class="level-item">Top 5 species</h3>
        </div>
        <div class="level-right">
          <a class="button level-item is-dark button-full-list" v-on:click="openModal">
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
          <tr v-for="(species, index) in values" :key="index">
            <td><strong>{{index + 1}}.</strong> <em>{{species.taxon_name}}</em></td>
            <td>{{species.value}}</td>
            <td>{{species.appendix}}</td>
            <td>
              <component-links :download="getDownloadLink(species)"></component-links>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import ComponentLoading from '../elements/ComponentLoading'
import ComponentLinks from '../elements/ComponentLinks'
import NoDataOverlay from '../elements/NoDataOverlay'

export default {
  components: {
    ComponentLinks,
    ComponentLoading,
    NoDataOverlay
  },
  props: ['values', 'user', 'year', 'loading'],
  data () {
    return {}
  },
  methods: {
    openModal() {
      this.$emit('open-modal', 'species')
    },
    getDownloadLink(item) {
      let endpoint = `/api/v1/sapi/download?sapi[user_id]=${this.user}&sapi[year]=${this.year}&sapi[grouping]=species&sapi[id]=${item.taxon_concept_id}&sapi[appendix]=${item.appendix}`

      return endpoint
    }
  }
}
</script>
