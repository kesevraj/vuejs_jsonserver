<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
       <div class="col-xs-12 col-sm-6 col-lg-3 col-md-3 q-ma-md">
   <q-form class="login" @submit.prevent="login"> 

        <div  class="q-py-md">UserName:</div>
 <q-input
       
        filled
        type="email"
        v-model="username"
        lazy-rules
       :rules="[val => !!val || 'Email is missing', isValidEmail]"
      />

  <div  class="q-py-md">Password:</div>
 <q-input   filled :type="isPwd ? 'password' : 'text'" v-model="Password"   
    lazy-rules
       :rules="[val => val.length>7 || 'password must  be minimum 8 character']"
      ><template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template></q-input>
       
      
    <div class="text-center q-pb-md ">
         <q-btn label="Login" type="submit" color="grey"/>    
    </div>
     
   </q-form>
    </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'canditatelogin',

   data(){
      return {
        username : "",
        Password : "",
        isPwd: true,
        accept: false
      }
    },

    methods:{
      login: function () {

          
         let data={
        "email":this.username,
         "password":this.Password
       
         }
          console.log(data)
         
         this.$store.dispatch('canditatelogin', data)
       
      
         
      },

   isValidEmail (val) {
    const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    return emailPattern.test(val) || 'Invalid email';
  },

  validpassword(val) {
    const validpasswordpattern  = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    return validpasswordpattern.test(val) || 'Minimum eight characters, at least one letter, number and special character';
  },
    }
}
</script>