<template>
    <div>
        <section>
        <div class="container py-7">
            <div class="row">
            <div class="col-lg-12 mx-auto justify-content-center">
                <form @submit.prevent="submitInformation()" role="form" id="contact-form" method="post" autocomplete="off">
                <div class="card-body">
                    <div class="mb-4">
                    <div class="input-group input-group-dynamic">
                        <label class="form-label">Name of Place</label>
                        <input v-model="name" type="text" class="form-control">
                    </div>
                    </div>
                    <div class="mb-4">
                    <div class="input-group input-group-dynamic">
                        <label class="form-label">Duration</label>
                        <input v-model="duration" type="text" class="form-control">
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-6">
                        <div class="input-group input-group-dynamic mb-4">
                        <label class="form-label">Start Date</label>
                        <input v-model="sdate" class="form-control" aria-label="First Name..." type="text" >
                        </div>
                    </div>
                    <div class="col-md-6 ps-5">
                        <div class="input-group input-group-dynamic">
                        <label class="form-label">End Date</label>
                        <input v-model="edate"  type="text" class="form-control" placeholder="" aria-label="Last Name..." >
                        </div>
                    </div>
                    </div>
                    <div class="mb-4">
                    <div class="input-group input-group-dynamic">
                        <label class="form-label">Tour Description</label>
                        <input v-model="td" type="text" class="form-control">
                    </div>
                    </div>
                    <div class="mb-4">
                    <div class="input-group input-group-dynamic">
                        <label class="form-label">Price of Package</label>
                        <input v-model="pp" type="text" class="form-control">
                    </div>
                    </div>
                    <div class="mb-4">
                    <div class="input-group input-group-dynamic">
                        <label class="form-label">Image URL</label>
                        <input v-model="img" type="text" class="form-control">
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12">
                        <button type="submit" class="btn bg-gradient-dark w-100">Submit</button>
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
      name: '',
      duration: '',
      sdate: '',
      edate: '',
      td: '',
      pp: '',
      img: '',
      success: Boolean
    }
  },
  methods: {
    submitInformation () {
      axios.post('http://localhost:8081/create-package/create_package', {
        namOfPlace: this.name,
        duration: this.duration,
        startDay: this.sdate,
        endDay: this.edate,
        tourDescription: this.td,
        priceOfPackage: this.pp,
        image: this.img
      })
        .then((response) => {
          const stat = JSON.parse(response.status)
          this.user = response.data
          console.log(stat)
          if (stat === 200) {
            this.success = true
            this.$router.push('/packages')
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
