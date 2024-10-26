<script setup lang="ts">
import { defineProps, ref } from 'vue'
import PokemonStats from './PokemonStats.vue'
import { useTeamStore } from '@/stores/team'
import type { Pokemon } from '@/types/'

const props = defineProps({
  teamNum: {
    type: String,
    required: true,
  },
})

const store = useTeamStore()
const team = ref<Pokemon[]>(props.teamNum === '1' ? store.team_1 : store.team_2)
</script>

<template>
  <div class="flex flex-col gap-y-2 mt-2">
    <div v-for="(pokemon, index) in team" :key="index">
      <div v-if="props.teamNum === '1'">
        <PokemonStats
          :pokemon="pokemon"
          :teamNum="teamNum"
          :stats="store.getTeamStats1[index]"
        />
      </div>

      <div v-else>
        <PokemonStats
          :pokemon="pokemon"
          :teamNum="teamNum"
          :stats="store.getTeamStats2[index]"
        />
      </div>
    </div>
  </div>
</template>
