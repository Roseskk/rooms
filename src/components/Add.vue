<template>
  <form v-if="isTrue" @submit.prevent="onMerge">
    <input type="text" placeholder="cpu" v-model="tittle">
    <input type="text" placeholder="video" v-model="Video">
    <input type="text" placeholder="RAM" v-model="RAM">
    <input type="text" placeholder="num" v-model="num">
    <button v-on:click="Click" type="submit">Click</button>
    <h2 v-if="iactive">Добавлено</h2>
      <span>{{this.tittle}}</span>
      <span>{{this.Video}}</span>
      <span>{{this.RAM}}</span>
  </form>
</template>

<script>
export default {
  props:['act'],
name: "Add",
  data(){
  return {
    isTrue:true,
    iactive: false,
    tittle: '',
    Video:'',
    RAM:'',
    num:'',
    }
  },
  methods:{
    onMerge(){
        const newMerge = {
          id: Date.now(),
          tittle:this.tittle,
          Video: this.Video,
          RAM: this.RAM,
          num: this.num
        }
        this.$emit('addMerge',newMerge)
    },
    Click(){
      if(!this.iactive) {
        this.iactive = true
      }
      if(this.isTrue){
        this.isTrue = false
      }
      else {this.isTrue = true}
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
input {
  margin-top: 10px;
  max-width: 200px;
}
button {
  border:none;
  padding: 20px;
  border-radius: 12px;
  max-width: 150px;
  margin-top: 10px;
  background: lightslategray;
}
</style>