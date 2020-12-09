<template>
  <q-page class="q-pa-md">
  <div class="row" v-if="joblist">
       
        
     
        <div class="col-xs-12 col-sm-6 col-lg-3 col-md-3 q-ma-md" v-for="jobs in joblist " :key="jobs.id">
            <q-card class="no-padding my-card q-mx-xs q-ma-md  ">
       
          <q-card-section class="">
        <div class="text-h6 text-red-10">{{jobs.job_title}}</div>
        <div class=""><span class="text-subtitle2 text-orange">Experience needed :</span> {{jobs.exp_needed}} yrs</div>
        <div class="text-subtitle2"><span class="text-subtitle2 text-orange">Vacancy :</span> {{jobs.vacancy}} yrs</div>
      </q-card-section>

      <q-card-section>
          <p class="text-subtitle2 text-orange">
              Description:
          </p>
       {{jobs.description}}
      </q-card-section>

      <q-separator dark />

      <q-card-actions >
        <q-btn color="green" @click="apply(jobs.id,jobs.job_title)" glossy >Apply</q-btn>
        
      </q-card-actions>
   
      
    </q-card>
        </div>
      </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'joblist',
    data () {
    return {
    }
    },
    methods:{
      
apply(id,job){
  let canditate= this.$store.getters.getcanditatedetails
  let details = canditate[0]
 let canditatedetails={
   "first_name":details.first_name,
   "last_name":details.last_name,

 }
 console.log(canditate[0])
        this.$q.notify({
          position: 'center',
        message: 'job applied for'+" "+job+" "+"position",
        color: 'green'
      })

       this.$store.dispatch('applyjobs', {id,canditatedetails}) 
}
    },

    computed:{
        joblist(){
          return this.$store.getters.getjoblist
        }
    },
    created(){  
          this.$store.dispatch("fetchjoblist")
        },
}
</script>
