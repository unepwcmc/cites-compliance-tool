<template>
  <section class="top-commodities tile-box">
    <header class="level">
      <div class="level-left">
        <h3 class="level-item">Top 5 commodity</h3>
      </div>
      <div class="level-right">
        <a class="button level-item is-dark button-full-list">
          <span>Full List</span>
          <span class="icon is-small">
            <i class="fas fa-angle-right"></i>
          </span>
        </a>
      </div>
    </header>

    <div class="columns">
      <div class="column is-5">
        <ul class="top-commodities-list">
          <li class="level" v-for="(commodity, index) in commodities" :key="index">
            <div class="level-left">
              <span class="level-item top-commodities-list-dot" :style="{backgroundColor: colours[index]}"></span>

              <span class="level-item top-commodities-list-name">
                <strong>{{index + 1}}.</strong> {{commodity.term}}
              </span>
            </div>
            <div class="level-right">
              <div class="level-item top-commodities-list-dropdown dropdown is-right is-hoverable">
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
      <div class="column">
        <ul class="top-commodities-chart">
          <li class="level" v-for="(commodity, index) in commodities" :key="index">
            <div class="top-commodities-chart-bar" :style="{width: `${commodity.percent}%`, backgroundColor: colours[index]}"></div>
            <div class="level-left">
              <span class="level-item top-commodities-chart-name">
                <strong :style="{color: textColours[index]}">{{index + 1}}. {{commodity.cnt}} ({{commodity.percent.toFixed(1)}}%)</strong>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['commodities'],
  data () {
    return {
      colours: ['#3c526a', '#088ba5', '#00a2d0', '#3aa18e', '#b3c82b'],
      textColours: ['#fff', 'inherit', 'inherit', 'inherit', 'inherit']
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/stylesheets/application.scss';

header {
  margin-bottom: 20px;
}

.top-commodities-list,
.top-commodities-chart {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.top-commodities-list li {
  border: $tile-section-border;
  flex-grow: 1;
  margin-bottom: 10px;
  padding: 0 0 0 15px;
}

.top-commodities-chart li {
  background-color: #d9dee2;
  border-radius: 2px;
  flex-grow: 1;
  margin-bottom: 10px;
  padding: 0 0 0 15px;
}

.top-commodities-list li:last-child,
.top-commodities-chart li:last-child {
  margin-bottom: 0;
}

.top-commodities-list-dot {
  border-radius: 50%;
  height: 15px;
  width: 15px;
}

.top-commodities-list-name strong,
.top-commodities-chart-name strong {
  margin-right: 5px;
}

.top-commodities-list-dropdown.is-right .dropdown-menu {
  right: -30px;
}

.top-commodities-chart li {
  position: relative;
}

.top-commodities-chart .level {
  z-index: 1;
}

.top-commodities-chart-bar {
  background-color: red;
  border-radius: 2px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
}
</style>