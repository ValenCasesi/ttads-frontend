<template>
<div class="col-md-4 offset-4">
    <div class="card card-body">
      <h1 class="card-title my-3 text-center">Create a DJ</h1>
      <form @submit.prevent="saveDj()">
        <input class="form-control mb-3" type="text" placeholder="Ingrese nombre" v-model="dj.nombre" autofocus>
        <input class="form-control mb-3" type="text" placeholder="Ingrese instagram" v-model="dj.instagram">
        <input class="form-control mb-3" type="text" placeholder="Ingrese telefono" v-model="dj.tel"> 
        <button class="btn btn-primary w-100" :disabled="!dj.nombre || !dj.instagram || !dj.tel">Save</button>
      </form> 
    </div>
</div>     
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {Dj} from '@/interface/dj'
import {createDj} from '@/services/DjService'

export default defineComponent({
    data(){
        return {
            dj: {} as Dj
        }
    },
    methods:{
        async saveDj(){
            const res = await createDj(this.dj)
            console.log(res)
            this.$router.push({name:'djs'}) 
            //el push redirecciona a la url djs.
            // despues de hacer el add te manda al listado directo.
        },
    }
})
</script>