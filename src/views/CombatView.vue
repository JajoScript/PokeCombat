<script setup lang="ts">
import { onMounted } from 'vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import CombatBoard from '@/components/Combat/CombatBoard.vue'
import CombatLog from '@/components/Combat/CombatLog.vue'
import { useTeamStore } from '@/stores/team'
import type { Pokemon, PokeStats } from '@/types/'
import router from '@/router/'

const teamStore = useTeamStore()

onMounted(() => {
  if (teamStore.getTeam1.length === 0 || teamStore.getTeam2.length === 0) {
    // Redirect to TeamsView
    router.push('/')
    return
  }

  loadStatsByTeam(teamStore.getTeam1, '1')
  loadStatsByTeam(teamStore.getTeam2, '2')
})

function loadStatsByTeam(team: Pokemon[], teamId: string): void {
  const teamStats: PokeStats[] = []

  team.forEach((poke: Pokemon) => {
    const stats: PokeStats = {
      pokemonId: poke.id,
      hp: poke.stats[0].base_stat,
      hpMax: poke.stats[0].base_stat,
      attack: poke.stats[1].base_stat,
      specialAttack: poke.stats[3].base_stat,
      teamId: teamId,
    }

    teamStats.push(stats)
  })

  if (teamId === '1') teamStore.setTeamStats1(teamStats)
  else teamStore.setTeamStats2(teamStats)
}
</script>

<template>
  <BaseLayout>
    <main class="flex flex-col items-center justify-start mt-8 w-full h-svh">
      <section class="flex flex-row gap-x-4">
        <CombatBoard />
        <CombatLog />
      </section>
    </main>
  </BaseLayout>
</template>
