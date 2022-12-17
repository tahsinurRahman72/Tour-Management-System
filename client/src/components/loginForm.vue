<template>
    <div>
        <section>
        <div class="container py-7">
            <div class="row">
            <div class="col-lg-12 mx-auto justify-content-center">
                <h3 class="text-white mb-4" style="text-align: center">Enter your credentials to login</h3>
                <form @submit.prevent="submitInformation()" role="form" id="contact-form" method="post" autocomplete="off">
                <div class="card-body">
                    <div class="row">
                    </div>
                    <div class="mb-4">
                    <div class="input-group input-group-dynamic">
                        <label class="form-label">Email Address</label>
                        <input v-model="email" type="email" class="form-control">
                    </div>
                    </div>
                    <div class="mb-4">
                    <div class="input-group input-group-dynamic">
                        <label class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control">
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12">
                        <button type="submit" class="btn bg-gradient-dark w-100">Send</button>
                    </div>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      user: [],
      email: '',
      password: '',
      success: Boolean
    }
  },
  methods: {
    submitInformation () {
      axios.post('http://localhost:8081/login/login-user', {
        Email: this.email,
        Password: this.password
      })
        .then((response) => {
          const stat = JSON.parse(response.status)
          this.user = response.data
          console.log(stat)
          if (stat === 200 && this.email) {
            this.success = true
            this.$router.push('/')
            this.$router.go()
          }
        })
        .catch((err) => {
          this.index = false
          const stat = err.response.status
          if (stat === 500) {
            this.success = false
            this.$router.go()
          }
        })
    },
    refreshPage () {
      this.$router.go()
    },
    hideSuccessMessage () {
      document.getElementById('alert').style.display = 'none'
    }
  }
}
</script>
