<script setup lang="ts">
import TeamDisplay from './TeamDisplay.vue'
import { useTeamStore } from '@/stores/team'

const store = useTeamStore()
</script>

<template>
  <section class="flex flex-col gap-y-4">
    <!-- TEAM 1 Display -->
    <TeamDisplay :teamNum="'1'" :team="store.team_1" />

    <!-- TEAM 2 Display -->
    <TeamDisplay :teamNum="'2'" :team="store.team_1" />

    <!-- Boton de acción -->
    <div class="flex justify-end items-center gap-x-4">
      <h3>Turno: 0</h3>

      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
      >
        Siguiente turno
      </button>
    </div>
  </section>
</template>
