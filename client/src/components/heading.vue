<template>
<header>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-absolute bg-transparent shadow-none">
    <div class="container">
      <a class="navbar-brand text-white " href="javascript:;">Travellers'</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-header-2" aria-controls="navbar-header-2" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-header-2">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <button v-on:click=goHome() class="nav-link text-white">
              Home
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link text-white" href="javascript:;">
              About Us
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link text-white" href="javascript:;">
              Request Custom Tour
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link text-white" v-on:click="createPackage()">
              Create Tour Package
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link text-white" href="javascript:;">
              Leave a Review
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link text-white" v-on:click="goToTourPage()">
              Packages
            </button>
          </li>
        </ul>
        <div id="conditional">
          <ul class="nav navbar-nav">
          <li class="nav-item">
            <button class="nav-link text-white" v-on:click="goToLogin()">
              <i>Login</i>
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link text-white mx-2" v-on:click="goToSignUp()">
              <i>Sign-up</i>
            </button>
          </li>
        </ul>
        </div>
        <div id="conditional">
          <ul class="nav navbar-nav">
          <li class="nav-item">
            <button class="nav-link text-white" v-on:click="logOut()">
              <i>LogOut</i>
            </button>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </nav>
</header>
</template>

<script>
import axios from 'axios'
export default {
  name: 'header',
  data () {
    return {
      isLoggedIn: true
    }
  },
  props: {
    success: Boolean
  },
  methods: {
    goHome () {
      this.$router.push('/')
      this.$router.go()
    },
    goToTourPage () {
      this.$router.push('/packages')
      this.$router.go()
    },
    goToSignUp () {
      this.$router.push('/sign-up')
    },
    goToLogin () {
      this.$router.push('/log-in')
    },
    createPackage () {
      this.$router.push('/create-package')
    },
    logOut () {
      try {
        axios.post('http://localhost:8081/logout/log-out')
        this.success = false
        this.$router.go()
      } catch (error) {
        console.error(error)
      }
    },
    condition () {
      if (this.success) {
        document.getElementById('conditional').style.display = 'none'
      }
    }
  }
}
</script>

<style scoped>
button{
  background-color: rgba(240, 248, 255, 0);
  border-color: rgba(240, 248, 255, 0);
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
