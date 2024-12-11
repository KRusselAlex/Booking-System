<template>
  <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
    <!-- Audio Element (Hidden Controls) -->
    <audio ref="audioPlayer" :src="audioSrc" class="hidden"></audio>

    <!-- Title -->
    <h2 class="text-lg font-semibold text-gray-800 mb-4">Audio Player</h2>

    <!-- Custom Controls -->
    <div class="flex items-center justify-center gap-4">
      <!-- Play Button -->
      <button
        @click="playAudio"
        class="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow hover:bg-green-600">
        ▶
      </button>

      <!-- Pause Button -->
      <button
        @click="pauseAudio"
        class="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center shadow hover:bg-red-600">
        ❚❚
      </button>

      <!-- Progress Bar -->
      <input
        type="range"
        v-model="progress"
        @input="seekAudio"
        class="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-green-500"
        :max="duration"
      />
    </div>

    <!-- Audio Time -->
    <div class="mt-2 text-gray-600 text-sm">
      <span>{{ formatTime(currentTime) }}</span> / <span>{{ formatTime(duration) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
interface Props {
  audio: string;

}

const props = defineProps<Props>();

// Audio file source
const audioSrc = ref(props.audio);

// Audio player controls
const audioPlayer = ref<HTMLAudioElement | null>(null);
const progress = ref(0);
const currentTime = ref(0);
const duration = ref(0);

const playAudio = () => {
  if (audioPlayer.value) audioPlayer.value.play();
};

const pauseAudio = () => {
  if (audioPlayer.value) audioPlayer.value.pause();
};

const seekAudio = () => {
  if (audioPlayer.value) audioPlayer.value.currentTime = progress.value;
};

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

// Sync progress and time
watch(audioPlayer, (player) => {
  if (player) {
    player.addEventListener('timeupdate', () => {
      currentTime.value = player.currentTime;
      progress.value = player.currentTime;
    });
    player.addEventListener('loadedmetadata', () => {
      duration.value = player.duration;
    });
  }
});
</script>

<style scoped>
/* Add additional styling as needed */
</style>
