<template>

  <form class="grid bg-white " @submit.prevent.stop>
    <div class="grid grid-cols-1  md:mx-7 mb-2">
      <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Titre
        Chapitre</label>
      <span v-show="errors['titre'] !== ''" class="text-red-500 text-xs italic">
        {{ errors["titre"] }}
      </span>
      <input v-model="form.title"
        class="w-full py-2 rounded-full border-2 border-gray-300  text-[#065e86] focus:shadow-xl focus:border-[#0193D2] outline-none pl-3 mt-2"
        type="text" placeholder="Titre du chapitre">
    </div>
    <div class="grid grid-cols-1  md:mx-7 mb-2">
      <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">country
       </label>
      <span v-show="errors['titre'] !== ''" class="text-red-500 text-xs italic">
        {{ errors["titre"] }}
      </span>
      <input v-model="form.country"
        class="w-full py-2 rounded-full border-2 border-gray-300  text-[#065e86] focus:shadow-xl focus:border-[#0193D2] outline-none pl-3 mt-2"
        type="text" placeholder="Titre du chapitre">
    </div>
    <div class="grid grid-cols-1  md:mx-7 mb-2">
      <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">town
       </label>
      <span v-show="errors['titre'] !== ''" class="text-red-500 text-xs italic">
        {{ errors["titre"] }}
      </span>
      <input v-model="form.town"
        class="w-full py-2 rounded-full border-2 border-gray-300  text-[#065e86] focus:shadow-xl focus:border-[#0193D2] outline-none pl-3 mt-2"
        type="text" placeholder="Titre du chapitre">
    </div>
    <div v-if="imageSrc">
      <img :src="imageSrc" alt="preview" class="w-20 mx-10 my-3">
    </div>

    <div class="grid grid-cols-1 mt-5 md:mx-7">
      <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload
        Photo</label>
      <span v-show="errors['image'] !== ''" class="text-red-500 text-xs italic">
        {{ errors["image"] }}
      </span>
      <div class="flex items-center justify-center w-full">
        <label class="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-gray-200 group">
          <div class="flex flex-col items-center justify-center pt-7">
            <svg class="w-10 h-10 text-gray-400 group-hover:text-black" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p class="lowercase text-sm text-gray-400 group-hover:text-black pt-1 tracking-wider">
              Select a photo
            </p>
          </div>
          <input type="file" class="hidden" accept="image/*" @change="(event) => handelFileUpload(event)">

        </label>
      </div>
    </div>


    <div class="grid grid-cols-1 mt-5 md:mx-7">
      <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Content</label>
      <span v-show="errors['description'] !== ''" class="text-red-500 text-xs italic">
        {{ errors["description"] }}
      </span>
      <textarea v-model="form.content"
        class="w-full py-2 rounded-lg border-2 border-gray-300 h-96  text-[#065e86] focus:shadow-xl focus:border-[#0193D2] outline-none pl-3 mt-2"
        type="text" placeholder="Content" />
    </div>




    <div class="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
      <button class="w-auto bg-gray-500 hover:bg-red-600 rounded-full shadow-xl font-medium text-white px-4 py-2">
        Cancel
      </button>
      <button type="submit"
        class="w-auto bg-green-500 hover:bg-black-600 rounded-full shadow-xl font-medium text-white px-4 py-2"
        @click="handleSubmit">
        Ajouter
      </button>
    </div>
  </form>

</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { ref } from "vue";
import { createcourse } from '@/api/hotelApi.js';


const videoSrc = ref('');

const errors = ref([])
const imageSrc = ref('');
const country = ref("")
const town = ref("")


const handelFileUpload = (e) => {
  const fileReader = new FileReader()
  const files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;


  fileReader.readAsDataURL(e.target.files[0])
  fileReader.addEventListener('load', () => {
    imageSrc.value = fileReader.result;
  })
  console.log("image uploaded", e.target.files[0]);

  form.imageCourse = e.target.files[0]

  console.log("files already uploaded", imageSrc.value);
};

const handelVideoUpload = (e) => {
  const fileReader = new FileReader()
  const files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;

  fileReader.readAsDataURL(e.target.files[0])
  fileReader.addEventListener('load', () => {
    videoSrc.value = fileReader.result;
    console.log("files already uploaded", videoSrc.value);
  })
  console.log("video uploaded", e.target.files[0]);

  form.video = e.target.files[0]


};


const form = reactive({
  country: '',
  town: '',
  content: '',
  imageCourse: '',
  video: '',
  title: ''
});


const handleSubmit = async () => {


  const response = await createcourse(

    form.title,
    form.content,
    form.video,
    form.imageCourse,
    form.country,
    form.town,

  )

  console.log(response);


}

</script>

<style></style>
