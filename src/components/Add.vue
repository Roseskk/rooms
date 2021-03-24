<template>
  <form v-if="isTrue" @submit.prevent="onMerge">

    <span>Процессор : <input type="text" placeholder="cpu" v-model="tittle"> </span>
      <span>Видеокарта : <input type="text" placeholder="video" v-model="Video"></span>
      <span>RAM : <input type="text" placeholder="RAM" v-model="RAM"></span>
      <span>Номер аудитории : <input type="text" placeholder="num" v-model="num"></span>

    <button type="submit">Send</button>
    <h2 v-if="iactive">Добавлено</h2>
    <table class="set">
      <tr>
        <td>{{this.tittle}}</td>
        <td>{{this.Video}}</td>
        <td>{{this.RAM}}</td>
      </tr>
    </table>
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
  }
}
</script>

<style scoped>
.set {
  margin-top: 10px;
}
form {
  display: flex;
  align-items: center;
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