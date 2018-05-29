<template>
  <section>
  	<div class="container" ref="mybox">
  		content2
  	</div>
  </section>
</template>
<script>
var _obj=document.getElementsByClassName('container');
var _w=document.documentElement.clientWidth;
var _h=document.documentElement.clientHeight;
//console.log(_w,_h);
export default {
  name: 'item2',
  mounted () {  
    this.init();  
  },  
  methods:{  
    init() {  
      const self = this;  
      this.$refs.mybox.style.width =_w+"px";  
      self.$refs.mybox.style.height =(_h-40-50)+"px";
    }  
  }  
}
</script>
<style scoped>
.container{color:#ffffff;text-align:center;color:red;width:0;height:0;}
</style>