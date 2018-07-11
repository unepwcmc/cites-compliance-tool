<template>
  <section class="top-species tile__box">
    <header class="level">
      <div class="level-left">
        <h3 class="level-item">Top 5 species</h3>
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

    <table class="top-species__table">
      <thead>
        <tr>
          <th>Species</th>
          <th>No. Transactions</th>
          <th>Appendix</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(species, index) in species" :key="index">
          <td><strong>{{index + 1}}.</strong> {{species.name}}</td>
          <td>{{species.transactions}}</td>
          <td>{{species.appendix}}</td>
          <td>
            <div class="level-item top-species__dropdown dropdown is-right is-hoverable">
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
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  props: ['species'],
  data () {
    return {}
  }
}
</script>