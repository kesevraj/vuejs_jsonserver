<template>
   <q-page class="q-pa-md"><div class="text-center  q-ma-md">
   <p>if you are a Recruiter please click the login button to login </p>
   <q-btn label="Recruiter Login"  color="primary" to="/recruiterlogin"/>
   </div>
   <div class="text-center q-ma-md">
   <p>if you are a Canditate please click the login button to login as a Canditate to apply jobs </p>
   <q-btn label=" Canditate Login"  color="primary" to="/canditatelogin" />
   </div>
   </q-page>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
