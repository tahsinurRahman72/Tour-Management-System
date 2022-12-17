<template>
<div class="page-header tourMessage justify-content-sm-center" loading="lazy" >
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column flex-row">
          <h1 class="text-white mb-4">Travellers'</h1>
          <p class="text-white opacity-8 lead pe-5 me-5">We care for your ultimate tour destinations</p>
        </div>
        <img src="https://i.pinimg.com/originals/34/b3/32/34b3326c751cf5dd619416bd3cdb553b.gif" style="width: 30vw; height: 20vw; background-color: white; float: left; margin-left: 0px">
      </div>
    </div>
  </div>
</template>
<style scoped>
.tourMessage{
  animation: tourMessage 1.25s;
  animation-direction: alternate;
}
@keyframes tourMessage {
  0%   {top: -100vw; opacity: 0%;}
  100%  {top: 0vw; opacity: 100%;}
}
</style>
