<template>
  <div>
    <template v-if="download && details">
      <div class="level-item list-table__dropdown dropdown is-right is-hoverable">
        <div class="dropdown-trigger icon-ellipsis"></div>

        <div class="dropdown-menu dropdown-menu-dark" role="menu">
          <div class="dropdown-content">
            <a v-if="details" :href="details" class="dropdown-item">
              View Details
              <span class="icon-arrow-right-light"></span>
            </a>
            <a v-if="download" class="dropdown-item" v-on:click="onClickDownload(download)">
              Download Issues
              <span class="icon-download-light"></span>
            </a>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <a class="icon-download list-table__icon-download" v-on:click="onClickDownload(download)"></a>
    </template>
  </div>
</template>

<script>
import mixinClickDownload from '../mixins/click-download'

export default {
  mixins: [mixinClickDownload],
  props: ['download', 'details'],
  data () {
    return {}
  }
}
</script>
