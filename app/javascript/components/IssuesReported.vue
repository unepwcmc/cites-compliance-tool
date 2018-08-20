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
        <a class="icon-download issues-reported__download" :href="'/download/download?year=' + year"></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['values', 'year'],
  data () {
    return {}
  },
  computed: {
    issuesReportedTotal() {
      return this.values.reduce((acc, reported) => {
        return acc + Number(reported.value)
      }, 0)
    }
  }
}
</script>
