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
            <div class="notification is-warning accounts__list-notification" :class="{active: showNotification}">
              Failed to delete user
            </div>

            <ul>
              <li v-if="!users || users.length === 0">
                No users
              </li>

              <li v-else v-for="(user, index) in users" v-bind:key="index">
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

    <div class="modal accounts__modal" :class="{'is-active': confirmRemoveModal}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Remove user</p>
          <button class="delete" aria-label="close" v-on:click="closeRemoveModal"></button>
        </header>
        <section class="modal-card-body">
          <p>Are you sure you want to remove the user <strong>{{removeUser.email}}</strong>?</p>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" v-on:click="confirmRemoveUser">Yes, remove user</button>
          <button class="button" v-on:click="closeRemoveModal">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from './elements/SiteHeader'
import axios from 'axios'

import '@fortawesome/fontawesome-free/js/all.js'

export default {
  components: {
    SiteHeader
  },
  props: ['username', 'users'],
  data () {
    return {
      showNotification: false,
      confirmRemoveModal: false,
      removeUser: {},
      newUserEmail: ''
    }
  },
  methods: {
    onClickAddUser() {
      console.log(this.newUserEmail)
      this.newUserEmail = ''
    },

    onClickRemoveUser(id, email) {
      this.confirmRemoveModal = true
      this.removeUser = {
        id: id,
        email: email
      }
    },

    closeRemoveModal() {
      this.confirmRemoveModal = false
      this.removeUser = {}
    },

    confirmRemoveUser() {
      if (!this.removeUser || !this.removeUser.id) {
        this.confirmRemoveModal = false
        this.removeUser = {}
        return
      }

      const token = document.querySelector('meta[name="csrf-token"]').attributes.content.value
      console.log(token)

      const formData = new FormData()
      formData.set('authenticity_token', token)

      axios({
        method: 'delete',
        url: `/users/${this.removeUser.id}`,
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
      }).then((res) => {
        window.location.reload()
      }).catch((err) => {
        console.error(err)
        this.showNotification = true
      })
    }
  }
}
</script>
