<template>
<div>
<heading/>
<section class="py-9">
  <div class="container">
    <div class="headline">
      <h1 style="text-align: center; color: white">Sign-up</h1>
    </div>
    <fillRegister class="my-5 py-5" id="new-form"
      style="display: flex;
      justify-content: center;
      "/>
  </div>
</section>
</div>
</template>

<script>
import heading from './heading.vue'
import fillRegister from './registerForm.vue'
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
  },
  methods: {

  },
  components: {
    heading,
    fillRegister
  }
}
</script>

<style scoped>

</style>
