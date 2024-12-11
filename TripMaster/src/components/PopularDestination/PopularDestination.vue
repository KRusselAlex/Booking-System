<script setup lang="ts">
import CardDestination from './CardDestination.vue';
import imageTest from '@/assets/download.jpeg'
import { useHotelStore } from '@/stores/hotelStore';

const hotelStore = useHotelStore();
</script>


<template>

 <div class="flex flex-col gap-3">
  <div class="flex justify-between items-center">
    <h2 class="text-xl font-semibold">Popular Destination</h2>
    <RouterLink to="/hotels" class="text-primary hover:underline" >See All </RouterLink>
  </div>
  <div class="grid grid-cols-2 gap-2  py-4" >

    <CardDestination :title="Hotel.titre" :note=3.5 :image="imageTest" link="3"  :hotel-i-d="Hotel.id" v-for="Hotel in hotelStore.hotels" :key="Hotel.id" />

  </div>
 </div>


</template>

<style scoped>

</style>
