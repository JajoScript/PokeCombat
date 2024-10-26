<script setup lang="ts">
import { onMounted } from 'vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import CombatBoard from '@/components/Combat/CombatBoard.vue'
import CombatLog from '@/components/Combat/CombatLog.vue'
import { useTeamStore } from '@/stores/team'
import router from '@/router/'

const store = useTeamStore()

onMounted(() => {
  if (store.getTeam1.length === 0 || store.getTeam2.length === 0) {
    // Redirect to TeamsView
    router.push('/')
  }
})
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
