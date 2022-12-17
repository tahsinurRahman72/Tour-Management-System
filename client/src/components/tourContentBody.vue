<template>
<div>
<div class="justify-content-sm-cente" style="width:100%;margin:20vh auto;height:40vh">
  <h1 class="text-white mb-4" style="text-align: center">Discover your desired tour destination</h1>
    <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
        <template>
          <slideritem v-for="(item,index) in packages" :pageLength="packages.length" :index="index" :key="index" :style="style">
            <button :id="item.packageId" class="carousel-button">
              {{item.namOfPlace}}
            </button>
          </slideritem>
        </template>
        <div slot="loading">loading...</div>
    </slider>
</div>
    <button v-on:click="goToTourPage()" class="carousel-button" style="display: block; margin-left: auto; margin-right: auto">
      View All Packages
    </button>
</div>
</template>
<script>
import axios from 'axios'
import { slider, slideritem } from 'vue-concise-slider'
export default {
  el: '#app',
  mounted () {
    axios.get('http://localhost:8081/view-package/packages')
      .then((response) => {
        this.packages = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  data () {
    return {
      packages: [],
      style: {
        'background-image': 'url(' + 'https://secondcropcreative.com/perfectloops/images/Mount-Susana-Time-Lapse.gif' + ')',
        'background-size': '750px',
        'text-sadow': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'width': '44.33%'
      },
      options: {
        effect: 'coverflow',
        currentPage: 0,
        thresholdDistance: 100,
        thresholdTime: 300,
        deviation: 200,
        widthScalingRatio: 0.8,
        heightScalingRatio: 0.8,
        slidesToScroll: 1,
        loop: true,
        pagination: true,
        grabCursor: true,
        speed: 300
      }
    }
  },
  methods: {
    goToTourPage () {
      this.$router.push('/packages')
      this.$router.go()
    }
  },
  components: {
    slider,
    slideritem
  }
}
</script>
<style scoped>
.carousel-button{
  background-color: rgba(255, 255, 255, 0.656);
  border-color: rgba(255, 255, 255, 0);
  border-radius: 15px;
  color: rgb(28, 64, 84);
}
</style>
