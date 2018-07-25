<template>
  <div>
    <site-header :username="username"></site-header>

    <div class="container">

    </div>

    <div class="container tile-container">
      <header class="accounts__header">
        <h1>Manage users</h1>
      </header>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <section class="accounts__list tile__box">
            <ul>
              <li v-for="(user, index) in users" v-bind:key="index">
                <div class="level">
                  {{user.email}}
                  <button class="button is-white accounts__list-remove" v-on:click="onClickRemoveUser(user.id, user.email)">
                    <span class="icon-remove"></span>
                    <span>Remove</span>
                  </button>
                </div>
              </li>
            </ul>

            <div class="field is-grouped accounts__list-add-user">
              <div class="control">
                <input v-model="newUserEmail" class="input" type="text" placeholder="New user email">
              </div>

              <button class="button is-dark accounts__list-add-button" v-on:click="onClickAddUser">
                <span class="icon">
                  <i class="fas fa-plus"></i>
                </span>
                <span>Add user</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from './elements/SiteHeader'

import '@fortawesome/fontawesome-free/js/all.js'

export default {
  components: {
    SiteHeader
  },
  props: ['username', 'users'],
  data () {
    return {
      newUserEmail: ''
    }
  },
  methods: {
    onClickAddUser() {
      console.log(this.newUserEmail)
      this.newUserEmail = ''
    },
    onClickRemoveUser(id, email) {
      console.log(id, email)
    }
  }
}
</script>
