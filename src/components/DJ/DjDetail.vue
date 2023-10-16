<template>
  <div class="col-md-4 offset-md-4" @submit.prevent="update()">
    <form class="card card-body" >
      <h1 class="card-title my-3 text-center">Update a Dj</h1>

      <input type="text" v-model="$route.params.nombre" class="form-control mb-3"/>
      <input type="text" v-model="$route.params.instagram" class="form-control mb-3" />
      <input type="number" v-model="$route.params.tel" class="form-control mb-3" />
      <button class="btn btn-primary">Update</button>
    </form>
    <button @click="djDelete()" class="btn btn-danger my-4">delete</button>
  </div>
</template>


  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { Dj } from '@/interface/dj';
  import { deleteDj, updateDj} from '@/services/DjService';
  //import axios from '@/services/axios'
  
  export default defineComponent({
    data(){
      return{
        model:{
          dj:{
            nombre:'',
            instagram:'',
            tel:''
          }
        },
        djj: {} as Dj
      }
    },
    methods:{
      // async getOne(id:string) {
      //   axios.get('/djs/'+ id)
      //   .then(res=>{
      //     console.log(res.data.djj);
      //     this.djj= res.data.djj
      //   })
      // } 
      async update(){
        console.log(typeof this.$route.params._id)
        console.log(typeof this.$route.params.nombre)
        console.log(typeof this.$route.params.instagram)
        console.log(typeof this.$route.params.tel)
        if(typeof this.$route.params.id === "string" && typeof this.$route.params.nombre === "string" && typeof this.$route.params.instagram === "string" && typeof this.$route.params.tel === "number"){
        this.djj = {_id:this.$route.params.id,
          nombre:this.$route.params.nombre,
          instagram:this.$route.params.instagram,
          tel:this.$route.params.tel,}
        const res = await updateDj(this.$route.params.id,this.djj)
        console.log(res)
        this.$router.push('/djs')
        }
        //this.$router.push({name:'djs'}) 
      },
      async djDelete(){
        if(typeof this.$route.params.id === "string"){
          await deleteDj(this.$route.params.id)
          this.$router.push('/djs')
        }
      }
    },
    mounted(){
      if(typeof this.$route.params.id === "string"){
        console.log(this.$route.params.id)
        //this.getOne(this.$route.params.id);
      }
    }
  })
  </script>
  