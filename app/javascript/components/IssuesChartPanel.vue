<template>
  <div class="issues-chart__panel" :class="{active: active}">
    <div class="issues-chart__panel-issues">
      <span>{{values.issuesReported}}</span>
      <p>Issues reported</p>
    </div>

    <div class="issues-chart__panel-countries">
      <span>{{values.countriesReported}}</span>
      <p>Parties with issues reported</p>
    </div>

    <div class="issues-chart__label">{{values.year}}</div>
  </div>
</template>

<script>
export default {
  props: ['values', 'active'],
  data () {
    return {}
  }
}
</script>
