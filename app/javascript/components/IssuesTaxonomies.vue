<template>
  <section class="issues-taxonomies tile__box">
    <header class="level">
      <div class="level-left">
        <h3 class="level-item">Issues by taxonomy</h3>
      </div>
    </header>

    <div class="columns">
      <div class="column">
        <ul class="issues-taxonomies__chart">
          <li v-for="(taxonomy, index) in taxonomies" :key="index">
            <div class="issues-taxonomies__chart-bar" :style="{height: `${getBarPercentage(taxonomy.percent)}%`, backgroundColor: colours[index]}"></div>
            <div class="issues-taxonomies__chart-labels">
              <span class="issues-taxonomies__chart-labels-value" :style="{bottom: `${getBarPercentage(taxonomy.percent)}%`}">
                <strong>
                  {{index + 1}}.
                  <br>
                  {{taxonomy.cnt}} ({{taxonomy.percent.toFixed(1)}}%)
                </strong>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div class="column is-6">
        <ul class="issues-taxonomies__list">
          <li class="level" v-for="(taxonomy, index) in taxonomies" :key="index">
            <div class="level-left">
              <span class="level-item issues-taxonomies__list-dot" :style="{backgroundColor: colours[index]}"></span>

              <span class="level-item issues-taxonomies__list-name">
                <strong>{{index + 1}}.</strong> {{taxonomy.taxon}}
              </span>
            </div>
            <div class="level-right">
              <div class="level-item issues-taxonomies__list-dropdown dropdown is-right is-hoverable">
                <div class="dropdown-trigger icon-ellipsis">
                  <span class="icon is-large">
                    <i class="fas fa-lg fa-ellipsis-v"></i>
                  </span>
                </div>

                <div class="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <a href="#" class="dropdown-item">
                      Download Issues
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['taxonomies'],
  data () {
    return {
      colours: ['#3c526a', '#088ba5', '#00a2d0', '#3aa18e', '#58bc8a', '#91c352', '#b4c92c', '#d5ec3a'],
      textColours: ['#fff', 'inherit', 'inherit', 'inherit', 'inherit', 'inherit', 'inherit', 'inherit']
    }
  },
  methods: {
    getMaxPercent() {
      return Math.max(...this.taxonomies.map((t) => t.percent))
    },
    getBarPercentage(value) {
      return (value / this.getMaxPercent()) * 80
    }
  }
}
</script>
