<script setup lang="ts">
import { defineProps } from 'vue'
import type { Pokemon } from '@/types/Pokemon'
import TeamArena from './TeamArena.vue'
import TeamStats from './TeamStats.vue'

defineProps({
  teamNum: {
    type: String,
    required: true,
  },

  team: {
    type: Array as () => Pokemon[],
    required: true,
    default: () => [],
  },
})
</script>

<template>
  <div
    :class="`flex flex-row justify-between bg-green-100 mx-2 rounded-md gap-x-8 teamDisplay_${teamNum} relative`"
  >
    <h2 :class="`teamDisplay_title_${teamNum}`">Equipo {{ teamNum }}</h2>
    <TeamStats :teamNum="teamNum" />
    <TeamArena :teamNum="teamNum" class="grow" />
  </div>
</template>

<style scope>
.teamDisplay_1 {
  @apply border-4 border-red-500;
}

.teamDisplay_title_1 {
  @apply bg-red-500 text-white px-2 py-1 rounded-md text-xs;
  @apply absolute -top-[5%] right-[20%];
}

.teamDisplay_2 {
  @apply border-4 border-blue-500;
}

.teamDisplay_title_2 {
  @apply bg-blue-500 text-white px-2 py-1 rounded-md text-xs;
  @apply absolute -top-[5%] left-[20%];
}
</style>
