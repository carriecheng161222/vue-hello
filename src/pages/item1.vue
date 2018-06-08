<template>
  <section>  
    <div class="container">  
      <span>Message: {{Msg1}}</span>

      <p>reversed message: "{{ reversedMsg1() }}"</p>
    </div>  
  </section>
</template>
<script>   
  export default {
    name: 'item1', 
    data(){return {Msg1:'Content1'}},
    methods: {  
      reversedMsg1: function () { 
        return this.Msg1.split('').reverse().join('') 
      }
    } 
  }
</script>
<style scoped>
  .container {color: #ffffff;text-align: center;color: red;width: 100%;height: 0;}
</style>
