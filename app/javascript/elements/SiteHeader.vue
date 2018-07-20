<template>
  <nav class="site-navigation site-navigation-main" role="navigation" aria-label="main navigation">
    <div class="level">
      <div class="level-left">
        <a class="level-item site-navigation-main__logo" href="#">
          <img src="https://s3.amazonaws.com/wcmc.logo/UN-Environment-WCMC+logo+2017+white.svg" alt="UN Environment World Conservation Monitoring Centre">
        </a>

        <a class="level-item" :class="{'is-active': active === 'dashboard'}" href="/">
          Dashboard
        </a>
        <a class="level-item" :class="{'is-active': active === 'search'}" href="/search">
          Search
        </a>
      </div>

      <div class="level-right">
        <a class="level-item site-navigation-main__download" href="/download/download_all">
          Download All
          <span class="icon-download-light"></span>
        </a>
        <a class="level-item" href="#">
          Name
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['active'],
  data () {
    return {}
  }
}
</script>
