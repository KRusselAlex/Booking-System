<script setup lang="ts">
import SearchList from '@/components/Hotels/SearchList.vue';
import AppHeader from '@/components/Navbars/AppHeader.vue';
import FooterNavbar from '@/components/Navbars/FooterNavbar.vue';




</script>

<template>
  <main class="relative flex flex-col justify-between bg-secondary h-full min-h-screen w-full">
    <AppHeader title="Searchs" :add-right-button=false />
    <div class="flex flex-col gap-8  mx-4 mt-5">
      <SearchList />
    </div>
    <div class="sticky bottom-0 w-full">
      <FooterNavbar />
    </div>

  </main>
</template>
