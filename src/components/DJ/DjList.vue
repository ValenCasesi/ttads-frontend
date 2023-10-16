<template>
    <div class="container p-5">
      <ul class="list-group">
        <li class="list-group-item list-group-item-action p-4"
            style="cursor: pointer" 
            v-for="dj in djs" :key="dj._id" @click="$router.push(`/djs/${dj._id}/${dj.nombre}/${dj.instagram}/${dj.tel}`)">
            
          {{ dj._id }} - {{ dj.nombre }} - {{ dj.instagram }} - {{ dj.tel }}
        
        </li>
      </ul>
    </div>
</template>
  

<script lang="ts">
import { defineComponent } from 'vue';
import { Dj } from '@/interface/dj';
import {findAll} from '@/services/DjService';


export default defineComponent({
  data() {
    return {
      djs: [] as Dj[]
    };
  },
  methods: {
    async getAllDjs() {
      this.djs = await findAll();
      console.log(this.djs)
    }
  },
  mounted() {
    this.getAllDjs();
  }
});
</script>