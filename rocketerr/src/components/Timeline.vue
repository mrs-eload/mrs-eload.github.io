<template>
  <button class="btn btn-default absolute" @click="onEditClick">
    Edit
  </button>
  <div id="follower">
    <slot name="follower"></slot>
  </div>
  <div id="follower-path">
    <slot name="follower-path"></slot>
  </div>
</template>

<style lang="scss">
@import "@/assets/timeline";
</style>

<script setup lang="ts">
import { onMounted } from "vue";
import { Rocket } from "@/components/icons/Rocket";
import type { Coordinates } from "@/components/icons/Rocket";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import MotionPathHelper from "gsap/MotionPathHelper";
import { gsap } from "gsap";

function edit_path() {

  MotionPathHelper.create("#rocketgroup");
}

function onEditClick() {
  edit_path();
}

onMounted(() => {
  gsap.to("#rocketgroup", {
    duration: 8,
    ease: "power1.inOut",
    immediateRender: true,
    motionPath: {
      path: "#rocket_path",
      align: "#rocket_path",
      alignOrigin: [0.5, 0.5],
      autoRotate: 90,
    },
    repeat: -1
  });
  // const rocket = new Rocket();
  // const target: Coordinates = {x:0, y:0};
  //
  // gsap.ticker.add(() => {
  //   rocket.setPosition(target)
  //   rocket.render(target);
  // });

})
</script>