<template>
  <section class="issues-reported level tile__box">
    <component-loading v-if="loading" />
    <no-data-overlay v-else-if="!values" />

    <div v-show="values" class="level-item">
      <div>
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
import ComponentLoading from '../elements/ComponentLoading'
import NoDataOverlay from '../elements/NoDataOverlay'
import mixinClickDownload from '../mixins/click-download'

export default {
  components: {ComponentLoading, NoDataOverlay},
  mixins: [mixinClickDownload],
  props: ['values', 'year', 'user', 'loading'],
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
