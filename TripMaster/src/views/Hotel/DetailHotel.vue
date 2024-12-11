<script setup lang="ts">
import imageTest from '@/assets/download.jpeg'
import NavigationButton from '@/components/Buttons/NavigationButton.vue';
import { useRoute, useRouter } from 'vue-router';
import { useHotelStore } from '@/stores/hotelStore';
import { ref } from 'vue';

const hotelStore = useHotelStore();
const langue = ref("fr")
const router = useRouter();
const route = useRoute();

const hotel = hotelStore.getOneCourse(route.params.id)
const handleClick = () => {
  router.push("/rooms")
}

console.log(hotel);

// Define the goBack function
function goBack() {
  router.go(-1); // Navigate to the previous page
}

</script>

<template>

  <div class="grid grid-rows-[1fr_3fr] h-screen relative  w-full ">

    <div class=" h-48 rounded-b-3xl" :style="`background-image: url('${imageTest}');`">
      <div class="flex justify-start p-4">
        <span class="rounded-full p-2 bg-white" @click="goBack()">
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#000000" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>

        </span>

      </div>

    </div>


    <div class=" w-full rounded-t-3xl  h-full  bg-white py-5 flex flex-col justify-between gap-4 overflow-y ">
      <div class="flex flex-col gap-4">
        <div class="flex px-4 gap-1 items-center flex-wrap justify-start ">

          <h1 class="font-bold text-2xl">{{ hotel.titre }}</h1>
          <h6 class="italic text-sm text-gray-500"> ( {{ hotel.titre_fon }} ) </h6>


        </div>
        <div class="flex items-center px-4  justify-between gap-x-3" v-if="!hotel.town">
          <p> Cotonou, Benin</p>
          <p class="text-primary font-medium italic text-xl">{{ hotel.price }} FCFA</p>



        </div>

        <div v-else>
          <div class="flex px-4 items-center justify-between gap-x-3">
            <p>
              {{ hotel.town }}
            </p>
            <p>,
              {{ hotel.country }}

            </p>



          </div>
          <p class="text-primary font-medium italic text-xl">{{ hotel.price }} FCFA</p>


        </div>

        <div class="flex flex-col px-4 ">
          <div class="flex items-center justify-between mb-3">
            <h2 class="text-xl font-bold">
              Information
            </h2>
            <select v-model="langue" class="w-28 py-2 flex justify-center text-center rounded-full border-none outline-none bg-primary text-white ">
              <option value="fr" class="rounded-lg">
                Francais
              </option>
              <option value="fon" class="rounded-lg">
                Fon
              </option>
            </select>

          </div>

          <p v-if="langue != 'fon'">{{ hotel.description }}</p>
          <p v-else>{{ hotel.description_fon }}</p>
        </div>


      </div>





      <div
        class="sticky bottom-0 flex w-full  flex-col gap-2 bg-white py-3 px-3 w-full items-center border-none  justify-end  bottom-0">
        <NavigationButton :handle-click="handleClick" title="Chambre" />

      </div>


    </div>

  </div>




</template>
