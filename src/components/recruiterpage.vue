<template>
  <q-page class="q-pa-md">

   <div class="text-center">
    <q-btn label="Add New Job" color="primary" @click="adddialog = true" />
   </div>

       <q-dialog v-model="adddialog">
      <q-card  style="width: 600px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Add jobs</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-form class="login" @submit.prevent="addjob">
       
        <div  class="q-py-md">Job Title:</div>
 <q-input 
        filled
        type="text"
        v-model="JobTitle"
        lazy-rules
       :rules="[val => !!val || 'Job Title is missing']"
      />

      <div  class="q-py-md">Experience:(in years)</div>
 <q-input 
        filled
        type="text"
        v-model="Experience"
        lazy-rules
       :rules="[val => !!val || 'Experience is missing']"
      />

      <div  class="q-py-md">Vacancy:(in years)</div>
 <q-input 
        filled
        type="text"
        v-model="Vacancy"
        lazy-rules
       :rules="[val => !!val || 'Vacancy is missing']"
      />

      <div  class="q-py-md">Description:</div>
 <q-input 
        filled
        type="textarea"
        v-model="Description"
        lazy-rules
       :rules="[val => !!val || 'Description is missing']"
      />
<div class="text-center q-py-md ">
         <q-btn label="Add" type="submit" color="primary"/>    
    </div>

   </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

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
        <q-btn color="blue-grey-6" @click="updatejobform(jobs.id)" glossy >Update</q-btn>
        <q-btn  color="red" @click="deletejob(jobs.id)" glossy >Delete</q-btn>
      </q-card-actions>
   
      
    </q-card>
        </div>
      </div>

       <q-dialog v-model="updatedialog">
      <q-card  style="width: 600px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Add jobs</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-form class="login" @submit.prevent="updatejob(id)">
       
        <div  class="q-py-md">Job Title:</div>
 <q-input 
        filled
        type="text"
        v-model="JobTitle"
        lazy-rules
       :rules="[val => !!val || 'Job Title is missing']"
      />

      <div  class="q-py-md">Experience:(in years)</div>
 <q-input 
        filled
        type="text"
        v-model="Experience"
      
        lazy-rules
       :rules="[val => !!val || 'Experience is missing']"
      />

      <div  class="q-py-md">Vacancy:(in years)</div>
 <q-input 
        filled
        type="text"
        v-model="Vacancy"
       
        lazy-rules
       :rules="[val => !!val || 'Vacancy is missing']"
      />

      <div  class="q-py-md">Description:</div>
 <q-input 
        filled
        type="textarea"
        v-model="Description"
        lazy-rules
       :rules="[val => !!val || 'Description is missing']"
      />
<div class="text-center q-py-md ">
         <q-btn label="Update" type="submit" color="primary"/>    
    </div>

   </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

  
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'recruiterpage',
   data () {
    return {
        id:"",
        adddialog:false,
        updatedialog:false,
        JobTitle:"",
        Experience:"",
        Vacancy:"",
        Description:''

    }
    },
    methods: {
       addjob: function () {

          
         let data={
        "job_title": this.JobTitle,
         "vacancy": this.Experience,
          "exp_needed": this.Vacancy,
           "description": this.Description
       
         }
          console.log(data)
         
    this.$store.dispatch('addjobs', data)
       
      },

      updatejobform(id){
       
let jobdetail=this.$store.getters.getjobbyId(id)

console.log(jobdetail)
jobdetail.forEach(element => {
  console.log(element.job_title)
  this.id=element.id
  this.JobTitle=element.job_title
       this.Experience=element.exp_needed
       this.Vacancy=element.vacancy
        this.Description=element.description
});
     
 this.updatedialog=true 
 


      },

updatejob(id){
console.log(id)
let data={
        "job_title": this.JobTitle,
         "vacancy": this.Experience,
          "exp_needed": this.Vacancy,
           "description": this.Description
         }
        this.$store.dispatch('updatejob', {id,data}) 
},
      deletejob(id){
         this.$store.dispatch('deletejob', id)  

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
