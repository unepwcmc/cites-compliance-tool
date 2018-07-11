<template>
  <section class="issues-taxonomies tile-box">
    <header class="level">
      <div class="level-left">
        <h3 class="level-item">Issues by taxonomy</h3>
      </div>
    </header>

    <div class="columns">
      <div class="column">
        <ul class="issues-taxonomies-chart">
          <li v-for="(taxonomy, index) in taxonomies" :key="index">
            <div class="issues-taxonomies-chart-bar" :style="{height: `${barPercentage(taxonomy.percent)}%`, backgroundColor: colours[index]}"></div>
            <div class="issues-taxonomies-chart-labels">
              <span class="issues-taxonomies-chart-labels-value" :style="{bottom: `${barPercentage(taxonomy.percent)}%`}">
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
        <ul class="issues-taxonomies-list">
          <li class="level" v-for="(taxonomy, index) in taxonomies" :key="index">
            <div class="level-left">
              <span class="level-item issues-taxonomies-list-dot" :style="{backgroundColor: colours[index]}"></span>

              <span class="level-item issues-taxonomies-list-name">
                <strong>{{index + 1}}.</strong> {{taxonomy.taxon}}
              </span>
            </div>
            <div class="level-right">
              <div class="level-item issues-taxonomies-list-dropdown dropdown is-right is-hoverable">
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
      textColours: ['#fff', 'inherit', 'inherit', 'inherit', 'inherit', 'inherit', 'inherit', 'inherit'],
      barMax: 80
    }
  },
  methods: {
    barPercentage(value) {
      return (value / 100) * this.barMax
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/stylesheets/application.scss';

header {
  margin-bottom: 20px;
}

.issues-taxonomies-list,
.issues-taxonomies-chart {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 250px;
}

.issues-taxonomies-chart {
  flex-direction: row;
  flex-wrap: nowrap;
  padding-left: 15px;
}

.issues-taxonomies-list li {
  border: $tile-section-border;
  flex: 1 1 50px;
  margin-bottom: 10px;
  margin-left: 2%;
  padding: 0 0 0 15px;
  width: 48%;
}

.issues-taxonomies-list li:nth-child(4n) {
  margin-bottom: 0;
}

.issues-taxonomies-chart li {
  border-radius: 2px;
  flex-grow: 1;
  margin: 0 0 0 10px;
  padding: 0 0 15px 0;
}

.issues-taxonomies-chart li:first-child {
  margin-left: 0;
}

.issues-taxonomies-list-dot {
  border-radius: 50%;
  height: 15px;
  width: 15px;
}

.issues-taxonomies-list-name strong {
  margin-right: 5px;
}

.issues-taxonomies-list-dropdown.is-right .dropdown-menu {
  right: -30px;
}

.issues-taxonomies-chart li {
  position: relative;
}

.issues-taxonomies-chart-labels-value {
  font-size: 14px;
  margin-bottom: 5px;
  position: absolute;
  width: 100%;
  z-index: 2;
}

.issues-taxonomies-chart-labels-value {
  line-height: 1.3;
}

.issues-taxonomies-chart-bar {
  border-radius: 2px;
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
}
</style>