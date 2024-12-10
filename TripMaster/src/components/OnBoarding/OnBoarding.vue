<script setup lang="ts">
import NavigationButton from '../Buttons/NavigationButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface Props {
  title: string;
  hotelId: number;
  image: string;
  price: number;
  location: string;

}
defineProps<Props>();

const handleClick = () => {
  console.log("view hotel")
  router.push("/onboard2")
}

</script>
<template>

 <div>
  <img src="" alt="">
  <div>

  </div>
  <div>
    <NavigationButton title="next" :handle-click="handleClick" ></NavigationButton>
  </div>
 </div>

</template>

<style scoped></style>
