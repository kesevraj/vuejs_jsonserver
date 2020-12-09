import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Notify } from 'quasar'
import router from "../router"

Vue.use(Vuex)
var apiUrl="http://localhost:3000/"
export default new Vuex.Store({
  state: {
    joblist: [],
    newjob:"",
    status:"",
    canditatedetails:"",
    jobbyid:""
  },
  getters:{
    getcanditatedetails:state => state.canditatedetails,
    getjoblist: state => state.joblist,
    getjobbyId: (state) => (id) => {
      return state.joblist.filter(job => job.id === id)
    }
  },

  mutations: {

    canditatedetails:(state, payload) => {
      state.canditatedetails = payload;
      console.log(state.canditatedetails)
  },
    setjoblist: (state, payload) => {
      state.joblist = payload;
  },

  setnewjobs: (state, payload) => {
    state.newjob = payload;
},

setjobbyid: (state, payload) => {
  state.jobbyid = payload;
},

success: (state, payload) => {
  state.status = payload;
  
},
  },

  actions: {
    fetchjoblist: ({ commit }) => {
     
      axios.get(apiUrl+'joblist').then((response) => {
        console.log(response.data)
        let data= response.data
   commit('setjoblist', data);
 })
 
 .catch(error => {
  console.log('error', error);
  }); 
  
  },

  fetchjobbyid: ({ commit ,id}) => {
     
    axios.get(apiUrl+'joblist/'+id).then((response) => {
      console.log(response.data)
      let data= response.data
 commit('setjobbyid', data);
})

.catch(error => {
console.log('error', error);
}); 

},



  addjobs: ({commit}, data) => {
     console.log(data)
     axios.post(apiUrl+'joblist', data).then((response) => {
      console.log(response.data)
      
      //let data= response.data
 commit('setnewjobs', data);
 location.reload()
}) 
.catch(error => {
  console.log('error', error);
  })

},

updatejob: ({commit}, value) => {
  console.log(value.id)
  console.log(value.data)
  axios.put(apiUrl+'joblist/'+value.id,value.data).then((response) => {
   console.log(response.data)
   //location.reload()
   //let data= response.data
   let status=""
   commit('success', status);
   location.reload()
})
.catch(error => {
  console.log('error', error);
  })

},

deletejob: ({commit}, id) => {
  console.log(id)
  axios.delete(apiUrl+'joblist/'+id).then((response) => {
   console.log(response.data)
   Notify.create({
    type: 'positive',
    color: 'positive',
    timeout: 1000,
    position: 'center',
    message: 'deleted succesfully'
  })
  let status=true
   //let data= response.data
commit('success', status);
location.reload()
})
.catch(error => {
  console.log('error', error);
  }) 

},


applyjobs: ({commit}, value) => {
  console.log(value)
  axios.post(apiUrl+'joblist/'+value.id+'/apply',value.canditatedetails).then((response) => {
   console.log(response.data)
   
   //let data= response.data
let status= true
commit('success', status);

}) 
.catch(error => {
console.log('error', error);
})

},

recruiterlogin({commit}, user){
            
 
    console.log(user)
  axios.get(apiUrl+'recruiter')
    .then(resp => {
     console.log(resp);
   
let recruiterdata=resp.data

let check=recruiterdata.some( ( element) => element.email == user.email && element.password == user.password )
    console.log(check)
     if (!check) {

       Notify.create({
         type: 'warning',
         color: 'warning',
         timeout: 1000,
         position: 'center',
         message: "invalid email and password"
       })

        
   }

    else{

      Notify.create({
        type: 'positive',
        color: 'positive',
        timeout: 1000,
        position: 'center',
        message: "succesful"
      })
      let status= true
      commit('success', status);
      router.push('/recruiterpage')
    }
    
      
    })

    .catch(error => {
      console.log('error', error);
      })
    
 
},

canditatelogin({commit}, user){
            
 
  console.log(user)
axios.get(apiUrl+'canditate')
  .then(resp => {
   console.log(resp.data);
 
let canditatedata=resp.data

let check=canditatedata.some( ( element) => element.email == user.email && element.password == user.password )
  console.log(check)
   if (!check) {

     Notify.create({
       type: 'warning',
       color: 'warning',
       timeout: 1000,
       position: 'center',
       message: "invalid email and password"
     })

      
 }

  else{

    Notify.create({
      type: 'positive',
      color: 'positive',
      timeout: 1000,
      position: 'center',
      message: "succesful"
    })
    
    commit('canditatedetails', canditatedata);
    console.log(canditatedata)
    router.push('/joblist')
  }
  
    
  })
  .catch(error => {
  console.log('error', error);
  })
},


  },
  modules: {
  }
})
