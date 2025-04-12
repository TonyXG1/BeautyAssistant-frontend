<template>
  <!-- <BaseHeader></BaseHeader>
  <LoginPage></LoginPage>
  <RegisterPage></RegisterPage>
  <Dashboard></Dashboard> -->
  <BaseHeader />
  <RouterView></RouterView>
</template>

<script setup>
import BaseHeader from "./components/BaseHeader.vue";
import { RouterView } from "vue-router";
import { provide, reactive } from "vue";
import { state } from "./state.js";
// const state = reactive({
//   isLoggedIn: false,
//   userData: null
// });
provide("state", state);
</script>

<style scoped></style>
