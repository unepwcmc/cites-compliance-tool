<template>
  <section class="issues-reported level tile__box">
    <div class="level-item">
      <div v-show="values">
        <p class="issues-reported__stat">
          {{issuesReportedTotal}}
        </p>
        <p class="issues-reported__label">
          Issues currently reported in {{year}}
        </p>

        <span v-if="loadingDownload" class="icon issues-reported__download issues-reported__download-indicator">
          <i class="fas fa-spinner fa-pulse"></i>
        </span>

        <a v-else class="icon-download issues-reported__download" v-on:click="onClickDownload(getDownloadLink())"></a>
      </div>
    </div>
  </section>
</template>

<script>
import mixinClickDownload from '../mixins/click-download'

export default {
  mixins: [mixinClickDownload],
  props: ['values', 'year', 'user'],
  data () {
    return {}
  },
  computed: {
    issuesReportedTotal() {
      if (!this.values) {
        return
      }

      return this.values.reduce((acc, reported) => {
        return acc + Number(reported.value)
      }, 0)
    }
  },
  methods: {
    getDownloadLink() {
      return `/api/v1/sapi/download?sapi[user_id]=${this.user}&sapi[year]=${this.year}`
    }
  }
}
</script>
