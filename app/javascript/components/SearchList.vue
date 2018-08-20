<template>
  <section class="search-list tile__box">
    <table class="list-table">
      <colgroup>
        <col v-for="(name, index) in columns.headers" v-bind:key="index" :style="{width: (index === 0) ? '40%' : 'auto'}">
        <col style="width: 5%;">
      </colgroup>

      <thead>
        <tr>
          <th :colspan="columns.headers.length + 1" class="list-table__header-button">
            <a v-if="data.length > 0" class="button is-dark button-full-list">
              <span>Download All</span>
              <span class="icon-download-light"></span>
            </a>
          </th>
        </tr>
        <tr>
          <th v-for="(name, index) in columns.headers" v-bind:key="index">{{name}}</th>
          <th></th>
        </tr>
      </thead>
      <div v-if="loading" class="list-table__message">
        Loading data
      </div>
      <div v-if="!loading && (!data || data.length === 0)" class="list-table__message">
        No data
      </div>
      <tbody>
        <tr v-for="(data, index) in data" :key="index">
          <td v-for="(key, index) in columns.keys" v-bind:key="index">
            {{getTruncatedName(data[key], 40)}}
          </td>
          <td>
            <div class="level-item list-table__dropdown dropdown is-right is-hoverable">
              <component-links :download="links.download" :details="links.details"></component-links>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <search-list-pagination v-if="data && data.length > 0" :metadata="metadata" v-on:change-page="onChangePage"></search-list-pagination>
  </section>
</template>

<script>
import axios from 'axios'

import SearchListPagination from './SearchListPagination'
import ComponentLinks from '../elements/ComponentLinks'

export default {
  components: {
    SearchListPagination,
    ComponentLinks
  },

  props: ['columns', 'grouping', 'year', 'user', 'filterId'],

  data () {
    return {
      data: [],
      metadata: {},
      links: {
        details: '#',
        download: '#'
      },
      loading: false,
      axiosSource: null
    }
  },

  mounted() {
    if (this.grouping && this.year) {
      this.getData()
    }
  },

  watch: {
    year() {
      this.clearData()
      this.getData()
    },

    grouping() {
      this.clearData()
      this.getData()
    },

    filterId() {
      this.clearData()
      this.getData()
    }
  },

  methods: {
    clearData() {
      this.data = []
      this.metadata = null
    },

    getData(page = 1) {
      if (this.axiosSource) {
        this.axiosSource.cancel()
      }

      let endpoint = `/api/v1/sapi?sapi[call]=search&sapi[user_id]=${this.user}&sapi[year]=${this.year}&sapi[grouping]=${this.grouping}&sapi[page]=${page}&sapi[per_page]=25`

      if (this.filterId) {
        endpoint += `&sapi[id]=${this.filterId}`
      }

      const CancelToken = axios.CancelToken
      this.axiosSource = CancelToken.source()

      this.data = []
      this.loading = true

      axios.get(endpoint, {
        cancelToken: this.axiosSource.token
      }).then((res) => {
        this.loading = false

        if (!res.data.shipments || res.data.shipments.length === 0) {
          this.clearData()
          return
        }

        this.data = res.data.shipments
        this.metadata = res.data.meta
      }).catch((err) => {
        this.loading = false

        if (axios.isCancel(err)) {
          return
        }

        console.error(err)
      })
    },

    onChangePage(page) {
      this.getData(page)
    },

    getTruncatedName(name, characters) {
      if (name.length > characters) {
        name = name.substr(0, characters) + '...'
      }

      return name
    }
  }
}
</script>
