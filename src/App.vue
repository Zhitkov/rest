<template>
  <div id="app">
    <navbar/>
    <menu-rest/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import MenuRest from './components/MenuRest';

export default {
  name: 'app',
  components: {
    Navbar,
    MenuRest
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style lang="scss">
.f_center{
    display: flex;
    -webkit-justify-content: center;
            justify-content: center;
    -webkit-align-items: center;
            align-items: center;
  }
.f{
  display: flex;
}
// p{
//   margin: 0px;
// }
</style>
