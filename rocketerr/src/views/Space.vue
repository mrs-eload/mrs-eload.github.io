<script setup lang="ts">
import Timeline from "@/components/Timeline.vue";
import Rocket from "@/components/icons/Rocket.vue";
import RocketPath from "@/components/icons/RocketPath.vue";
</script>

<template>
  <div class="space">
    <Timeline>
      <template #follower>
        <Rocket />
      </template>
      <template #follower-path>
        <RocketPath />
      </template>
    </Timeline>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
  </div>
</template>

<style lang="scss">
@import "@/assets/space";
</style>
<script>
</script>