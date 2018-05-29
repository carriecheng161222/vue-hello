<template>
  <section>  
    <div class="container" ref="mybox">  
      <span>Message: {{Msg1}}</span>
      <p>Computed reversed message: "{{ reversedMsg1() }}"</p>

      <!--双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html 指令-->
      <p>Using v-html directive: <span v-html="Msg1"></span></p>

      <div>{{ fullName}}</div>
    </div>  
  </section>
</template>
<script>
  var _obj = document.getElementsByClassName('container'); 
  var _w = document.documentElement.clientWidth; 
  var _h = document.documentElement.clientHeight; 
  //console.log(_w,_h);

  
  export default {
    name: 'item1', 
    // data(){return {Msg1:'Content1'}},
    data:{
      firstName: 'Foo',
      lastName: 'Bar'      
    },
    computed: {
      fullName: function () {
        return this.firstName + ' ' + this.lastName
      }
    },
    mounted() {
      this.init();
    },
    methods: {  
      init() {  
        const self = this;  
        this.$refs.mybox.style.width = _w + "px";  
        self.$refs.mybox.style.height = (_h - 40 - 50) + "px";  
      },
      reversedMsg1: function () { 
        return this.Msg1.split('').reverse().join('') 
      }
    } 
  }
</script>
<style scoped>
  .container {color: #ffffff;text-align: center;color: red;width: 0;height: 0;}
</style>