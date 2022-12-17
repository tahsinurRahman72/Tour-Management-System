<template>
    <div>
        <section>
        <div class="container py-4">
            <div class="row">
            <div class="col-lg-12 mx-auto justify-content-center">
                <h3 class="text-white mb-4" style="text-align: center">Inforamtion required</h3>
                <form @submit.prevent="submitInformation(), refreshPage ()" role="form" id="contact-form" method="post" autocomplete="off">
                <div class="card-body">
                    <div class="row">
                    <div class="col-md-6">
                        <div class="input-group input-group-dynamic mb-4">
                        <label class="form-label">First Name</label>
                        <input v-model="firstname" class="form-control" aria-label="First Name..." type="text" >
                        </div>
                    </div>
                    <div class="col-md-6 ps-5">
                        <div class="input-group input-group-dynamic">
                        <label class="form-label">Last Name</label>
                        <input v-model="lastname"  type="text" class="form-control" placeholder="" aria-label="Last Name..." >
                        </div>
                    </div>
                    </div>
                    <div class="mb-4">
                    <div class="input-group input-group-dynamic">
                        <label class="form-label">Phone Number</label>
                        <input v-model="phone" type="text" class="form-control">
                    </div>
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
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submitInformation () {
      axios.post('http://localhost:8081/register/register_user', {
        FirstName: this.firstname,
        LastName: this.lastname,
        PhoneNumber: this.phone,
        Email: this.email,
        Password: this.password
      })
        .then((response) => {
          this.user = response.data
        })
        .catch((error) => {
          console.log(error)
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
