<script setup lang="ts">
import { defineProps, ref } from 'vue'
import PokemonCard from './PokemonCard.vue'
import { useTeamStore } from '@/stores/team'
import type { Pokemon } from '@/types/Pokemon'

const props = defineProps({
  teamNum: {
    type: String,
    required: true,
  },
})

const store = useTeamStore()
const team = ref<Pokemon[]>(
  props.teamNum === '1' ? store.getTeam1 : store.getTeam2,
)

// *-- 1. Manejo del estado.
// *-- 2. Ciclo de vida.
// *-- 3. Metodos.
</script>

<template>
  <div :class="`container_arena arena_${teamNum}`">
    <div class="flex flex-row items-center justify-center h-full gap-x-2">
      <div v-for="(pokemon, index) in team" :key="index">
        <PokemonCard :pokemon="pokemon" :teamNum="teamNum" :index="index" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container_arena {
  @apply min-w-[350px] min-h-[250px] bg-cover bg-center;
  @apply bg-[url('@/assets/sprite_grass.webp')];
}

.arena_2 {
  @apply order-first;
}
</style>
