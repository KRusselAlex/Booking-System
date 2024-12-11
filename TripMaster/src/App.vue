<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useHotelStore } from "@/stores/hotelStore";
import { useRoomsStore } from "@/stores/roomsStore";

const hotelStore = useHotelStore();
hotelStore.getallcourses();
const roomsStore = useRoomsStore();
roomsStore.getallcoursesContent();

</script>


<template>

  <RouterView />
</template>

<style scoped>

</style>
