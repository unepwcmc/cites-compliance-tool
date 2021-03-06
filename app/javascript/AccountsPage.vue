<template>
  <div>
    <site-header :username="username" :user="user" :admin="admin"></site-header>

    <div class="container">

    </div>

    <div class="container tile-container">
      <header class="accounts__header">
        <h1>Manage users</h1>
      </header>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <section class="accounts__list tile__box">
            <div class="notification is-warning accounts__list-notification" :class="{active: showDeleteNotification}">
              Failed to delete user
            </div>

            <ul>
              <li v-if="!users || users.length === 0">
                No users
              </li>

              <li v-else v-for="(user, index) in users" v-bind:key="index">
                <div class="level">
                  {{user.email}}

                  <span v-if="user.admin" class="tag is-medium">
                    Admin
                  </span>

                  <button v-else class="button is-white accounts__list-remove" v-on:click="onClickRemoveUser(user.id, user.email)">
                    <span class="icon-remove"></span>
                    <span>Remove</span>
                  </button>
                </div>
              </li>
            </ul>

            <div class="field is-grouped accounts__list-add-user">
              <div class="control">
                <input v-model="newUserEmail" class="input" type="text" placeholder="New user email">
                <input v-model="newUserPassword" class="input" type="password" placeholder="New user password">
              </div>

              <button class="button is-dark accounts__list-add-button" v-on:click="onClickAddUser">
                <span class="icon">
                  <i class="fas fa-plus"></i>
                </span>
                <span>Add user</span>
              </button>
            </div>

            <div class="field accounts__list-add-user-admin">
              <label class="checkbox">
                <input v-model="newUserAdmin" type="checkbox">
                Admin
              </label>
            </div>

            <div class="notification is-warning accounts__list-notification" :class="{active: showCreateNotification}">
              Failed to create user
            </div>
          </section>
        </div>
      </div>
    </div>

    <div class="modal accounts__modal" :class="{'is-active': confirmRemoveModal}">
      <div class="modal-background accounts__modal-background"></div>
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

export default {
  components: {
    SiteHeader
  },
  props: ['username', 'user', 'users', 'admin'],
  data () {
    return {
      showCreateNotification: false,
      showDeleteNotification: false,
      confirmRemoveModal: false,
      removeUser: {},
      newUserEmail: '',
      newUserPassword: '',
      newUserAdmin: false
    }
  },
  methods: {
    onClickAddUser() {
      this.showCreateNotification = false

      const token = document.querySelector('meta[name="csrf-token"]').attributes.content.value

      const formData = new FormData()
      formData.append('authenticity_token', token)
      formData.append('email', this.newUserEmail)
      formData.append('password', this.newUserPassword)
      formData.append('admin', this.newUserAdmin)

      axios({
        method: 'post',
        url: '/users',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
      }).then((res) => {
        window.location.reload()
      }).catch((err) => {
        console.error(err)
        this.showCreateNotification = true
      })
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
      this.showDeleteNotification = false

      if (!this.removeUser || !this.removeUser.id) {
        this.confirmRemoveModal = false
        this.removeUser = {}
        return
      }

      const token = document.querySelector('meta[name="csrf-token"]').attributes.content.value

      const formData = new FormData()
      formData.append('authenticity_token', token)

      axios({
        method: 'delete',
        url: `/users/${this.removeUser.id}`,
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
      }).then((res) => {
        window.location.reload()
      }).catch((err) => {
        console.error(err)
        this.showDeleteNotification = true
      })
    }
  }
}
</script>
