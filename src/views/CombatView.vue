<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
import { useTeamStore } from '@/stores/team'

const store = useTeamStore()
</script>

<template>
  <BaseLayout>
    <h1>Combat view</h1>

    <div>
      <h1>Team 1:</h1>

      <ul>
        <li v-for="pokemon in store.team_1" :key="pokemon.id">
          {{ pokemon.name }}
        </li>
      </ul>
    </div>

    <div>
      <h1>Team 2:</h1>

      <ul>
        <li v-for="pokemon in store.team_2" :key="pokemon.id">
          {{ pokemon.name }}
        </li>
      </ul>
    </div>

    <RouterLink to="/">
      <button
        id="btnStartCombat"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
      >
        Volver
      </button>
    </RouterLink>
  </BaseLayout>
</template>
