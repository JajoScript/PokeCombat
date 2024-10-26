<script setup lang="ts">
import { defineProps } from 'vue'
import type { Pokemon, PokeStats } from '@/types'

defineProps<{
  teamNum: string
  pokemon: Pokemon
  stats: PokeStats | undefined
}>()
</script>

<template>
  <div
    :class="`stats_container stats_container_${teamNum} rounded-md min-w-[250px] py-2 flex flex-col`"
  >
    <p class="text-[0.5rem]">{{ pokemon.name }}</p>

    <div
      class="bg-slate-900/50 flex flex-row items-center gap-x-2 px-2 py-0.5 rounded-full min-w-[200px]"
    >
      <p class="font-extrabold text-yellow-300 text-[0.5rem]">HP</p>

      <div class="w-full bg-slate-900 rounded-full h-1">
        <div v-if="(stats?.hp ?? 1) <= 0"></div>

        <div v-else>
          <div
            :class="`bg-green-600 h-1 rounded-full`"
            :style="`width: ${((stats?.hp ?? 1) / (stats?.hpMax ?? 1)) * 100}%`"
          ></div>
        </div>
      </div>

      <p class="text-[0.5rem] text-nowrap">
        {{ stats?.hp ?? '0' }} / {{ stats?.hpMax ?? '0' }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.stats_container_1 {
  @apply bg-gray-500/40;
  @apply border-b-2 border-slate-800/80;
  @apply shadow-md;
  @apply items-start px-2 ml-2;
}

.stats_container_2 {
  @apply bg-gray-500/40;
  @apply border-b-2 border-slate-800/60;
  @apply shadow-md;
  @apply items-end px-2 mr-2;
}
</style>
