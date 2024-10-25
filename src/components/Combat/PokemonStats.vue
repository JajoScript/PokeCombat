<script setup lang="ts">
import { defineProps } from 'vue'
import type { Pokemon } from '@/types'

defineProps<{
  teamNum: string
  pokemon: Pokemon
}>()
</script>

<template>
  <div
    :class="`stats_container stats_container_${teamNum} rounded-sm px-10 py-2 flex flex-col items-center `"
  >
    <p class="text-xs">{{ pokemon.name }}</p>

    <div
      class="bg-slate-900/50 flex flex-row items-center gap-x-2 px-2 py-0.5 rounded-full w-[200px]"
    >
      <p class="font-extrabold text-yellow-300">HP</p>

      <div class="w-full bg-slate-900 rounded-full h-1">
        <div
          :class="`bg-green-600 h-1 rounded-full`"
          :style="`width: ${100}%`"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats_container_1 {
  @apply bg-[url('@/assets/sprite_stats_team_1.webp')] bg-cover bg-center;
}

.stats_container_2 {
  @apply bg-[url('@/assets/sprite_stats_team_2.webp')] bg-cover bg-center;
}
</style>
