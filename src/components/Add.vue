<template>
  <form v-if="isTrue" @submit.prevent="onMerge">
    <div class="form-container">
      <div class="form-item">
        <span class="form-name">Процессор :</span> <input  required class="form-input" type="text" placeholder="cpu" v-model="tittle">
      </div>
      <div class="form-item">
        <span class="form-name">Видеокарта :</span> <input  required class="form-input" type="text" placeholder="video" v-model="Video">
      </div>
      <div class="form-item">
        <span class="form-name">RAM :</span> <input  required class="form-input" type="text" placeholder="RAM" v-model="RAM">
      </div>
      <div class="form-item">
        <span class="form-name">Номер аудитории : </span><input  required class="form-input" type="text" placeholder="num" v-model="num">
      </div>
    </div>
    <div :class="{submit: isChange}">
      <button type="submit">Send</button>
    </div>
    <table class="set">
      <tr v-for="item in tableRoom" v-bind:key="item.id">
        <td>{{item.tittle}}</td>
        <td>{{item.Video}}</td>
        <td>{{item.RAM}}</td>
        <td>{{item.num}}</td>
      </tr>
    </table>
  </form>
</template>

<script>
export default {
  props:['tableRoom'],
name: "Add",
  data(){
  return {
    isChange: true,
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
        this.tableRoom.push(newMerge)
    },
  }
}
</script>

<style scoped>
.form-container {
  margin: 0 auto;
  min-width: 400px;
  background: #6883bc;
  border-radius: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
}
.form-item {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.set {
  margin-top: 10px;
}
form {
  margin-top: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.form-name {
  text-shadow: 0 1px 1px #2d2020;
  color: white;
  width: 30%;
}
.form-input {
  background: #bbe1fa;
  margin: 5px;
  border: none;
  outline: none;
  padding: 5px;
  border-radius: 10px;
}
::placeholder {
  color: lightslategrey;
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