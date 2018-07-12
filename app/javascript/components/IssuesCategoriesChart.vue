<template>
  <section class="issues-categories-chart">
    <h2>{{title}}</h2>

    <div class="dropdown is-right is-hoverable issues-categories-chart__dropdown">
      <div class="dropdown-trigger icon-ellipsis"></div>

      <div class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Download Issues
          </a>
        </div>
      </div>
    </div>

    <div class="issues-categories-chart__circle">
      <span>{{value}}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'value'],
  data () {
    return {}
  }
}
</script>
