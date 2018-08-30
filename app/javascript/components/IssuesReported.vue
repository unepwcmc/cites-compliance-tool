<template>
  <section class="issues-reported level tile__box">
    <div class="level-item">
      <div>
        <p class="issues-reported__stat">
          {{issuesReportedTotal}}
        </p>
        <p class="issues-reported__label">
          Issues currently reported in {{year}}
        </p>
        <a class="icon-download issues-reported__download" v-on:click="onClickDownload()"></a>
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
