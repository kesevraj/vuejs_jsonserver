<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        

         <q-btn
         v-if="$route.meta.title !='Home'"
          flat
          dense
          round
          icon="keyboard_arrow_left"
          aria-label="back"
          @click="$router.go(-1)"
        />

         <q-toolbar-title class="text-center" >{{ $route.meta.title }}</q-toolbar-title>
       

        <div>
         
        </div>

        <q-btn flat round dense> <q-icon name="more_vert" ></q-icon></q-btn>

        
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
     
    </q-drawer> -->

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>


export default {
  name: 'LayoutDefault',

  components: {
  
  },

  data () {
    return {
      leftDrawerOpen: true
    }
  }
}
</script>

<style>
</style>
