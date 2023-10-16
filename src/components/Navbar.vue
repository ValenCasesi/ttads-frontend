<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link class="navbar-brand" to="/">boliche app</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item text-white">
              <router-link class="nav-link" to="/">Listado DJ's</router-link>
            </li>
            <li class="nav-item text-white">
              <router-link class="nav-link" to="/djs/new">New Dj</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>

<script lang="ts">
import { defineComponent } from "vue";
//La etiqueta router-link permite que no se recargue la pagina cuando tocas en los links
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
});
</script>