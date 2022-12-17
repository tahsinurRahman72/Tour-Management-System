<template>
<div>
<heading/>
<section class="py-9">
  <div class="container">
    <div class="headline">
      <h1 style="text-align: center; color: white">Create New Destination</h1>
    </div>
    <buildPackage class="my-5 py-5" id="new-form"
      style="display: flex;
      justify-content: center;
      "/>
  </div>
</section>
</div>
</template>

<script>
import axios from 'axios'
import heading from './heading.vue'
import buildPackage from './packageForm.vue'
export default {
  name: 'individualPackage',
  data () {
    return {
      isActive: false,
      packages: [],
      index: false
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

  },
  components: {
    heading,
    buildPackage
  }
}
</script>

<style scoped>

</style>
