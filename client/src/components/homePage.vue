<template>
    <div>
        <heading/>
        <search/>
        <get-started/>
        <contentBody/>
        <contact/>
    </div>
</template>

<script>
import heading from './heading.vue'
import search from './searchPackage.vue'
import getStarted from './getStartedMessage.vue'
import contentBody from './tourContentBody.vue'
import contact from './contact.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    heading,
    getStarted,
    search,
    contentBody,
    contact
  }
}
</script>

<style scoped>

</style>
