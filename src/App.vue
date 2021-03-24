<template>
  <div id="app">
    <div class="wrapper">
      <Cards
          v-bind:audiences="audiences"
          v-bind:room="mainRoom"
          @newRoom="newRoom"
          @deleteMe="deleteMe"
      />
      <div class="Adder">
        <button class="add-btn" v-if="completed" v-on:click="setNew">{{tittleBtn}}</button>
      </div>
        <Add v-if="active"
             v-bind:act="active"
             @addMerge="newMerge"
        />
    </div>
  </div>
</template>

<script>
import Cards from "@/components/Cards";
import Add from "@/components/Add";

export default {
  name: 'App',
  data() {
    return{
      tittleBtn:'Добавить',
      add:'Добавить',
      hide:'Скрыть',
      completed:false,
      isOn:true,
      active:false,
      audiences:[
        {id:'401',tittle:'401', switch:false},
        {id:'402',tittle: '402', switch: false}
      ],
      Rooms:[
        {id:'1',tittle:'CPU',Video:'Nvidia1',RAM:'8gb',num:'401'},
        {id:'2',tittle:'CPU',Video:'Nvidia2',RAM:'8gb',num:'401'},
        {id:'3',tittle:'CPU',Video:'Nvidia3',RAM:'8gb',num:'402'},
        {id:'4',tittle:'CPU',Video:'Nvidia4',RAM:'8gb',num:'401'},
        {id:'5',tittle:'CPU',Video:'Nvidia5',RAM:'8gb',num:'402'},
      ],
      main:[],
      mainRoom:[],
    }
  },
  components: {
    Cards,
    Add,
  },
  methods: {
    newRoom(id){
      if(this.isOn){
        this.completed = true
        console.log(id)
        console.log(this.audiences)
        this.Rooms.forEach(item1=> {
          if (id === item1.num) {
            console.log(this.Rooms)
            this.mainRoom.push(item1)
          }
        })
        this.isOn = false;
      }else if(!this.isOn){
        this.completed = false
        this.Rooms.forEach(item1=> {
          if (id === item1.num) {
            this.mainRoom = [];
          }
        })
        this.isOn = true;
      }
      console.log(this.mainRoom)
      console.log(id)
    },
    deleteMe(id) {
      this.mainRoom = this.mainRoom.filter(t=> t.id !==id)
    },
    setNew() {
      if (!this.active){
        this.tittleBtn = this.hide
        this.active =  true;
      } else if (this.active) {
        this.tittleBtn = this.add
        this.active = false;
      }
    },
    newMerge(some) {
      this.Rooms.push(some)
      console.log(this.Rooms)
    }
  }
}
</script>

<style>
body {
  background:#79a7d3;
}
.Adder {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
}
.add-btn {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  color: black;
  padding: 10px;
  border-radius: 12px;
  border: none;
}

#app {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;

}
</style>
