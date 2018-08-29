<template>
  <section class="search-list tile__box">
    <table v-if="!loading && data && data.length > 0" class="list-table">
      <colgroup>
        <col v-for="(name, index) in columns.headers" v-bind:key="index" :style="{width: (index === 0) ? '40%' : 'auto'}">
        <col :style="{width: (inModal) ? '10%' : '5%'}">
      </colgroup>

      <thead>
        <tr>
          <th :colspan="columns.headers.length + 1" class="list-table__header-button">
            <a v-if="data.length > 0" class="button is-dark button-full-list" :href="getDownloadAllLink()" target="_blank">
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
      <tbody>
        <tr v-for="(data, index) in data" :key="index">
          <td v-for="(key, index) in columns.keys" v-bind:key="index">
            {{getTruncatedName(data[key], 40)}}
          </td>
          <td>
            <component-links :download="getDownloadLink(data)"></component-links>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="loading" class="list-table__message">
      <span class="icon">
        <i class="fas fa-spinner fa-pulse"></i>
      </span>
      <strong>Loading data</strong>
    </div>
    <div v-if="!loading && (!data || data.length === 0)" class="list-table__message">
      <strong>No data</strong>
    </div>

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

  props: {
    columns: Object,
    grouping: String,
    year: [String, Number],
    user: [String, Number],
    filterId: [String, Number],
    perPage: {
      type: [String, Number],
      default: 25
    },
    inModal: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      data: [],
      metadata: {},
      links: {
        details: '#'
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

      let endpoint = `/api/v1/sapi?sapi[call]=search&sapi[user_id]=${this.user}&sapi[year]=${this.year}&sapi[grouping]=${this.grouping}&sapi[page]=${page}&sapi[per_page]=${this.perPage}`

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
    },

    getDownloadLink(item) {
      let id;

      if (item.taxon_concept_id) {
        id = item.taxon_concept_id
      } else if (item.term_id) {
        id = item.term_id
      } else if (item.id) {
        id = item.id
      }

      let grouping = this.grouping

      if (grouping === 'exporting') {
        grouping = 'countries'
      }

      let endpoint = `/api/v1/sapi/search_download?sapi[user_id]=${this.user}&sapi[year]=${this.year}&sapi[grouping]=${grouping}&sapi[id]=${id}`

      return endpoint
    },

    getDownloadAllLink(id) {
      let grouping = this.grouping

      if (grouping === 'exporting') {
        grouping = 'countries'
      }

      let endpoint = `/api/v1/sapi/search_download_all?sapi[user_id]=${this.user}&sapi[year]=${this.year}&sapi[grouping]=${grouping}`

      if (this.filterId) {
        endpoint += `&sapi[id]=${this.filterId}`
      }

      return endpoint
    }
  }
}
</script>
