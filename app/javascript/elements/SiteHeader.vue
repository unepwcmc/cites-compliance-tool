<template>
  <nav class="site-navigation site-navigation-main" role="navigation" aria-label="main navigation">
    <div class="level">
      <div class="level-left">
        <a class="level-item site-navigation-main__logo" href="/">
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
        <a class="level-item site-navigation-main__download" :href="getDownloadLink()" target="_blank">
          Download All
          <span class="icon-download-light"></span>
        </a>

        <div class="site-navigation-main__account-dropdown dropdown is-hoverable">
          <a class="level-item dropdown-trigger site-navigation-main__account">
            {{username}}
            <span class="icon-arrow-down-light"></span>
          </a>

          <div class="dropdown-menu dropdown-menu-dark" role="menu">
            <div class="dropdown-content">
              <a class="dropdown-item" href="/accounts">
                Manage users
                <span class="icon-arrow-right-light"></span>
              </a>
              <a class="dropdown-item" href="/users/sign_out">
                Logout
                <span class="icon-logout-light"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['username', 'user', 'active'],
  data () {
    return {}
  },
  methods: {
    getDownloadLink() {
      return `/api/v1/sapi/download?sapi[user_id]=${this.user}&sapi[all]`
    }
  }
}
</script>
