<template>
  <section class="search-list tile__box">
    <table class="list-table">
      <thead>
        <tr>
          <th v-for="(name, index) in columns.headers" v-bind:key="index">{{name}}</th>
          <th class="list-table__header-button">
            <a class="button is-dark button-full-list">
              <span>Download All</span>
              <span class="icon-download-light"></span>
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in data.data" :key="index">
          <td v-for="(key, index) in columns.keys" v-bind:key="index">
            {{data[key]}}
          </td>
          <td>
            <div class="level-item list-table__dropdown dropdown is-right is-hoverable">
              <component-links :download="links.download" :details="links.details"></component-links>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <search-list-pagination :metadata="data.metadata" v-on:change-page="onChangePage"></search-list-pagination>
  </section>
</template>

<script>
import SearchListPagination from './SearchListPagination'
import ComponentLinks from '../elements/ComponentLinks'

export default {
  components: {
    SearchListPagination,
    ComponentLinks
  },
  props: ['columns', 'data'],
  data () {
    return {
      links: {
        details: '#',
        download: '#'
      }
    }
  },
  methods: {
    onChangePage(page) {
      this.$emit('change-page', page)
    }
  }
}
</script>