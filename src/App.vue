<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <RouterView />
</template>
<style>
@import '@/assets/base.css';
</style>
<script lang="ts">
import MotionPathPlugin from "gsap/MotionPathPlugin";
import MotionPathHelper from "gsap/MotionPathHelper";
import { gsap } from "gsap";
gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);
</script>