<script setup lang="ts">
import { defineProps } from 'vue'
import type { Pokemon } from '@/types'
import MemberInfo from './MemberInfo.vue'

defineProps({
  teamNum: {
    type: String,
    required: true,
    default: '0',
  },
  team: {
    type: Array as () => Pokemon[],
    required: true,
    default: () => [],
  },
})

// -- * 1. Estado del componente.
// -- * 2. Ciclo de vida.
// -- * 3. Metodos.
</script>

<template>
  <div :class="`team_container team_${teamNum}`">
    <!-- Pokemon icon -->
    <img src="@/assets/pokeball.svg" loading="lazy" class="icon" />

    <!-- Equipo pokemon -->
    <div class="flex flex-col items-start">
      <h2 class="team_title">Equipo {{ teamNum }}</h2>

      <div class="pokemon_group">
        <div v-for="pokemon in team" :key="pokemon.id">
          <MemberInfo :pokemon="pokemon" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team_container {
  @apply min-w-[700px] min-h-[200px] p-4;
  @apply flex flex-row gap-x-2 items-center justify-center;
  @apply rounded-l-full rounded-md;
  @apply mb-4;
  @apply relative;
}

.team_1 {
  @apply bg-white;
  @apply border-4 border-red-500/90;
}

.team_2 {
  @apply bg-white;
  @apply border-4 border-blue-500;
}

.team_title {
  @apply text-base text-slate-950 font-bold;
  @apply mb-4;
}

.icon {
  @apply absolute -left-[45px];
  @apply size-28 p-4;
  @apply bg-slate-900;
  @apply flex-1 flex justify-center items-center;
  @apply rounded-full;
}

.pokemon_group {
  @apply flex-auto;
  @apply w-full;
  /* @apply border border-gray-500; */
  @apply flex flex-row gap-x-6 justify-center;
}
</style>
