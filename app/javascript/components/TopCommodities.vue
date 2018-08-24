<template>
  <section class="top-commodities tile__box">
    <header class="level">
      <div class="level-left">
        <h3 class="level-item">Top 5 commodities</h3>
      </div>
      <div class="level-right">
        <a class="button level-item is-dark button-full-list" v-on:click="openModal">
          <span>Full List</span>
          <span class="icon is-small">
            <i class="fas fa-angle-right"></i>
          </span>
        </a>
      </div>
    </header>

    <div class="columns">
      <div class="column is-5">
        <ul class="top-commodities__list">
          <li class="level" v-for="(commodity, index) in commodities" :key="index">
            <div class="level-left">
              <span class="level-item top-commodities__list-dot" :style="{backgroundColor: colours[index]}"></span>

              <span class="level-item top-commodities__list-name">
                <strong>{{index + 1}}.</strong> {{commodity.term}}
              </span>
            </div>
            <div class="level-right">
              <component-links :download="getDownloadLink(commodity)"></component-links>
            </div>
          </li>
        </ul>
      </div>
      <div class="column">
        <ul class="top-commodities__chart">
          <li class="level" v-for="(commodity, index) in commodities" :key="index">
            <div class="top-commodities__chart-bar" :style="{width: `${commodity.percent}%`, backgroundColor: colours[index]}"></div>
            <div class="level-left">
              <span class="level-item top-commodities__chart-name">
                <strong :style="{color: textColours[index]}">{{index + 1}}. {{commodity.value}} ({{Number(commodity.percent).toFixed(1)}}%)</strong>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import ComponentLinks from '../elements/ComponentLinks'

export default {
  components: {
    ComponentLinks
  },
  props: ['commodities', 'user', 'year'],
  data () {
    return {
      colours: ['#3c526a', '#088ba5', '#00a2d0', '#3aa18e', '#b3c82b'],
      textColours: ['#fff', 'inherit', 'inherit', 'inherit', 'inherit']
    }
  },
  methods: {
    openModal() {
      this.$emit('open-modal', 'commodity')
    },
    getDownloadLink(item) {
      let endpoint = `/api/v1/sapi/download?sapi[user_id]=${this.user}&sapi[year]=${this.year}&sapi[grouping]=commodity&sapi[id]=${item.term_id}`

      return endpoint
    }
  }
}
</script>
