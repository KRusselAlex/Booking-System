<script setup lang="ts">
import imageTest from '@/assets/download.jpeg'
import NavigationButton from '@/components/Buttons/NavigationButton.vue';
import { useRoomsStore } from '@/stores/roomsStore';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

const handleClick = () => {
  console.log("are you there")
  router.push("/payment")
}

const roomsStore = useRoomsStore();
const langue = ref("fr")
const router = useRouter();
const route = useRoute();

const rooms = roomsStore.getOneCourse(route.params.id)


const audio = import.meta.env.VITE_API_ENDPOINT + "/" + rooms.audio
// Define the goBack function
function goBack() {
  router.go(-1); // Navigate to the previous page
}

</script>

<template>





<div class="grid grid-rows-[1fr_3fr] h-screen relative  w-full ">

    <div class="h-48 rounded-b-3xl" :style="`background-image: url('${imageTest}');`">
      <div class="flex justify-start p-4">
        <span class="rounded-full p-2 bg-white" @click="goBack()">
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#000000" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>

        </span>

      </div>

    </div>

    <div class=" w-full rounded-t-3xl  h-full  bg-white py-5 px-4 flex flex-col justify-between gap-4 overflow-y ">
      <div class="flex flex-col gap-y-6">
        <div class="flex  gap-1 items-center flex-wrap justify-start ">

          <h1 class="font-bold text-2xl">{{ rooms.title }}</h1>
          <h6 class="italic text-sm text-gray-500"> ( {{ rooms.title_fon }} ) </h6>


        </div>
        <div class="flex items-center justify-between">
          <p v-if="!rooms.size">
            20m2
          </p>
          <p v-else>
            {{ rooms.size }}

          </p>
          <p class="text-primary font-medium text-xl italic" v-if="rooms.price">{{ rooms.price }} FCFA</p>
          <p class="text-primary italic font-medium text-xl" v-else> 200000 FCFA</p>
        </div>

        <div class="flex flex-col ">
          <div class="flex items-center justify-between mb-3">
            <h2 class="text-xl font-bold">
             Description
            </h2>
            <select v-model="langue"
              class="w-28 py-2 flex justify-center text-center rounded-full border-none outline-none bg-primary text-white ">
              <option value="fr" class="rounded-lg">
                Francais
              </option>
              <option value="fon" class="rounded-lg">
                Fon
              </option>
            </select>

          </div>

          <p v-if="langue != 'fon'">{{ rooms.content }}</p>
          <p v-else>{{ rooms.content_fon }}</p>
        </div>


      </div>



      <div
        class="sticky flex w-full  flex-col gap-2 bg-white py-3  w-full items-center border-none  justify-end  bottom-0">
        <audio controls class="w-full">
          <source :src="audio" type="audio/mpeg">

          Your browser does not support the audio element.
        </audio>
        <NavigationButton :handle-click="handleClick" title="Reserver" />



      </div>


    </div>

  </div>



</template>
