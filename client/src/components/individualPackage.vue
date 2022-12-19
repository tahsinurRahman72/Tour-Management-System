<template>
    <div>
    <heading/>
    <section class="py-9">
      <div class="container">
        <div class="headline">
          <h1 style="text-align: center; color: white">Tour Destinations</h1>
        </div>
        <div class="row" v-for="items in packages" :key="items" style="padding: 10px">
          <div class="col-lg-6 my-auto">
            <img :src="items.image" style="width: 650px; height: 350px; padding: 10px">
          </div>
          <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
            <div class="p-3 info-horizontal">
              <div class="description ps-3">
                <p class="mb-0" style="font-size: 3vh"><b>Tour Destination:</b>{{items.namOfPlace}}</p>
              </div>
            </div>
            <div class="p-3 info-horizontal">
              <div class="description ps-3">
                <p class="mb-0"><b>Duration:</b> {{items.duration}} days<br>Est. Date: {{items.startDay}} - {{items.endDay}}</p>
              </div>
            </div>
            <div class="p-3 info-horizontal">
              <div class="description ps-3">
                <p class="mb-0"><b>Tour Highlights:</b> <i>{{items.tourDescription}}</i> <br><br> <b>Tour Price: </b> {{items.priceOfPackage}} /- </p>
              </div>
            </div>
          </div>
          <div class="btn" style="float: right">
            <button v-on:click="fillupForm($event, items.packageId)" class="btn btn-primary w-auto me-2">
              Book {{items.namOfPlace}}
            </button>
            <div class="form">
            <fillform id="new-form" style="display: none; justify-content: center;"/>
          </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </template>
<script>
import axios from 'axios'
import heading from './heading.vue'
import fillform from './formFillup.vue'
export default {
  name: 'individualPackage',
  data () {
    return {
      isActive: false,
      packages: [],
      name: '',
      result: '',
      firstName: '',
      lastName: '',
      number: '',
      email: '',
      phone: ''
    }
  },
  mounted () {
    axios.get('http://localhost:8081/view-package/packages')
      .then((response) => {
        this.packages = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    fillupForm (event) {
      if (event) {
        document.getElementById('new-form').style.display = 'flex'
        this.isActive = !this.isActive
        console.log(event.target.innerHTML)
        this.name = event.target.innerHTML
        this.result = this.name.replace('Book', '')
        console.log(this.result)

        axios.post('', {
          packageName: this.result,
          firstName: this.firstName,
          lastName: this.lastName,
          numOfPeople: this.number,
          email: this.email,
          phone: this.phone
        })
          .then((response) => {
            this.bookInfo = response.data
          })
          .catch((err) => {
            console.log(err)
          })
      }
      if (this.isActive === false) {
        document.getElementById('new-form').style.display = 'none'
      }
    }
  },
  components: {
    heading,
    fillform
  }
}
</script>
<style scoped>

</style>
