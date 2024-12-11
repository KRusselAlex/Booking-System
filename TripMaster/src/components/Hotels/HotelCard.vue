<script setup lang="ts">
import NavigationButton from '../Buttons/NavigationButton.vue';
import { useRouter } from 'vue-router';

// Get the router instance
const router = useRouter();

interface Props {
  title: string;
  hotelId: number;
  image: string;
  price: number;
  location: string;
  title_fon:string;

}
defineProps<Props>();

const handleClick = () => {
  console.log("view hotel")
  router.push(`/rooms`)
}

</script>
<template>

  <RouterLink :to="`/details/${hotelId}`" class="relative bg-white flex flex-col gap-2 h-68 w-full rounded-xl">
    <div class="h-28 rounded-tl-xl bg-cover">
      <img :src="image" alt="" class="bg-cover h-full bg-center  rounded-tl-xl rounded-br-lg w-full">
    </div>
    <div class="flex flex-col px-4 py-3 gap-4">
      <div class="flex flex-col gap-y-2 ">
        <div class="flex gap-x-2 items-center flex-wrap">
          <h1 class="font-medium text-xl">{{ title.length > 30 ? title.slice(0,30) + "..." : title }}</h1>
        <h6 class="font-medium text-sm italic"> ({{ title_fon.length > 30 ? title_fon.slice(0,30) + "..." : title_fon }} )</h6>
        </div>

        <div class="flex justify-between">
          <div class="flex gap-x-2 items-center">
          <span>
            <slot></slot>
          </span>

          <p v-if="location">{{ location }}</p>
          <p v-else> Cotonou</p>
        </div>

          <p class="text-primary font-medium italic text-xl">{{ price }} FCFA</p>

        </div>


      </div>
      <div class="flex justify-between items-center">
       <p>20m2</p>

        <div>
          <NavigationButton title="Prendre Une Chambre" :handle-click="handleClick" />

        </div>

      </div>
    </div>

  </RouterLink>


</template>

<style scoped></style>
