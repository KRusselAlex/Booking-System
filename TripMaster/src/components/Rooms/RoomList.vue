<script setup lang="ts">
import imageTest from '@/assets/download.jpeg'
import RoomCard from './RoomCard.vue';

import { useRoomsStore } from '@/stores/roomsStore';


const roomsStore = useRoomsStore();
</script>


<template>

  <div class="grid px-1 gap-y-4 w-full">
    <RoomCard :hotelId="23" :title="room.title" :image="imageTest" :price="room.price" :size="room.size" v-for="room in roomsStore.rooms" :key="room.id" >

    </RoomCard >


  </div>


</template>

<style scoped></style>
