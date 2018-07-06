<template>
  <section class="top-species">
    <header class="level">
      <div class="level-left">
        <h2 class="level-item">Top 5 species</h2>
      </div>
      <div class="level-right">
        <a class="button level-item is-dark top-species-button-full-list">
          <span>Full List</span>
          <span class="icon is-small">
            <i class="fas fa-angle-right"></i>
          </span>
        </a>
      </div>
    </header>

    <table class="top-species-table">
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
            <div class="level-item top-species-dropdown dropdown is-right is-hoverable">
              <div class="dropdown-trigger">
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

<style scoped>
.top-species {
  box-sizing: border-box;
  font-family: Roboto;
  height: 100%;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 3px 0 rgba(207,207,207,0.5);
  padding: 20px 15px;
}

header {
  margin-bottom: 20px;
}

h2 {
  color: #424242;
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
}

.top-species-button-full-list {
  background-color: #3f5770;
}

.top-species-button-full-list:hover {
  background-color: #517091;
}

.top-species-button-full-list span:first-child {
  padding-right: 20px;
}

.top-species-table {
  border-collapse: initial;
  border-spacing: 0 8px;
  display: table;
  table-layout: fixed;
  width: 100%;
}

.top-species-table tr {
  display: table-row;
}

.top-species-table td,
.top-species-table th {
  display: table-cell;
  padding: 0 0 0 20px;
  vertical-align: middle;
}

.top-species-table th {
  padding-bottom: 10px;
}

.top-species-table tbody td {
  border: solid #d7d7d7;
  border-width: 1px 0;
}

.top-species-table tbody td:first-child {
  border-width: 1px 0 1px 1px;
}

.top-species-table tbody td:last-child {
  border-width: 1px 1px 1px 0;
}

.top-species-dropdown {
  float: right;
}

.top-species-dropdown:hover {
  cursor: pointer;
}

.top-species-dropdown.is-right .dropdown-menu {
  right: -30px;
}
</style>