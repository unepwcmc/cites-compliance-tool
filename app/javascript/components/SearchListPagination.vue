<template>
  <div class="list-table-pagination" v-if="metadata">
    <div class="level">
      <div class="level-left">
      </div>
      <div class="level-right">
        <div class="level-item">
          <span class="list-table-pagination__label">
            <strong>Rows {{rowCount}} of</strong> {{metadata.total}}
          </span>

          <button class="button is-dark list-table-pagination__button" v-on:click="setPage(1)" v-if="!firstPage">
            <span class="icon-arrow-left-end-light"></span>
          </button>

          <button class="button is-dark list-table-pagination__button" v-on:click="changePage(-1)" v-if="!firstPage">
            <span class="icon-arrow-left-light"></span>
          </button>

          <button class="button is-dark list-table-pagination__button" v-on:click="changePage(1)" v-if="!lastPage">
            <span class="icon-arrow-right-light"></span>
          </button>

          <button class="button is-dark list-table-pagination__button" v-on:click="setPage(totalPages)" v-if="!lastPage">
            <span class="icon-arrow-right-end-light"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['metadata'],
  data () {
    return {}
  },
  computed: {
    rowCount() {
      let max = Number(this.metadata.page) * Number(this.metadata.per_page)
      let min = max - Number(this.metadata.per_page) + 1

      if (this.lastPage) {
        max = this.metadata.total
      }

      return `${min} to ${max}`
    },

    firstPage() {
      return Number(this.metadata.page) === 1
    },

    lastPage() {
      return Number(this.metadata.page) === this.totalPages
    },

    totalPages() {
      return Math.ceil(Number(this.metadata.total) / Number(this.metadata.per_page))
    }
  },
  methods: {
    setPage(page) {
      this.$emit('change-page', Number(page))
    },

    changePage(pageOffset) {
      this.$emit('change-page', Number(this.metadata.page) + pageOffset)
    }
  }
}
</script>