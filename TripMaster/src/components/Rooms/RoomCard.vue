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
  size: string;

}
defineProps<Props>();

const handleClick = () => {
  console.log("view hotel")
  router.push("/payement")
}

</script>
<template>

  <RouterLink to="/detailsrooms/2" class="relative bg-white flex flex-col gap-2  h-68 w-full rounded-xl">

    <div class="flex flex-col px-4 py-3 gap-4">
      <div class="flex justify-between gap-y-2 ">
        <div class="flex flex-col gap-y-2">
          <h1 class="font-medium text-xl">{{ title }}</h1>
          <div class="flex gap-x-2 items-center">
            <p class="">
              Room size:
            </p>
            <p v-if="size" class="">{{ size }}</p>
            <p v-else> 12km</p>
          </div>

        </div>


          <div class="h-12 ">
            <img :src="image" alt="" class="bg-cover h-full bg-center rounded-lg">
          </div>

      </div>
      <div class="flex justify-between items-center">

        <p v-if="price" class="text-primary font-medium italic text-xl" >{{ price }} FCFA</p>
        <p v-else class="text-primary font-medium italic text-xl" > 20,0000 FCFA</p>
        <div>
          <NavigationButton title="Choose" :handle-click="handleClick" />

        </div>

      </div>
    </div>

  </RouterLink>


</template>

<style scoped></style>
